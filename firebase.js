// ===========================
// NextSem – firebase.js
// Firebase Auth + Firestore
// ===========================

// ── Firebase SDKs (CDN compat build) are loaded via <script> tags in index.html
// ── This file runs AFTER those scripts, so firebase is available globally.

const isLocalhost = window.location.hostname === 'localhost' || 
                    window.location.hostname === '127.0.0.1' || 
                    window.location.hostname.startsWith('192.168.');

const firebaseConfig = {
  apiKey: "AIzaSyDqrwPn_NZA5PCVP8EVobfvI_MrMvPFKq4",
  authDomain: "nodejs-by-nextsem.firebaseapp.com",
  projectId: "nodejs-by-nextsem",
  storageBucket: "nodejs-by-nextsem.firebasestorage.app",
  messagingSenderId: "963579346986",
  appId: "1:963579346986:web:7f25cc4f5781062010c353",
  measurementId: "G-34PBNXGXWR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db   = firebase.firestore();

// ─────────────────────────────────────────────────────────
//  Auth Providers
// ─────────────────────────────────────────────────────────
const googleProvider = new firebase.auth.GoogleAuthProvider();

// ─────────────────────────────────────────────────────────
//  Modal helpers
// ─────────────────────────────────────────────────────────
const authModal       = document.getElementById('auth-modal');
const authModalClose  = document.getElementById('auth-modal-close');
const authTabLogin    = document.getElementById('auth-tab-login');
const authTabSignup   = document.getElementById('auth-tab-signup');
const authFormLogin   = document.getElementById('auth-form-login');
const authFormSignup  = document.getElementById('auth-form-signup');
const authError       = document.getElementById('auth-error');
const authSuccess     = document.getElementById('auth-success');
// We select all elements for desktop & mobile to keep them in sync
const userPanels       = document.querySelectorAll('.user-panel');
const userAvatars      = document.querySelectorAll('.user-avatar');
const userDisplayNames = document.querySelectorAll('.user-name');
const signOutBtns      = document.querySelectorAll('.btn-signout, #sign-out-btn');
const authTriggerBtns  = document.querySelectorAll('.btn-auth');
const progressBar     = document.getElementById('progress-bar-fill');
const progressText    = document.getElementById('progress-text');
const progressSection = document.getElementById('progress-section');

function openModal(tab = 'login') {
  authModal.classList.add('open');
  clearAuthMessages();
  switchTab(tab);
}

function closeModal() {
  authModal.classList.remove('open');
  clearAuthMessages();
}

function switchTab(tab) {
  if (tab === 'login') {
    authTabLogin.classList.add('active');
    authTabSignup.classList.remove('active');
    authFormLogin.style.display = 'flex';
    authFormSignup.style.display = 'none';
  } else {
    authTabSignup.classList.add('active');
    authTabLogin.classList.remove('active');
    authFormSignup.style.display = 'flex';
    authFormLogin.style.display = 'none';
  }
}

function showAuthError(msg) {
  authError.textContent = msg;
  authError.style.display = 'block';
  authSuccess.style.display = 'none';
}

function showAuthSuccess(msg) {
  authSuccess.textContent = msg;
  authSuccess.style.display = 'block';
  authError.style.display = 'none';
}

function clearAuthMessages() {
  authError.style.display = 'none';
  authSuccess.style.display = 'none';
}

// ─────────────────────────────────────────────────────────
//  Auth Trigger (nav button)
// ─────────────────────────────────────────────────────────
authTriggerBtns.forEach(btn => {
  btn.addEventListener('click', () => openModal('login'));
});
authModalClose.addEventListener('click', closeModal);
authModal.addEventListener('click', e => { if (e.target === authModal) closeModal(); });
authTabLogin.addEventListener('click', () => switchTab('login'));
authTabSignup.addEventListener('click', () => switchTab('signup'));

// ─────────────────────────────────────────────────────────
//  Email / Password – Login
// ─────────────────────────────────────────────────────────
document.getElementById('login-btn').addEventListener('click', async () => {
  const email    = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  if (!email || !password) return showAuthError('Please fill in all fields.');
  clearAuthMessages();
  document.getElementById('login-btn').textContent = 'Signing in…';
  try {
    await auth.signInWithEmailAndPassword(email, password);
    closeModal();
  } catch (err) {
    console.error('Login error:', err);
    showAuthError(friendlyAuthError(err.code));
  } finally {
    document.getElementById('login-btn').textContent = 'Sign In';
  }
});

// ─────────────────────────────────────────────────────────
//  Email / Password – Signup
// ─────────────────────────────────────────────────────────
document.getElementById('signup-btn').addEventListener('click', async () => {
  const name     = document.getElementById('signup-name').value.trim();
  const email    = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  const confirm  = document.getElementById('signup-confirm').value;

  if (!name || !email || !password || !confirm) return showAuthError('Please fill in all fields.');
  if (password !== confirm) return showAuthError('Passwords do not match.');
  if (password.length < 6) return showAuthError('Password must be at least 6 characters.');
  clearAuthMessages();
  document.getElementById('signup-btn').textContent = 'Creating account…';
  try {
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    await cred.user.updateProfile({ displayName: name });
    await initUserDoc(cred.user.uid, name, email);
    showAuthSuccess('🎉 Account created! Welcome to NextSem!');
    setTimeout(closeModal, 1500);
  } catch (err) {
    console.error('Signup error:', err);
    showAuthError(friendlyAuthError(err.code));
  } finally {
    document.getElementById('signup-btn').textContent = 'Create Account';
  }
});

// ─────────────────────────────────────────────────────────
//  Google Sign-In
// ─────────────────────────────────────────────────────────
document.querySelectorAll('.google-sign-in-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    clearAuthMessages();
    try {
      const result = await auth.signInWithPopup(googleProvider);
      const user   = result.user;
      // Create Firestore doc if first-time user
      const snap = await db.collection('users').doc(user.uid).get();
      if (!snap.exists) {
        await initUserDoc(user.uid, user.displayName || 'Learner', user.email);
      }
      closeModal();
    } catch (err) {
      console.error('Google Sign-In error:', err);
      if (auth.currentUser) {
        closeModal();
      } else if (err.code !== 'auth/popup-closed-by-user' && err.code !== 'auth/cancelled-popup-request') {
        showAuthError(friendlyAuthError(err.code));
      }
    }
  });
});

// ─────────────────────────────────────────────────────────
//  Sign Out
// ─────────────────────────────────────────────────────────
signOutBtns.forEach(btn => {
  btn.addEventListener('click', async () => {
    await auth.signOut();
  });
});

// ─────────────────────────────────────────────────────────
//  Auth State Observer
// ─────────────────────────────────────────────────────────
auth.onAuthStateChanged(user => {
  const activeAuthBtns = document.querySelectorAll('.btn-auth');
  const activeUserPanels = document.querySelectorAll('.user-panel');
  const activeUserNames = document.querySelectorAll('.user-name');
  const activeUserAvatars = document.querySelectorAll('.user-avatar');

  if (user) {
    if (window.location.search.includes('action=signout')) {
      localStorage.removeItem('firebase_user');
      auth.signOut().then(() => {
        window.history.replaceState({}, document.title, window.location.pathname);
      });
      return;
    }

    localStorage.setItem('firebase_user', JSON.stringify({
      uid: user.uid,
      displayName: user.displayName || user.email.split('@')[0],
      email: user.email,
      photoURL: user.photoURL || ''
    }));

    closeModal();
    // Show user panels, hide login buttons
    activeAuthBtns.forEach(btn => btn.style.display = 'none');
    activeUserPanels.forEach(panel => {
      panel.style.display = 'flex';
    });
    activeUserNames.forEach(name => {
      name.textContent = user.displayName || user.email.split('@')[0];
    });
    // Avatar: first letter or photoURL
    activeUserAvatars.forEach(avatar => {
      if (user.photoURL) {
        avatar.innerHTML = `<img src="${user.photoURL}" alt="avatar" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
      } else {
        avatar.textContent = (user.displayName || user.email)[0].toUpperCase();
      }
    });
    if (progressSection) progressSection.style.display = 'block';
    loadUserProgress(user.uid);
  } else {
    localStorage.removeItem('firebase_user');
    activeAuthBtns.forEach(btn => btn.style.display = '');
    activeUserPanels.forEach(panel => panel.style.display = 'none');
    if (progressSection) progressSection.style.display = 'none';
  }
});

// ─────────────────────────────────────────────────────────
//  Firestore – User Document
// ─────────────────────────────────────────────────────────
async function initUserDoc(uid, name, email) {
  await db.collection('users').doc(uid).set({
    name,
    email,
    completedLessons: [],
    joinedAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

// ─────────────────────────────────────────────────────────
//  Firestore – Progress Tracking
// ─────────────────────────────────────────────────────────
const TOTAL_LESSONS = 20; // matches module count

async function loadUserProgress(uid) {
  const snap = await db.collection('users').doc(uid).get();
  if (!snap.exists) return;
  const data = snap.data();
  const completed = data.completedLessons || [];
  updateProgressUI(completed);
  markCompletedModules(completed);
  syncFirestoreProgressToLocal(completed);
}

function syncFirestoreProgressToLocal(completedArr) {
  if (typeof modules === 'undefined') return;
  let localCompleted = JSON.parse(localStorage.getItem('np_completed') || '[]');
  let modified = false;
  
  completedArr.forEach(item => {
    // e.g. "module-1" -> index = 0
    const parts = item.split('-');
    if (parts.length === 2) {
      const idx = parseInt(parts[1], 10) - 1;
      if (idx >= 0 && idx < modules.length) {
        const lessonId = modules[idx].lessonId;
        if (lessonId && !localCompleted.includes(lessonId)) {
          localCompleted.push(lessonId);
          modified = true;
        }
      }
    }
  });
  
  if (modified) {
    localStorage.setItem('np_completed', JSON.stringify(localCompleted));
    if (typeof updateContinueBanner === 'function') {
      updateContinueBanner();
    }
  }
}

function updateProgressUI(completedArr) {
  const pct = Math.round((completedArr.length / TOTAL_LESSONS) * 100);
  if (progressBar) progressBar.style.width   = pct + '%';
  if (progressText) progressText.textContent  = `${completedArr.length} / ${TOTAL_LESSONS} modules completed  (${pct}%)`;
}

function markCompletedModules(completedArr) {
  document.querySelectorAll('.module-card').forEach((card, i) => {
    const moduleId = `module-${i + 1}`;
    if (completedArr.includes(moduleId)) {
      card.classList.add('completed');
      // Add check badge if not already there
      if (!card.querySelector('.done-badge')) {
        const badge = document.createElement('span');
        badge.className = 'done-badge';
        badge.textContent = '✓';
        card.appendChild(badge);
      }
    }
  });
}

// Called from app.js when a module card is clicked by a logged-in user
window.markModuleDone = async function(moduleIndex) {
  const user = auth.currentUser;
  if (!user) { openModal('login'); return; }

  const moduleId = `module-${moduleIndex + 1}`;
  const snap     = await db.collection('users').doc(user.uid).get();
  const current  = (snap.data() && snap.data().completedLessons) || [];

  if (current.includes(moduleId)) return; // already done

  const updated = [...current, moduleId];
  await db.collection('users').doc(user.uid).update({
    completedLessons: firebase.firestore.FieldValue.arrayUnion(moduleId),
  });
  updateProgressUI(updated);
  markCompletedModules(updated);
  showToast(`Module ${moduleIndex + 1} marked complete! 🎉`);
};

// ─────────────────────────────────────────────────────────
//  Toast notification
// ─────────────────────────────────────────────────────────
function showToast(msg) {
  let toast = document.getElementById('firebase-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'firebase-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─────────────────────────────────────────────────────────
//  Friendly error messages
// ─────────────────────────────────────────────────────────
function friendlyAuthError(code, fallbackMessage = 'Something went wrong. Please try again.') {
  const map = {
    'auth/user-not-found'        : 'No account found with that email.',
    'auth/wrong-password'        : 'Incorrect password. Please try again.',
    'auth/email-already-in-use'  : 'An account with this email already exists.',
    'auth/invalid-email'         : 'Please enter a valid email address.',
    'auth/weak-password'         : 'Password should be at least 6 characters.',
    'auth/too-many-requests'     : 'Too many attempts. Please try again later.',
    'auth/network-request-failed': 'Network error. Check your connection.',
    'auth/popup-blocked'         : 'Popup was blocked. Allow popups for this site.',
    'auth/invalid-credential'    : 'Invalid email or password.',
    'auth/operation-not-allowed' : 'This sign-in method is disabled in the Firebase Console.',
    'auth/unauthorized-domain'   : 'This domain is not authorized for sign-in. If testing locally, use localhost instead of 127.0.0.1.',
    'auth/account-exists-with-different-credential': 'An account already exists with this email address but different sign-in credentials. Please sign in with email/password.',
  };
  if (map[code]) return map[code];
  if (code) return `${fallbackMessage} (${code})`;
  return fallbackMessage;
}
