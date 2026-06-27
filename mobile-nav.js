// ==========================================
// NextSem – mobile-nav.js
// ==========================================

(function() {
  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show PWA menu install container if it exists
    const menuPwaContainer = document.getElementById('menu-install-pwa-container');
    if (menuPwaContainer) {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
      if (!isStandalone) {
        menuPwaContainer.style.display = 'block';
      }
    }
    
    // Check first visit
    if (!localStorage.getItem('pwa_prompted')) {
      showCustomPwaBanner();
    }
  });

  function showCustomPwaBanner() {
    if (document.getElementById('custom-pwa-banner')) return;

    const banner = document.createElement('div');
    banner.className = 'pwa-install-banner';
    banner.id = 'custom-pwa-banner';
    banner.innerHTML = `
      <div class="pwa-banner-header" style="display: flex; align-items: flex-start; gap: 0.85rem;">
        <div class="pwa-banner-icon" style="font-size: 1.6rem; background: linear-gradient(135deg, var(--node-green), #3b82f6); width: 44px; height: 44px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(104,160,99,0.3); flex-shrink:0;">📲</div>
        <div class="pwa-banner-title" style="display:flex; flex-direction:column; gap:0.2rem;">
          <h4 style="margin: 0; font-family: var(--font-heading); font-size: 0.95rem; font-weight: 800; color:#fff; letter-spacing:0.02em;">Install NextSem App</h4>
          <p style="margin: 0; font-size: 0.76rem; color: var(--text-muted); line-height: 1.4;">Add to home screen for full-screen focus and fast offline access.</p>
        </div>
      </div>
      <div style="margin-top: 0.2rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 0.6rem;">
        <ul style="margin: 0; padding: 0 0 0 1rem; font-size: 0.72rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.35rem; list-style-type: '✓';">
          <li style="padding-left: 0.3rem;"> Runs in full screen without browser controls</li>
          <li style="padding-left: 0.3rem;"> Learn Node.js lessons even offline</li>
          <li style="padding-left: 0.3rem;"> Fully responsive native mobile experience</li>
        </ul>
      </div>
      <div class="pwa-banner-actions" style="margin-top: 0.4rem; display: flex; justify-content: flex-end; gap: 0.6rem; border-top: none; padding-top: 0;">
        <button class="pwa-btn-dismiss" id="pwa-banner-btn-dismiss" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); color: var(--text-secondary); border-radius: 6px; padding: 0.4rem 0.8rem; font-size: 0.75rem; font-weight: 700; cursor: pointer; transition: all 0.2s;">Later</button>
        <button class="pwa-btn-install" id="pwa-banner-btn-install" style="background: var(--node-green); border: 1px solid var(--node-green); color: white; border-radius: 6px; padding: 0.4rem 0.9rem; font-size: 0.75rem; font-weight: 700; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 10px rgba(104,160,99,0.2);">Install</button>
      </div>
    `;

    document.body.appendChild(banner);

    setTimeout(() => {
      banner.classList.add('show');
    }, 100);

    document.getElementById('pwa-banner-btn-install').addEventListener('click', () => {
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 400);
      localStorage.setItem('pwa_prompted', 'true');
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          console.log('PWA user choice outcome:', choiceResult.outcome);
          deferredPrompt = null;
          const menuPwaContainer = document.getElementById('menu-install-pwa-container');
          if (menuPwaContainer) menuPwaContainer.style.display = 'none';
        });
      }
    });

    document.getElementById('pwa-banner-btn-dismiss').addEventListener('click', () => {
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 400);
      localStorage.setItem('pwa_prompted', 'true');
    });
  }

  // Lessons list for mobile search overlay
  const searchLessons = [
    { id: 'hello-world', icon: '🌱', title: 'Your First Node.js Program', track: 'Core Node.js' },
    { id: 'modules', icon: '⚙️', title: 'Working with Modules', track: 'Core Node.js' },
    { id: 'os-process', icon: '📦', title: 'NPM & Dependency Management', track: 'Core Node.js' },
    { id: 'async', icon: '⚡', title: 'Asynchronous Flow Control', track: 'Core Node.js' },
    { id: 'fs', icon: '📁', title: 'File System & Streams', track: 'Core Node.js' },
    { id: 'env-config', icon: '🔧', title: 'Environment Variables & Config', track: 'Core Node.js' },
    { id: 'http', icon: '🌐', title: 'HTTP Server from scratch', track: 'Express & Web' },
    { id: 'express', icon: '🚂', title: 'Express.js Web Framework', track: 'Express & Web' },
    { id: 'error-handling', icon: '📋', title: 'REST APIs & Middleware', track: 'Express & Web' },
    { id: 'cors-helmet', icon: '🔒', title: 'CORS & Security Headers', track: 'Express & Web' },
    { id: 'file-upload', icon: '📤', title: 'File Uploads with Multer', track: 'Express & Web' },
    { id: 'graphql', icon: '🔮', title: 'GraphQL APIs', track: 'Express & Web' },
    { id: 'database', icon: '🍏', title: 'MongoDB & Mongoose NoSQL', track: 'Database & Auth' },
    { id: 'database', icon: '🗄️', title: 'Relational Database PG client', track: 'Database & Auth' },
    { id: 'jwt', icon: '🔐', title: 'JWT Auth & Security Headers', track: 'Database & Auth' },
    { id: 'websockets', icon: '🔴', title: 'Socket.io WebSockets', track: 'Database & Auth' },
    { id: 'redis', icon: '⚡', title: 'Redis & In-Memory Caching', track: 'Database & Auth' },
    { id: 'testing', icon: '🧪', title: 'Testing Node.js with Jest', track: 'Testing & DevOps' },
    { id: 'testing', icon: '🐳', title: 'Docker containerization & PM2', track: 'Testing & DevOps' },
    { id: 'clustering', icon: '🖥️', title: 'Clustering & Worker Threads', track: 'Testing & DevOps' }
  ];

  // Inject markup on DOM load
  document.addEventListener('DOMContentLoaded', initMobileNav);
  
  // Double-run check in case DOMContentLoaded has already fired
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initMobileNav();
  }

  function initMobileNav() {
    if (document.querySelector('.mobile-bottom-nav')) return; // Avoid duplicate injection

    // 1. Create Bottom Navigation HTML
    const bottomNav = document.createElement('div');
    bottomNav.className = 'mobile-bottom-nav';
    
    // Determine active tab based on current page
    const pathname = window.location.pathname;
    const isHome = pathname.endsWith('index.html') || pathname.endsWith('/') || pathname === '';
    const isLessons = pathname.includes('lessons.html') || pathname.includes('swiper-demo.html') || pathname.includes('interactive-notebook.html') || pathname.includes('syllabus.html');
    const isPlayground = pathname.includes('playground.html');
    
    bottomNav.innerHTML = `
      <button class="bottom-nav-btn ${isHome ? 'active' : ''}" id="bottom-nav-home" aria-label="Home">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" style="margin-bottom:2px;">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>Home</span>
      </button>
      <button class="bottom-nav-btn ${isLessons ? 'active' : ''}" id="bottom-nav-lessons" aria-label="Lessons">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" style="margin-bottom:2px;">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        <span>Lessons</span>
      </button>
      <button class="bottom-nav-btn" id="bottom-nav-search" aria-label="Search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" style="margin-bottom:2px;">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span>Search</span>
      </button>
      <button class="bottom-nav-btn ${isPlayground ? 'active' : ''}" id="bottom-nav-playground" aria-label="Playground">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" style="margin-bottom:2px;">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        <span>Playground</span>
      </button>
      <button class="bottom-nav-btn" id="bottom-nav-profile" aria-label="Menu">
        <div class="profile-btn-avatar" id="bottom-nav-avatar-img">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" style="margin-bottom:2px;">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <span>Menu</span>
      </button>
    `;

    // 2. Create Profile Menu Overlay HTML (with integrated search)
    const profileOverlay = document.createElement('div');
    profileOverlay.className = 'mobile-overlay';
    profileOverlay.id = 'profile-overlay';
    profileOverlay.innerHTML = `
      <div class="overlay-header">
        <h3>Menu & Account</h3>
        <button class="close-overlay-btn" id="close-profile-overlay">&times;</button>
      </div>
      <div class="overlay-body">
        <!-- Integrated Search Bar -->
        <div class="search-input-wrap" style="margin-bottom: 0.75rem;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" id="mobile-search-input" placeholder="Search topics (e.g. Express, Event Loop...)" autocomplete="off" />
        </div>
        <div class="search-results-list" id="mobile-search-results" style="display: none; margin-bottom: 0.75rem; max-height: 250px; overflow-y: auto; border: 1px solid var(--border); border-radius: var(--radius-md); background: rgba(0,0,0,0.15);">
          <!-- Injected dynamically -->
        </div>

        <!-- Suggested Search Topics -->
        <div id="mobile-search-suggestions" style="display: none; margin-bottom: 1.25rem;">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 4px;">
            <span>💡</span> Popular Topics
          </div>
          <div class="suggestion-tags-list" style="display: flex; flex-wrap: wrap; gap: 6px;">
            <button class="s-tag-btn" data-query="Event Loop">Event Loop ⚡</button>
            <button class="s-tag-btn" data-query="Middleware">Middleware 🚂</button>
            <button class="s-tag-btn" data-query="JWT">JWT Security 🔒</button>
            <button class="s-tag-btn" data-query="Jest">Jest Testing 🧪</button>
            <button class="s-tag-btn" data-query="Database">Database 🗄️</button>
            <button class="s-tag-btn" data-query="Worker">Workers 🖥️</button>
            <button class="s-tag-btn" data-query="Asynchronous">Async Promises ⏳</button>
            <button class="s-tag-btn" data-query="Package">NPM Packages 📦</button>
          </div>
        </div>

        <!-- Profile Account Card -->
        <div class="overlay-user-card" id="mobile-user-card">
          <!-- Injected dynamically based on Auth state -->
        </div>
        
        <!-- Hamburger Menu Links -->
        <div class="overlay-menu-links">
          <a href="index.html" class="overlay-menu-link">🏠 Home / Curriculum</a>
          <a href="#" class="overlay-menu-link" id="menu-trigger-tour" style="color: var(--node-green-light); font-weight: 700;">💡 How to Navigate (Guide)</a>
          <a href="syllabus.html" class="overlay-menu-link">📋 Syllabus Grid</a>
          <a href="interactive-notebook.html" class="overlay-menu-link">🚀 Interactive Notebook</a>
          <a href="swiper-demo.html" class="overlay-menu-link">↕️ 1000 Swipe Lessons</a>
          <a href="lessons.html?v=39" class="overlay-menu-link">📚 Node.js Lessons</a>
          <a href="playground.html?v=39" class="overlay-menu-link">💻 Code Playground</a>
          <a href="blog.html" class="overlay-menu-link">✍️ Tech Blog</a>
          <a href="about.html" class="overlay-menu-link">ℹ️ About Us</a>
          <a href="contact.html" class="overlay-menu-link">✉️ Contact Us</a>
          <a href="privacy.html" class="overlay-menu-link">🔒 Privacy Policy</a>
        </div>

        <!-- PWA Install Menu Item -->
        <div class="menu-install-pwa-wrap" id="menu-install-pwa-container" style="display: none;">
          <button class="btn-install-pwa" id="btn-install-pwa">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            📲 Install NextSem App
          </button>
        </div>

        <!-- Settings Section -->
        <div class="overlay-settings-sec">
          <h4>Settings</h4>
          <div class="settings-item">
            <span>Dark Mode</span>
            <label class="switch">
              <input type="checkbox" id="settings-darkmode-toggle" />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="settings-item">
            <span>Offline Support (PWA)</span>
            <span class="settings-badge">Active</span>
          </div>
          <div class="settings-item" id="btn-clear-local-progress" style="margin-top: 0.5rem; padding-top: 0.75rem; border-top: 1px solid var(--border); cursor: pointer;">
            <span style="color: #ff7b72;">Clear Progress</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="#ff7b72" stroke-width="2" width="16" height="16">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </div>
        </div>
      </div>
    `;

    // 2.5 Create App Tour Elements HTML
    const tourBackdrop = document.createElement('div');
    tourBackdrop.className = 'tour-backdrop';
    tourBackdrop.id = 'app-tour-backdrop';

    const tourTooltip = document.createElement('div');
    tourTooltip.className = 'tour-tooltip';
    tourTooltip.id = 'app-tour-tooltip';
    tourTooltip.style.display = 'none'; // hidden initially
    tourTooltip.innerHTML = `
      <div style="flex:1;">
        <h4 id="tour-step-title" style="margin: 0; font-size: 0.95rem; font-weight: 800; color: var(--node-green-light);"></h4>
        <p id="tour-step-desc" style="margin: 6px 0 0 0; font-size: 0.82rem; line-height: 1.4; color: #a8b5c2;"></p>
      </div>
      <div class="tour-tooltip-actions" style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
        <button class="tour-btn-skip" id="tour-skip-btn">Skip</button>
        <div class="tour-btn-nav-group" style="display: flex; gap: 6px;">
          <button class="tour-btn-back" id="tour-back-btn">Back</button>
          <button class="tour-btn-next" id="tour-next-btn">Next</button>
        </div>
      </div>
    `;

    // Append elements to body
    document.body.appendChild(bottomNav);
    document.body.appendChild(profileOverlay);
    document.body.appendChild(tourBackdrop);
    document.body.appendChild(tourTooltip);

    // 3. Setup Button Event Listeners
    const btnHome = document.getElementById('bottom-nav-home');
    const btnLessons = document.getElementById('bottom-nav-lessons');
    const btnSearch = document.getElementById('bottom-nav-search');
    const btnPlayground = document.getElementById('bottom-nav-playground');
    const btnProfile = document.getElementById('bottom-nav-profile');

    const overlayProfile = document.getElementById('profile-overlay');
    const closeProfile = document.getElementById('close-profile-overlay');

    // Interactive Tour Logic
    const tourSteps = [
      {
        target: '.hero-title',
        title: 'Welcome to Node.js by NextSem! 👋',
        desc: 'This is a structured, interactive backend development course. Let\'s show you around!',
        pos: 'bottom'
      },
      {
        target: '.sc-swipe-hint',
        title: 'Vertical Swipe Navigation ↕',
        desc: 'Swipe up or down anywhere on the screen (or use Up/Down arrow keys) to navigate through chapters and slides.',
        pos: 'top'
      },
      {
        target: '.hero-features-grid',
        title: 'Hands-On Learning Tools ⚡',
        desc: 'Run simulated server executions, inspect code, and complete challenges directly inside lessons.',
        pos: 'bottom'
      },
      {
        target: '.mobile-bottom-nav',
        title: 'Bottom Navigation Bar 📱',
        desc: 'Instantly toggle between Home, vertical Lessons swiper, Sandbox Playground, and Menu settings.',
        pos: 'top'
      },
      {
        target: '#bottom-nav-profile',
        title: 'Account Settings & Search 👤',
        desc: 'Click Menu to search lessons, view your learning completion statistics, or sign in to sync progress.',
        pos: 'top'
      }
    ];

    let currentStep = 0;
    let activeSteps = [];

    function startTour() {
      activeSteps = tourSteps.filter(step => document.querySelector(step.target) !== null);
      if (activeSteps.length === 0) return;
      
      currentStep = 0;
      tourBackdrop.style.display = 'block';
      tourTooltip.style.display = 'flex';
      
      // trigger reflow for smooth scale/fade transitions
      tourBackdrop.offsetHeight;
      tourTooltip.offsetHeight;
      
      tourBackdrop.classList.add('active');
      tourTooltip.classList.add('active');
      showStep(0);
    }

    function showStep(stepIdx) {
      if (stepIdx < 0 || stepIdx >= activeSteps.length) {
        endTour();
        return;
      }
      
      currentStep = stepIdx;
      const step = activeSteps[currentStep];
      const targetEl = document.querySelector(step.target);
      if (!targetEl) {
        showStep(stepIdx + 1);
        return;
      }

      // Remove previous highlights
      document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));

      // Highlight active element
      targetEl.classList.add('tour-highlight');

      // Update contents
      document.getElementById('tour-step-title').textContent = step.title;
      document.getElementById('tour-step-desc').textContent = step.desc;

      // Update buttons
      const btnNext = document.getElementById('tour-next-btn');
      const btnBack = document.getElementById('tour-back-btn');
      if (btnNext) btnNext.textContent = currentStep === activeSteps.length - 1 ? 'Finish' : 'Next';
      if (btnBack) btnBack.style.visibility = currentStep === 0 ? 'hidden' : 'visible';

      // Position tooltip
      positionTooltip(targetEl, step.pos);
    }

    function positionTooltip(targetEl, pos) {
      const rect = targetEl.getBoundingClientRect();
      const tooltipWidth = tourTooltip.offsetWidth || 280;
      const tooltipHeight = tourTooltip.offsetHeight || 120;
      
      let top = 0;
      let left = 0;

      if (pos === 'top') {
        top = rect.top - tooltipHeight - 16;
        left = rect.left + rect.width / 2 - tooltipWidth / 2;
      } else if (pos === 'bottom') {
        top = rect.bottom + 16;
        left = rect.left + rect.width / 2 - tooltipWidth / 2;
      } else {
        top = window.innerHeight / 2 - tooltipHeight / 2;
        left = window.innerWidth / 2 - tooltipWidth / 2;
      }

      // Viewport safety boundaries
      left = Math.max(16, Math.min(window.innerWidth - tooltipWidth - 16, left));
      top = Math.max(16, Math.min(window.innerHeight - tooltipHeight - 16, top));

      tourTooltip.style.top = top + 'px';
      tourTooltip.style.left = left + 'px';
      
      // Scroll target into view if hidden
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function endTour() {
      tourBackdrop.classList.remove('active');
      tourTooltip.classList.remove('active');
      document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));
      setTimeout(() => {
        tourBackdrop.style.display = 'none';
        tourTooltip.style.display = 'none';
      }, 250);
      localStorage.setItem('np_tour_seen', 'true');
    }

    // Attach Tour Listeners
    const btnTourTrigger = document.getElementById('menu-trigger-tour');
    const btnSkip = document.getElementById('tour-skip-btn');
    const btnBack = document.getElementById('tour-back-btn');
    const btnNext = document.getElementById('tour-next-btn');

    if (btnTourTrigger) {
      btnTourTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        closeAllOverlays();
        startTour();
      });
    }

    if (btnSkip) {
      btnSkip.addEventListener('click', endTour);
    }
    if (tourBackdrop) {
      tourBackdrop.addEventListener('click', endTour);
    }

    if (btnBack) {
      btnBack.addEventListener('click', () => {
        showStep(currentStep - 1);
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        showStep(currentStep + 1);
      });
    }

    // Auto-show tour on first visit
    if (!localStorage.getItem('np_tour_seen')) {
      setTimeout(() => {
        startTour();
      }, 1000);
    }

    function closeAllOverlays() {
      overlayProfile.style.display = 'none';
      if (btnProfile) btnProfile.classList.remove('active');
      if (btnSearch) btnSearch.classList.remove('active');
      
      // restore active states
      if (isHome && btnHome) btnHome.classList.add('active');
      else if (btnHome) btnHome.classList.remove('active');

      if (isLessons && btnLessons) btnLessons.classList.add('active');
      else if (btnLessons) btnLessons.classList.remove('active');

      if (isPlayground && btnPlayground) btnPlayground.classList.add('active');
      else if (btnPlayground) btnPlayground.classList.remove('active');
    }

    if (btnHome) {
      btnHome.addEventListener('click', () => {
        closeAllOverlays();
        if (!isHome) {
          window.location.href = 'index.html';
        } else {
          if (typeof window.slideTo === 'function') {
            window.slideTo(0);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      });
    }

    if (btnLessons) {
      btnLessons.addEventListener('click', () => {
        closeAllOverlays();
        if (!isLessons) {
          window.location.href = 'lessons.html';
        }
      });
    }

    if (btnPlayground) {
      btnPlayground.addEventListener('click', () => {
        closeAllOverlays();
        if (!isPlayground) {
          window.location.href = 'playground.html';
        }
      });
    }

    if (btnProfile) {
      btnProfile.addEventListener('click', () => {
        if (overlayProfile.style.display === 'flex' && btnProfile.classList.contains('active')) {
          closeAllOverlays();
        } else {
          closeAllOverlays();
          syncProfileState();

          // Restore visible sections for Menu mode
          const userCard = document.getElementById('mobile-user-card');
          if (userCard) userCard.style.display = 'block';
          const menuLinks = overlayProfile.querySelector('.overlay-menu-links');
          if (menuLinks) menuLinks.style.display = 'flex';
          const settingsSec = overlayProfile.querySelector('.overlay-settings-sec');
          if (settingsSec) settingsSec.style.display = 'block';
          const headerTitle = overlayProfile.querySelector('.overlay-header h3');
          if (headerTitle) headerTitle.textContent = 'Menu & Account';
          const suggestions = document.getElementById('mobile-search-suggestions');
          if (suggestions) suggestions.style.display = 'none';

          overlayProfile.style.display = 'flex';
          btnProfile.classList.add('active');
          if (btnHome) btnHome.classList.remove('active');
          if (btnLessons) btnLessons.classList.remove('active');
          if (btnPlayground) btnPlayground.classList.remove('active');
          if (btnSearch) btnSearch.classList.remove('active');
        }
      });
    }

    if (btnSearch) {
      btnSearch.addEventListener('click', () => {
        if (overlayProfile.style.display === 'flex' && btnSearch.classList.contains('active')) {
          closeAllOverlays();
        } else {
          closeAllOverlays();

          // Hide Menu sections for dedicated Search mode
          const userCard = document.getElementById('mobile-user-card');
          if (userCard) userCard.style.display = 'none';
          const menuLinks = overlayProfile.querySelector('.overlay-menu-links');
          if (menuLinks) menuLinks.style.display = 'none';
          const settingsSec = overlayProfile.querySelector('.overlay-settings-sec');
          if (settingsSec) settingsSec.style.display = 'none';
          const headerTitle = overlayProfile.querySelector('.overlay-header h3');
          if (headerTitle) headerTitle.textContent = 'Search Lessons';
          const suggestions = document.getElementById('mobile-search-suggestions');
          if (suggestions) suggestions.style.display = 'block';

          overlayProfile.style.display = 'flex';
          btnSearch.classList.add('active');
          if (btnHome) btnHome.classList.remove('active');
          if (btnLessons) btnLessons.classList.remove('active');
          if (btnPlayground) btnPlayground.classList.remove('active');
          if (btnProfile) btnProfile.classList.remove('active');

          // Focus input box
          setTimeout(() => {
            const searchInput = document.getElementById('mobile-search-input');
            if (searchInput) {
              searchInput.focus();
            }
          }, 100);
        }
      });
    }

    if (closeProfile) {
      closeProfile.addEventListener('click', closeAllOverlays);
    }

    // PWA overlay button install action
    const btnInstallPwa = document.getElementById('btn-install-pwa');
    if (btnInstallPwa) {
      btnInstallPwa.addEventListener('click', () => {
        closeAllOverlays();
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult) => {
            console.log('PWA menu user choice outcome:', choiceResult.outcome);
            deferredPrompt = null;
            const menuPwaContainer = document.getElementById('menu-install-pwa-container');
            if (menuPwaContainer) menuPwaContainer.style.display = 'none';
          });
        }
      });
    }

    // 4. Search Filter Logic
    const searchInput = document.getElementById('mobile-search-input');
    const searchResults = document.getElementById('mobile-search-results');

    // Hook Popular Topic suggestion tags clicks
    const suggestionBtns = document.querySelectorAll('.s-tag-btn');
    suggestionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const query = btn.getAttribute('data-query');
        if (searchInput) {
          searchInput.value = query;
          searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
    });

    function renderSearchResults(query = '') {
      searchResults.innerHTML = '';
      const term = query.toLowerCase().trim();
      
      if (term === '') {
        searchResults.style.display = 'none';
        return;
      }

      const filtered = searchLessons.filter(lesson => 
        lesson.title.toLowerCase().includes(term) || 
        lesson.track.toLowerCase().includes(term) ||
        lesson.id.toLowerCase().includes(term)
      );

      searchResults.style.display = 'block';

      if (filtered.length === 0) {
        searchResults.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 1.5rem 0; font-size: 0.85rem;">No lessons match "${query}"</div>`;
        return;
      }

      filtered.forEach(lesson => {
        const item = document.createElement('a');
        item.href = `lessons.html#${lesson.id}`;
        item.className = 'search-result-item';
        
        // Show completion status indicator in search list
        const isDone = JSON.parse(localStorage.getItem('np_completed') || '[]').includes(lesson.id);
        const doneIndicator = isDone ? ' <span style="color:var(--node-green-light);font-size:0.72rem;font-weight:bold;">✓ Completed</span>' : '';
        
        item.innerHTML = `
          <div class="search-result-info">
            <span class="search-result-track">${lesson.track}</span>
            <span class="search-result-title">${lesson.icon} ${lesson.title}${doneIndicator}</span>
          </div>
          <span class="search-result-arrow">→</span>
        `;
        item.addEventListener('click', () => {
          closeAllOverlays();
        });
        searchResults.appendChild(item);
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        renderSearchResults(e.target.value);
      });
    }

    // 5. Profile / Auth State Sync Logic
    const userCard = document.getElementById('mobile-user-card');

    // Create User Profile Sidebar HTML dynamically
    const userSidebarBackdrop = document.createElement('div');
    userSidebarBackdrop.className = 'sidebar-backdrop';
    userSidebarBackdrop.id = 'user-sidebar-backdrop';

    const userSidebar = document.createElement('div');
    userSidebar.className = 'user-sidebar';
    userSidebar.id = 'user-sidebar';
    userSidebar.innerHTML = `
      <div class="sidebar-header">
        <h3>My Account</h3>
        <button class="sidebar-close-btn" id="user-sidebar-close" aria-label="Close sidebar">&times;</button>
      </div>
      <div class="sidebar-body">
        <!-- Logged Out View -->
        <div class="sidebar-logged-out" id="sidebar-logged-out">
          <div class="welcome-box">
            <h4>Welcome to NextSem</h4>
            <p>Sign in to sync your progress across devices and save playground scripts.</p>
          </div>
          <button class="google-sign-in-btn" id="sidebar-google-btn" aria-label="Sign in with Google">
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Continue with Google
          </button>
          <div class="sidebar-divider"><span>or</span></div>
          <button class="sidebar-email-btn" id="sidebar-email-btn">Sign in with Email</button>
        </div>

        <!-- Logged In View -->
        <div class="sidebar-logged-in" id="sidebar-logged-in" style="display: none;">
          <div class="sidebar-user-card">
            <div class="sidebar-user-avatar" id="sidebar-avatar"></div>
            <div class="sidebar-user-info">
              <span class="sidebar-username" id="sidebar-username">Learner</span>
              <span class="sidebar-user-email" id="sidebar-user-email">email@example.com</span>
            </div>
          </div>
          
          <div class="sidebar-progress-sec">
            <div class="progress-lbl-row">
              <span>Overall Progress</span>
              <span id="sidebar-progress-text">0 / 20 modules</span>
            </div>
            <div class="sidebar-pb-wrap">
              <div class="sidebar-pb-fill" id="sidebar-progress-fill" style="width: 0%;"></div>
            </div>
          </div>

          <!-- Achievements Badges Section -->
          <div class="sidebar-badges-sec" style="margin: 0.8rem 0 1.2rem; border-top: 1px dashed rgba(255,255,255,0.06); padding-top: 0.8rem;">
            <div style="font-size: 0.72rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 0.05em;">Unlocked Badges</div>
            <div id="sidebar-badges-container" style="display: flex; gap: 8px; flex-wrap: wrap;"></div>
          </div>

          <div class="sidebar-menu-items">
            <a href="index.html" class="sidebar-menu-item">🏠 Home / Curriculum</a>
            <a href="lessons.html?v=35" class="sidebar-menu-item">📚 Node.js Lessons</a>
            <a href="playground.html?v=35" class="sidebar-menu-item">💻 Code Playground</a>
            <a href="privacy.html" class="sidebar-menu-item">🔒 Privacy Policy</a>
          </div>

          <button class="btn-sidebar-signout" id="sidebar-signout-btn">Sign Out</button>
        </div>
      </div>
    `;

    document.body.appendChild(userSidebarBackdrop);
    document.body.appendChild(userSidebar);

    function openSidebar() {
      syncSidebarContent();
      userSidebarBackdrop.style.display = 'block';
      userSidebarBackdrop.offsetHeight; // trigger reflow
      userSidebar.offsetHeight;
      userSidebarBackdrop.classList.add('active');
      userSidebar.classList.add('open');
    }

    function closeSidebar() {
      userSidebarBackdrop.classList.remove('active');
      userSidebar.classList.remove('open');
      setTimeout(() => {
        if (!userSidebar.classList.contains('open')) {
          userSidebarBackdrop.style.display = 'none';
        }
      }, 300);
    }

    document.getElementById('user-sidebar-close').addEventListener('click', closeSidebar);
    userSidebarBackdrop.addEventListener('click', closeSidebar);

    // Sidebar Sign-Out Action
    document.getElementById('sidebar-signout-btn').addEventListener('click', async () => {
      closeSidebar();
      try {
        localStorage.removeItem('firebase_user');
        if (typeof firebase !== 'undefined' && firebase.auth) {
          await firebase.auth().signOut();
        } else {
          window.location.href = 'index.html?action=signout';
        }
      } catch (e) {
        console.error('Sign out error:', e);
      }
    });

    // Sidebar Google Sign-In Action
    document.getElementById('sidebar-google-btn').addEventListener('click', () => {
      closeSidebar();
      const modalGoogleBtn = document.querySelector('#auth-modal .google-sign-in-btn');
      if (modalGoogleBtn) {
        modalGoogleBtn.click();
      } else {
        const anyGoogleBtn = document.querySelector('.google-sign-in-btn');
        if (anyGoogleBtn) {
          anyGoogleBtn.click();
        } else {
          window.location.href = 'index.html#auth-google';
        }
      }
    });

    // Sidebar Email Sign-In Action
    document.getElementById('sidebar-email-btn').addEventListener('click', () => {
      closeSidebar();
      if (typeof openModal === 'function') {
        openModal('login');
      } else {
        window.location.href = 'index.html#auth';
      }
    });

    // Floating header trigger and desktop auth setup
    function setupTopRightAuth() {
      let authBtn = document.getElementById('auth-trigger-btn');
      let userPanel = document.getElementById('user-panel');
      const navActions = document.querySelector('.nav-actions');

      if (!authBtn) {
        authBtn = document.createElement('button');
        authBtn.id = 'auth-trigger-btn';
        authBtn.className = 'btn-auth';
        authBtn.setAttribute('aria-label', 'Sign in');
        authBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
      }
      if (!userPanel) {
        userPanel = document.createElement('div');
        userPanel.id = 'user-panel';
        userPanel.className = 'user-panel';
        userPanel.style.display = 'none';
        userPanel.innerHTML = `<div class="user-avatar" id="user-avatar"></div>`;
      }

      if (navActions) {
        if (!navActions.contains(authBtn)) {
          authBtn.className = 'btn-auth';
          authBtn.setAttribute('aria-label', 'Sign in');
          authBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
          navActions.insertBefore(authBtn, navActions.firstChild);
        }
        if (!navActions.contains(userPanel)) {
          userPanel.className = 'user-panel';
          navActions.insertBefore(userPanel, navActions.firstChild);
        }
      } else {
        let floatContainer = document.querySelector('.floating-top-actions');
        if (!floatContainer) {
          floatContainer = document.createElement('div');
          floatContainer.className = 'floating-top-actions';
          document.body.appendChild(floatContainer);
        }
        if (!floatContainer.contains(authBtn)) {
          authBtn.className = 'btn-auth';
          authBtn.setAttribute('aria-label', 'Sign in');
          authBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
          floatContainer.appendChild(authBtn);
        }
        if (!floatContainer.contains(userPanel)) {
          userPanel.className = 'user-panel';
          floatContainer.appendChild(userPanel);
        }
      }

      // Re-attach sidebar listeners to the moved/created buttons
      const activeAuthBtn = document.getElementById('auth-trigger-btn');
      if (activeAuthBtn) {
        const newAuthBtn = activeAuthBtn.cloneNode(true);
        activeAuthBtn.parentNode.replaceChild(newAuthBtn, activeAuthBtn);
        newAuthBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          openSidebar();
        });
      }

      const topAvatar = document.getElementById('user-avatar');
      if (topAvatar) {
        const newTopAvatar = topAvatar.cloneNode(true);
        topAvatar.parentNode.replaceChild(newTopAvatar, topAvatar);
        newTopAvatar.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          openSidebar();
        });
      }
    }

    setupTopRightAuth();

    function getFirebaseUser() {
      try {
        const userStr = localStorage.getItem('firebase_user');
        return userStr ? JSON.parse(userStr) : null;
      } catch (e) {
        return null;
      }
    }

    function syncSidebarContent() {
      const topUserPanel = document.getElementById('user-panel');
      const localUser = getFirebaseUser();
      const isUserSignedIn = (topUserPanel && topUserPanel.style.display !== 'none') || localUser !== null;
      const loggedOutDiv = document.getElementById('sidebar-logged-out');
      const loggedInDiv = document.getElementById('sidebar-logged-in');

      if (isUserSignedIn) {
        if (loggedOutDiv) loggedOutDiv.style.display = 'none';
        if (loggedInDiv) loggedInDiv.style.display = 'flex';

        if (topUserPanel && topUserPanel.style.display === 'none') {
          topUserPanel.style.display = 'flex';
          const authBtn = document.querySelector('.btn-auth');
          if (authBtn) authBtn.style.display = 'none';
        }

        let displayName = 'User';
        let email = 'NextSem Student';
        let avatarHtml = '';

        if (typeof firebase !== 'undefined' && firebase.auth().currentUser) {
          const user = firebase.auth().currentUser;
          displayName = user.displayName || user.email.split('@')[0];
          email = user.email;
          if (user.photoURL) {
            avatarHtml = `<img src="${user.photoURL}" alt="avatar" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
          } else {
            avatarHtml = (user.displayName || user.email)[0].toUpperCase();
          }
        } else if (localUser) {
          displayName = localUser.displayName;
          email = localUser.email;
          if (localUser.photoURL) {
            avatarHtml = `<img src="${localUser.photoURL}" alt="avatar" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
          } else {
            avatarHtml = (localUser.displayName || localUser.email)[0].toUpperCase();
          }
        } else {
          displayName = document.getElementById('user-display-name')?.textContent || 'Learner';
          const topAvatar = document.getElementById('user-avatar');
          if (topAvatar) {
            const img = topAvatar.querySelector('img');
            if (img) {
              avatarHtml = `<img src="${img.src}" alt="avatar" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
            } else {
              avatarHtml = topAvatar.textContent || 'L';
            }
          }
        }

        const topAvatar = document.getElementById('user-avatar');
        if (topAvatar && localUser && !topAvatar.querySelector('img') && topAvatar.textContent.trim().length <= 1) {
          if (localUser.photoURL) {
            topAvatar.innerHTML = `<img src="${localUser.photoURL}" alt="avatar" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
          } else {
            topAvatar.textContent = (localUser.displayName || localUser.email)[0].toUpperCase();
          }
        }

        const nameEl = document.getElementById('sidebar-username');
        const emailEl = document.getElementById('sidebar-user-email');
        const avatarEl = document.getElementById('sidebar-avatar');

        if (nameEl) nameEl.textContent = displayName;
        if (emailEl) emailEl.textContent = email;
        if (avatarEl) {
          avatarEl.innerHTML = avatarHtml;
          if (avatarHtml.startsWith('<img')) {
            avatarEl.style.background = 'none';
          } else {
            avatarEl.style.background = 'var(--node-green)';
          }
        }

        const mainProgressText = document.getElementById('progress-text')?.textContent || '';
        let completedCount = 0;
        let pct = 0;
        
        if (mainProgressText) {
          const match = mainProgressText.match(/(\d+)\s*\/\s*20/);
          if (match) completedCount = parseInt(match[1], 10);
          pct = Math.round((completedCount / 20) * 100);
        } else {
          const completedArr = JSON.parse(localStorage.getItem('np_completed') || '[]');
          completedCount = Math.min(completedArr.length, 20);
          pct = Math.round((completedCount / 20) * 100);
        }

        const progressTextEl = document.getElementById('sidebar-progress-text');
        const progressFillEl = document.getElementById('sidebar-progress-fill');
        if (progressTextEl) progressTextEl.textContent = `${completedCount} / 20 modules`;
        if (progressFillEl) progressFillEl.style.width = `${pct}%`;
        syncBadgesContent();
      } else {
        if (loggedOutDiv) loggedOutDiv.style.display = 'flex';
        if (loggedInDiv) loggedInDiv.style.display = 'none';
      }
    }

    // Cached state to prevent DOM thrashing
    let lastProfileState = {
      isSignedIn: null,
      displayName: '',
      avatarBg: ''
    };

    function syncProfileState() {
      if (!userCard) return;

      // Update PWA Menu visibility
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
      const menuPwaContainer = document.getElementById('menu-install-pwa-container');
      if (menuPwaContainer) {
        if (deferredPrompt && !isStandalone) {
          menuPwaContainer.style.display = 'block';
        } else {
          menuPwaContainer.style.display = 'none';
        }
      }

      const topAvatar = document.getElementById('user-avatar');
      const topUserPanel = document.getElementById('user-panel');
      const bottomAvatarImg = document.getElementById('bottom-nav-avatar-img');

      const localUser = getFirebaseUser();
      const isUserSignedIn = (topUserPanel && topUserPanel.style.display !== 'none') || localUser !== null;
      
      let displayName = 'User';
      let avatarBg = 'none';

      if (typeof firebase !== 'undefined' && firebase.auth().currentUser) {
        const user = firebase.auth().currentUser;
        displayName = user.displayName || user.email.split('@')[0];
        avatarBg = user.photoURL ? `url("${user.photoURL}")` : 'none';
      } else if (localUser) {
        displayName = localUser.displayName;
        avatarBg = localUser.photoURL ? `url("${localUser.photoURL}")` : 'none';
      } else {
        displayName = document.getElementById('user-display-name')?.textContent || 'User';
        avatarBg = topAvatar ? window.getComputedStyle(topAvatar).backgroundImage : 'none';
      }

      const stateChanged = (isUserSignedIn !== lastProfileState.isSignedIn) ||
                           (displayName !== lastProfileState.displayName) ||
                           (avatarBg !== lastProfileState.avatarBg);

      if (!stateChanged) {
        return;
      }

      lastProfileState.isSignedIn = isUserSignedIn;
      lastProfileState.displayName = displayName;
      lastProfileState.avatarBg = avatarBg;

      // Keep sidebar content synced
      syncSidebarContent();

      if (isUserSignedIn) {
        if (topUserPanel && topUserPanel.style.display === 'none') {
          topUserPanel.style.display = 'flex';
          const authBtn = document.querySelector('.btn-auth');
          if (authBtn) authBtn.style.display = 'none';
        }

        if (bottomAvatarImg) {
          if (avatarBg && avatarBg !== 'none') {
            bottomAvatarImg.innerHTML = `<div style="width:100%; height:100%; border-radius:50%; background-image: ${avatarBg}; background-size: cover; background-position: center;"></div>`;
          } else if (localUser) {
            bottomAvatarImg.innerHTML = `<div style="width:100%; height:100%; border-radius:50%; background: var(--node-green); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700;">${(localUser.displayName || localUser.email)[0].toUpperCase()}</div>`;
          }
        }
        
        const email = localUser ? localUser.email : (typeof firebase !== 'undefined' && firebase.auth().currentUser ? firebase.auth().currentUser.email : 'NextSem Student');
        const imgStyle = (avatarBg && avatarBg !== 'none') 
          ? `background-image: ${avatarBg}; background-size: cover; background-position: center;`
          : `background: var(--node-green); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 700;`;
        const avatarInner = (avatarBg && avatarBg !== 'none') ? '' : (localUser ? (localUser.displayName || localUser.email)[0].toUpperCase() : 'U');

        // Compute progress for menu
        const completedArrMenu = JSON.parse(localStorage.getItem('np_completed') || '[]');
        const completedCntMenu = Math.min(completedArrMenu.length, 20);
        const pctMenu = Math.round((completedCntMenu / 20) * 100);

        userCard.innerHTML = `
          <div class="overlay-user-info">
            <div class="overlay-user-avatar">
              <div style="width:100%; height:100%; border-radius:50%; ${imgStyle}">${avatarInner}</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:0.1rem;min-width:0;">
              <span class="overlay-user-name">${displayName}</span>
              <span class="overlay-user-email">${email}</span>
            </div>
          </div>
          <div class="overlay-progress-section">
            <div class="overlay-progress-label-row">
              <span>Course Progress</span>
              <span>${completedCntMenu} / 20 lessons</span>
            </div>
            <div class="overlay-pb-wrap">
              <div class="overlay-pb-fill" style="width:${pctMenu}%"></div>
            </div>
          </div>
          <!-- Achievements Badges Section -->
          <div class="overlay-badges-sec" style="margin-top: 0.8rem; border-top: 1px dashed rgba(255,255,255,0.06); padding-top: 0.8rem; text-align: left; width: 100%;">
            <div style="font-size: 0.7rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem; letter-spacing: 0.05em;">Unlocked Badges</div>
            <div id="mobile-badges-container" style="display: flex; gap: 6px; flex-wrap: wrap;"></div>
          </div>
          <button class="btn-overlay-signout" id="mobile-signout-btn">Sign Out</button>
        `;
        syncBadgesContent();

        const mobileSignoutBtn = document.getElementById('mobile-signout-btn');
        if (mobileSignoutBtn) {
          mobileSignoutBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeAllOverlays();
            try {
              localStorage.removeItem('firebase_user');
              if (typeof firebase !== 'undefined' && firebase.auth) {
                await firebase.auth().signOut();
              } else {
                window.location.href = 'index.html?action=signout';
              }
              lastProfileState.isSignedIn = null; // force next sync
              setTimeout(syncProfileState, 200);
            } catch(e) {
              console.error('Sign out error:', e);
            }
          });
        }
      } else {
        if (bottomAvatarImg) {
          bottomAvatarImg.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          `;
        }

        // Show local progress even when not signed in
        const completedArrGuest = JSON.parse(localStorage.getItem('np_completed') || '[]');
        const completedCntGuest = Math.min(completedArrGuest.length, 20);
        const pctGuest = Math.round((completedCntGuest / 20) * 100);

        userCard.innerHTML = `
          <div class="overlay-user-info">
            <h4 style="margin-bottom: 0.25rem; color: var(--text-primary);">Join NextSem</h4>
            <p style="font-size: 0.78rem; color: var(--text-secondary); margin: 0;">Sign in to sync your learning progress and save custom playground scripts!</p>
          </div>
          <div class="overlay-progress-section">
            <div class="overlay-progress-label-row">
              <span>Local Progress</span>
              <span>${completedCntGuest} / 20 lessons</span>
            </div>
            <div class="overlay-pb-wrap">
              <div class="overlay-pb-fill" style="width:${pctGuest}%"></div>
            </div>
          </div>
          <button class="btn-overlay-auth" id="mobile-auth-btn">Sign In / Sign Up</button>
        `;

        const mobileAuthBtn = document.getElementById('mobile-auth-btn');
        if (mobileAuthBtn) {
          mobileAuthBtn.addEventListener('click', () => {
            const actualAuthBtn = document.getElementById('auth-trigger-btn');
            if (actualAuthBtn) {
              actualAuthBtn.click();
              closeAllOverlays();
            } else {
              window.location.href = 'index.html#auth';
            }
          });
        }
      }
    }

    // ── Update all page-level auth UI on auth state change ──
    function syncPageAuthUI() {
      const localUser = getFirebaseUser();
      let fbUser = null;
      if (typeof firebase !== 'undefined' && firebase.auth) {
        fbUser = firebase.auth().currentUser;
      }
      const user = fbUser || localUser;

      // --- Index Hero button text ---
      const heroBtn = document.getElementById('btn-hero-curriculum');
      if (heroBtn) {
        const spanEl = heroBtn.querySelector('span');
        if (user) {
          if (spanEl) spanEl.textContent = 'Resume Course';
        } else {
          if (spanEl) spanEl.textContent = 'Get Started';
        }
      }

      // --- Index swipe card 5: Your Learning Progress ---
      const indexProfileCard = document.getElementById('index-profile-card');
      if (indexProfileCard) {
        const completedArr = JSON.parse(localStorage.getItem('np_completed') || '[]');
        const completedCnt = Math.min(completedArr.length, 20);
        const pct = Math.round((completedCnt / 20) * 100);

        if (user) {
          const dName = user.displayName || (user.email ? user.email.split('@')[0] : 'Learner');
          const photoUrl = user.photoURL || null;
          const avatarHtmlCard = photoUrl
            ? `<img src="${photoUrl}" alt="avatar" style="width:48px;height:48px;border-radius:50%;object-fit:cover;border:2px solid var(--node-green);">`
            : `<div style="width:48px;height:48px;border-radius:50%;background:var(--node-green);color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.35rem;font-weight:800;">${(dName)[0].toUpperCase()}</div>`;

          indexProfileCard.innerHTML = `
            <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;">
              ${avatarHtmlCard}
              <div style="min-width:0;">
                <div style="font-size:1rem;font-weight:800;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${dName}</div>
                <div style="font-size:0.78rem;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${user.email || ''}</div>
              </div>
            </div>
            <div style="margin-bottom:0.85rem;">
              <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.8rem;color:var(--text-secondary);margin-bottom:0.4rem;">
                <span>Overall Progress</span>
                <span style="color:var(--node-green);font-weight:700;">${completedCnt} / 20 lessons</span>
              </div>
              <div style="height:8px;background:rgba(255,255,255,0.07);border-radius:99px;overflow:hidden;">
                <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--node-green),var(--accent-cyan));border-radius:99px;transition:width 0.5s ease;"></div>
              </div>
              <div style="font-size:0.72rem;color:var(--text-muted);margin-top:0.35rem;">${pct}% complete</div>
            </div>
            <div style="display:flex; gap:0.5rem; margin-top:0.4rem;">
              <a href="lessons.html" style="flex:1.2; text-align:center; background:var(--node-green); color:#fff; font-weight:700; font-size:0.85rem; padding:0.6rem; border-radius:var(--radius-sm); text-decoration:none; transition:filter 0.2s;" onmouseover="this.style.filter='brightness(1.1)'" onmouseout="this.style.filter=''">Resume Learning</a>
              <button class="btn-ghost btn-signout" id="index-signout-btn" style="flex:0.8; padding:0.6rem; font-size:0.85rem; font-weight:700; border-color:#ff7b72; color:#ff7b72; background:none; border:1px solid #ff7b72; border-radius:var(--radius-sm); cursor:pointer;">Sign Out</button>
            </div>
          `;

          // Re-attach click handler for Card 5 Sign Out
          const signoutBtn = document.getElementById('index-signout-btn');
          if (signoutBtn) {
            signoutBtn.addEventListener('click', async () => {
              try {
                localStorage.removeItem('firebase_user');
                if (typeof firebase !== 'undefined' && firebase.auth) {
                  await firebase.auth().signOut();
                  window.location.reload();
                } else {
                  window.location.href = 'index.html?action=signout';
                }
              } catch(e) {
                console.error(e);
              }
            });
          }
        } else {
          indexProfileCard.innerHTML = `
            <h3 style="margin:0 0 0.5rem 0;">Sign In to Save Progress</h3>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin:0 0 0.35rem 0;">Create a free account or sign in to track completed lessons and save playground sandbox files.</p>
            <div style="margin-bottom:0.75rem;">
              <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.78rem;color:var(--text-secondary);margin-bottom:0.35rem;">
                <span>Local Progress</span>
                <span>${completedCnt} / 20 lessons</span>
              </div>
              <div style="height:7px;background:rgba(255,255,255,0.07);border-radius:99px;overflow:hidden;">
                <div style="height:100%;width:${pct}%;background:var(--node-green);border-radius:99px;"></div>
              </div>
            </div>
            <button class="google-sign-in-btn" id="index-auth-btn" style="margin-top:0.25rem; justify-content:center; width:100%;">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Continue with Google
            </button>
          `;
          // Re-attach click handler for the dynamically created button
          const newAuthBtn = document.getElementById('index-auth-btn');
          if (newAuthBtn) {
            newAuthBtn.addEventListener('click', () => {
              const modalGoogleBtn = document.querySelector('#auth-modal .google-sign-in-btn');
              if (modalGoogleBtn) modalGoogleBtn.click();
            });
          }
        }
      }

      // --- Navbar Auth Button: update icon to show avatar when signed in ---
      const authTriggerBtn = document.getElementById('auth-trigger-btn');
      const topUserPanel = document.getElementById('user-panel');
      if (user && authTriggerBtn && topUserPanel) {
        // Hide auth button, show user panel
        authTriggerBtn.style.display = 'none';
        topUserPanel.style.display = 'flex';
        // Update top avatar
        const topAvatarEl = document.getElementById('user-avatar');
        if (topAvatarEl && !topAvatarEl.dataset.synced) {
          topAvatarEl.dataset.synced = '1';
          if (user.photoURL) {
            topAvatarEl.innerHTML = `<img src="${user.photoURL}" alt="avatar" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
            topAvatarEl.style.background = 'none';
          } else {
            const initials = (user.displayName || user.email || 'U')[0].toUpperCase();
            topAvatarEl.textContent = initials;
            topAvatarEl.style.background = 'var(--node-green)';
          }
        }
      } else if (!user && authTriggerBtn) {
        authTriggerBtn.style.display = '';
        if (topUserPanel) topUserPanel.style.display = 'none';
      }
    }

    // Direct subscription to auth changes for instant UI updates
    if (typeof firebase !== 'undefined' && firebase.auth) {
      firebase.auth().onAuthStateChanged((fbUser) => {
        syncProfileState();
        syncPageAuthUI();
      });
    }

    // Set interval to sync bottom avatar periodically
    setInterval(() => { syncProfileState(); syncPageAuthUI(); }, 2000);
    // Run once on load too
    setTimeout(syncPageAuthUI, 500);

    // Hash routing for auth modals (e.g. from static pages redirecting to index.html#auth)
    function handleHashAuth() {
      const hash = window.location.hash;
      if (hash === '#auth') {
        if (typeof openModal === 'function') {
          openModal('login');
          history.replaceState("", document.title, window.location.pathname + window.location.search);
        }
      } else if (hash === '#auth-google') {
        if (typeof openModal === 'function') {
          openModal('login');
          const modalGoogleBtn = document.querySelector('#auth-modal .google-sign-in-btn');
          if (modalGoogleBtn) {
            setTimeout(() => modalGoogleBtn.click(), 100);
          }
          history.replaceState("", document.title, window.location.pathname + window.location.search);
        }
      }
    }

    // Check hash on load & hashchange
    window.addEventListener('load', handleHashAuth);
    window.addEventListener('hashchange', handleHashAuth);
    handleHashAuth();

    // 6. Settings Logic: Clear Progress
    document.getElementById('btn-clear-local-progress').addEventListener('click', () => {
      if (confirm('Are you sure you want to clear your local learning progress and challenges? This cannot be undone.')) {
        localStorage.removeItem('np_completed');
        localStorage.removeItem('challengeStatus');
        localStorage.removeItem('np_swipe_hint_seen');
        alert('Learning progress cleared!');
        window.location.reload();
      }
    });

    // 7. Dark Mode Toggle Logic
    const darkmodeToggle = document.getElementById('settings-darkmode-toggle');

    // Apply saved preference on load
    const savedMode = localStorage.getItem('np_dark_mode');
    const isDark = savedMode === null ? true : savedMode === 'true'; // default: dark
    darkmodeToggle.checked = isDark;
    applyDarkMode(isDark);

    darkmodeToggle.addEventListener('change', () => {
      const dark = darkmodeToggle.checked;
      applyDarkMode(dark);
      localStorage.setItem('np_dark_mode', dark);
    });

    function applyDarkMode(dark) {
      if (dark) {
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
      }
    }
  }

  function syncBadgesContent() {
    const badges = JSON.parse(localStorage.getItem('np_badges') || '[]');
    const badgeData = {
      'core': { emoji: '🌱', title: 'Core Master', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
      'web': { emoji: '🚂', title: 'Express Guru', color: '#3b82f6', bg: 'rgba(59,130,246,0.1)' },
      'db-auth': { emoji: '🗄️', title: 'DB & Auth Shield', color: '#a855f7', bg: 'rgba(168,85,247,0.1)' },
      'devops-test': { emoji: '🧪', title: 'Test Architect', color: '#fb923c', bg: 'rgba(251,146,60,0.1)' }
    };

    const getBadgeHtml = (trackKey) => {
      const bd = badgeData[trackKey];
      const unlocked = badges.includes(trackKey);
      return `
        <div style="display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 20px; font-size: 0.7rem; font-weight: 700; border: 1px solid ${unlocked ? bd.color : 'rgba(255,255,255,0.06)'}; background: ${unlocked ? bd.bg : 'rgba(255,255,255,0.02)'}; color: ${unlocked ? '#fff' : 'rgba(255,255,255,0.2)'}; opacity: ${unlocked ? 1 : 0.4};" title="${unlocked ? bd.title + ' Unlocked!' : bd.title + ' Locked'}">
          <span>${bd.emoji}</span>
          <span>${bd.title}</span>
        </div>
      `;
    };

    const html = Object.keys(badgeData).map(getBadgeHtml).join('');

    const sContainer = document.getElementById('sidebar-badges-container');
    if (sContainer) sContainer.innerHTML = html;

    const mContainer = document.getElementById('mobile-badges-container');
    if (mContainer) mContainer.innerHTML = html;
  }
  window.syncBadgesContent = syncBadgesContent;

  // Offline / Online Status Banner Handler
  window.addEventListener('offline', showOfflineBanner);
  window.addEventListener('online', showOnlineBanner);

  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    setTimeout(showOfflineBanner, 1000);
  }

  function showOfflineBanner() {
    if (document.getElementById('offline-sync-banner')) {
      document.getElementById('offline-sync-banner').remove();
    }

    const offlineBanner = document.createElement('div');
    offlineBanner.id = 'offline-sync-banner';
    offlineBanner.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: rgba(30, 41, 59, 0.96);
      border: 1px solid rgba(248, 113, 113, 0.35);
      color: #f87171;
      padding: 10px 22px;
      border-radius: 30px;
      font-size: 0.78rem;
      font-weight: 700;
      font-family: system-ui, -apple-system, sans-serif;
      z-index: 999999;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    `;
    offlineBanner.innerHTML = `
      <span style="font-size: 1.1rem; animation: pulseRed 1.5s infinite;">📴</span>
      <span>Offline Mode: Cached lessons loaded. Playground works offline.</span>
    `;
    
    const style = document.createElement('style');
    style.id = 'offline-banner-style';
    style.innerHTML = `
      @keyframes pulseRed {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(offlineBanner);

    setTimeout(() => {
      offlineBanner.style.transform = 'translateX(-50%) translateY(0)';
    }, 100);
  }

  function showOnlineBanner() {
    const banner = document.getElementById('offline-sync-banner');
    if (banner) {
      banner.style.color = '#34d399';
      banner.style.borderColor = 'rgba(52, 211, 153, 0.35)';
      banner.innerHTML = `
        <span style="font-size: 1.1rem;">💚</span>
        <span>Connected! Syncing progress...</span>
      `;
      
      setTimeout(() => {
        banner.style.transform = 'translateX(-50%) translateY(100px)';
        setTimeout(() => {
          banner.remove();
          const style = document.getElementById('offline-banner-style');
          if (style) style.remove();
        }, 400);
      }, 2500);
    }
  }
})();
