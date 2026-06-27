// ===========================
// NextSem – app.js
// ===========================

const lessons = window.lessons || [];

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }
});

/* ── Hamburger menu ── */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

function toggleMobileMenu() {
  if (navLinks && hamburger) {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  }
}

if (hamburger) {
  hamburger.addEventListener('click', toggleMobileMenu);
}

// Avatar also toggles mobile menu on small screens
const mobileAvatarToggle = document.getElementById('user-avatar');
if (mobileAvatarToggle) {
  mobileAvatarToggle.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      toggleMobileMenu();
    }
  });
}

// Close mobile menu when clicking any nav link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks && hamburger) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// Close mobile menu when clicking buttons inside the dropdown
document.querySelectorAll('.nav-links .btn-start, .nav-links .btn-auth, .nav-links .btn-signout').forEach(btn => {
  btn.addEventListener('click', () => {
    if (navLinks && hamburger) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});


/* ── Hero Typing Animation ── */
const heroCode = [
  `<span class="kw">const</span> <span class="var">http</span> = <span class="fn">require</span>(<span class="str">'http'</span>);`,
  ``,
  `<span class="cmt">// Create a simple HTTP server</span>`,
  `<span class="kw">const</span> <span class="var">server</span> = http.<span class="fn">createServer</span>((<span class="var">req</span>, <span class="var">res</span>) => {`,
  `  res.<span class="fn">writeHead</span>(<span class="num">200</span>, {`,
  `    <span class="str">'Content-Type'</span>: <span class="str">'text/plain'</span>`,
  `  });`,
  `  res.<span class="fn">end</span>(<span class="str">'Hello, Node.js! 🚀'</span>);`,
  `});`,
  ``,
  `server.<span class="fn">listen</span>(<span class="num">3000</span>, () => {`,
  `  console.<span class="fn">log</span>(<span class="str">\`Server running on port 3000\`</span>);`,
  `});`,
];

const typedCodeEl = document.getElementById('typed-code');
const cursorEl = document.getElementById('code-cursor');
let lineIndex = 0;
let charIndex = 0;
let currentText = '';
let displayedLines = [];

function typeHeroCode() {
  if (!typedCodeEl || !cursorEl) return;
  if (lineIndex >= heroCode.length) {
    cursorEl.style.display = 'none';
    return;
  }
  const line = heroCode[lineIndex];
  const plain = line.replace(/<[^>]+>/g, '');

  if (charIndex <= plain.length) {
    // Extract visible portion of HTML-rich line
    currentText = getPartialHTML(line, charIndex);
    displayedLines[lineIndex] = currentText;
    typedCodeEl.innerHTML = displayedLines.join('\n');

    // Update cursor position
    const preEl = typedCodeEl.closest('pre');
    if (preEl) {
      cursorEl.style.left = (1.5 * 16 + charIndex * 0.48 * 16) + 'px';
    }

    charIndex++;
    setTimeout(typeHeroCode, charIndex === 1 ? 120 : 28);
  } else {
    displayedLines[lineIndex] = line;
    typedCodeEl.innerHTML = displayedLines.join('\n');
    lineIndex++;
    charIndex = 0;
    setTimeout(typeHeroCode, 180);
  }
}

function getPartialHTML(htmlStr, visibleCount) {
  let count = 0;
  let result = '';
  let i = 0;
  while (i < htmlStr.length && count < visibleCount) {
    if (htmlStr[i] === '<') {
      const end = htmlStr.indexOf('>', i);
      result += htmlStr.substring(i, end + 1);
      i = end + 1;
    } else {
      result += htmlStr[i];
      count++;
      i++;
    }
  }
  return result;
}

if (typedCodeEl && cursorEl) {
  setTimeout(typeHeroCode, 900);
}

/* ── Curriculum Modules Data ── */
const modules = [
  // ── CORE NODE.JS TRACK ──
  { num: 'N-01', icon: '🌱', title: 'Introduction to Node.js', track: 'core', lessonId: 'hello-world',
    desc: 'Understand how Node.js works, the V8 JavaScript engine, libuv, asynchronous execution, and non-blocking I/O.',
    tags: ['V8 Engine', 'libuv', 'Event Loop', 'Single Thread'], level: 'beginner' },
  { num: 'N-02', icon: '⚙️', title: 'Core Modules', track: 'core', lessonId: 'modules',
    desc: 'Master the built-in modules of Node.js: path, os, process, events, and working with EventEmitters.',
    tags: ['path', 'os', 'process', 'EventEmitter'], level: 'beginner' },
  { num: 'N-03', icon: '📦', title: 'NPM & Dependency Management', track: 'core', lessonId: 'os-process',
    desc: 'Learn packages installation, package.json / package-lock.json configurations, custom scripts, and semantic versioning (semver).',
    tags: ['npm', 'package.json', 'scripts', 'semver'], level: 'beginner' },
  { num: 'N-04', icon: '⚡', title: 'Asynchronous Flow Control', track: 'core', lessonId: 'async',
    desc: 'Handle async code flow cleanly using Callbacks, Promises, async/await, and error boundaries in async operations.',
    tags: ['Callbacks', 'Promises', 'async/await', 'Error Handling'], level: 'beginner' },
  { num: 'N-05', icon: '📁', title: 'File System & Streams', track: 'core', lessonId: 'fs',
    desc: 'Interact with the filesystem asynchronously using fs/promises. Understand Buffer memory, Streams, and pipeline().',
    tags: ['fs module', 'Buffers', 'Streams', 'pipeline'], level: 'intermediate' },

  // ── EXPRESS & WEB TRACK ──
  { num: 'N-06', icon: '🌐', title: 'HTTP Module & Servers', track: 'web', lessonId: 'http',
    desc: 'Build raw HTTP web servers from scratch. Process incoming requests, set response headers, and handle basic URL routing.',
    tags: ['http.createServer', 'Headers', 'req/res', 'Routing'], level: 'intermediate' },
  { num: 'N-07', icon: '🚂', title: 'Express.js Framework', track: 'web', lessonId: 'express',
    desc: 'Use Express to simplify server configurations. Implement routes, query parameters, path variables, and request body parsing.',
    tags: ['Express', 'Router', 'Body Parser', 'params'], level: 'intermediate' },
  { num: 'N-08', icon: '📋', title: 'REST API Design & Middleware', track: 'web', lessonId: 'error-handling',
    desc: 'Write RESTful CRUD APIs using standard methods (GET, POST, PUT, DELETE). Create and apply custom Express middlewares.',
    tags: ['REST APIs', 'CRUD', 'Middleware', 'HTTP Methods'], level: 'intermediate' },

  // ── DATABASE & AUTH TRACK ──
  { num: 'N-09', icon: '🍏', title: 'NoSQL & MongoDB with Mongoose', track: 'db-auth', lessonId: 'database',
    desc: 'Connect Node.js to MongoDB. Define schemas, validation rules, model instances, and perform basic CRUD operations using Mongoose.',
    tags: ['MongoDB', 'Mongoose', 'Schema', 'Validation'], level: 'intermediate' },
  { num: 'N-10', icon: '🗄️', title: 'Relational Databases & SQL', track: 'db-auth', lessonId: 'database',
    desc: 'Query SQL databases in Node.js. Use connection pools with PG (PostgreSQL) and write basic SQL queries, joins, and transactions.',
    tags: ['PostgreSQL', 'pg client', 'SQL', 'Connection Pools'], level: 'intermediate' },
  { num: 'N-11', icon: '🔐', title: 'JWT Authentication & Security', track: 'db-auth', lessonId: 'jwt',
    desc: 'Secure your Node.js apps. Store passwords securely with bcrypt, issue and verify JSON Web Tokens (JWT), and apply CORS/Helmet.',
    tags: ['JWT', 'bcrypt', 'CORS', 'Helmet.js'], level: 'advanced' },
  { num: 'N-12', icon: '🔴', title: 'Real-time WebSockets', track: 'db-auth', lessonId: 'websockets',
    desc: 'Enable full-duplex persistent communication between client and server using Socket.io, event handling, and rooms.',
    tags: ['Socket.io', 'WebSockets', 'Events', 'Rooms'], level: 'advanced' },

  // ── TESTING & DEVOPS TRACK ──
  { num: 'N-13', icon: '🧪', title: 'Testing Node.js APIs', track: 'devops-test', lessonId: 'testing',
    desc: 'Write robust unit and integration tests using Jest. Test HTTP endpoints asynchronously using Supertest, and mock dependencies.',
    tags: ['Jest', 'Supertest', 'Unit Testing', 'Mocking'], level: 'advanced' },
  { num: 'N-14', icon: '🐳', title: 'Docker, PM2 & Deployment', track: 'devops-test', lessonId: 'testing',
    desc: 'Prepare apps for production. Spawn cluster processes with PM2, containerize your app using Docker, and deploy to Render/Railway.',
    tags: ['PM2', 'Docker', 'Dockerfile', 'Render/Railway'], level: 'advanced' },

  // ── EXTENDED TRACKS ──
  { num: 'N-15', icon: '🔧', title: 'Environment Variables & Config', track: 'core', lessonId: 'env-config',
    desc: 'Manage secrets and environment-specific configuration using dotenv. Learn proper .env file structure, process.env access, and multi-environment setups.',
    tags: ['dotenv', 'process.env', '.env files', 'Config'], level: 'beginner' },
  { num: 'N-16', icon: '📤', title: 'File Uploads with Multer', track: 'web', lessonId: 'file-upload',
    desc: 'Accept and process file uploads in Express.js using the Multer middleware. Configure disk storage, memory storage, MIME type filtering, and file size limits.',
    tags: ['Multer', 'multipart/form-data', 'diskStorage', 'fileFilter'], level: 'intermediate' },
  { num: 'N-17', icon: '⚡', title: 'Redis & In-Memory Caching', track: 'db-auth', lessonId: 'redis',
    desc: 'Integrate Redis as a caching layer to dramatically speed up API response times. Implement the cache-aside pattern with TTL-based expiration using ioredis.',
    tags: ['Redis', 'ioredis', 'Cache-Aside', 'TTL'], level: 'advanced' },
  { num: 'N-18', icon: '🖥️', title: 'Clustering & Worker Threads', track: 'devops-test', lessonId: 'clustering',
    desc: 'Scale Node.js across all available CPU cores using the built-in cluster module. Use Worker Threads for CPU-intensive tasks without blocking the event loop.',
    tags: ['cluster', 'worker_threads', 'os.cpus()', 'Scaling'], level: 'advanced' },
  { num: 'N-19', icon: '🔮', title: 'GraphQL APIs with Node.js', track: 'web', lessonId: 'graphql',
    desc: 'Build flexible, self-documenting GraphQL APIs. Define schemas using SDL, write typed resolvers, and use GraphiQL for interactive API exploration.',
    tags: ['GraphQL', 'Schema', 'Resolvers', 'GraphiQL'], level: 'advanced' },
];

// ── Render modules with track filter ──
const modulesGrid = document.getElementById('modules-grid');

function renderModules(filterTrack = 'all') {
  if (!modulesGrid) return;
  modulesGrid.innerHTML = '';
  const filtered = filterTrack === 'all' ? modules : modules.filter(m => m.track === filterTrack);
  filtered.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = `module-card track-${m.track}`;
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.innerHTML = `
      <span class="module-level level-${m.level}">${m.level}</span>
      <div class="module-header">
        <span class="module-icon">${m.icon}</span>
        <span class="module-num">${m.num}</span>
      </div>
      <h3 class="module-title">${m.title}</h3>
      <p class="module-desc">${m.desc}</p>
      <div class="module-tags">${m.tags.map(t => `<span class="module-tag">${t}</span>`).join('')}</div>
    `;
    // Always make cards clickable — deep-link to the matching lesson
    card.style.cursor = 'pointer';
    card.title = `Open: ${m.title}`;
    card.addEventListener('click', () => {
      if (m.lessonId) {
        window.location.href = `lessons.html#${m.lessonId}`;
      } else if (m.lesson) {
        window.location.href = m.lesson;
      } else {
        window.location.href = 'lessons.html';
      }
    });
    modulesGrid.appendChild(card);
    // Staggered entrance animation
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease, border-color 0.3s, box-shadow 0.3s';
      card.style.opacity = '1';
      card.style.transform = 'none';
    }, i * 40);
  });
}

if (modulesGrid) {
  renderModules();
}

// Track filter button logic
const trackFilters = document.querySelectorAll('.track-filter');
trackFilters.forEach(btn => {
  btn.addEventListener('click', () => {
    trackFilters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderModules(btn.dataset.track);
  });
});

/* ── Lessons Page – Two-View Layout ── */
(function() {
  // Elements
  const viewList = document.getElementById('view-list');
  const viewContent = document.getElementById('view-content');
  const llc = document.getElementById('llc');           // lessons list container
  const lci = document.getElementById('lci');           // lesson card inner
  const pdr = document.getElementById('pdr');           // progress dots row
  const lpf = document.getElementById('lpf');           // list progress fill
  const lpl = document.getElementById('lpl');           // list progress label
  const navTitle = document.getElementById('nav-title');
  const navBackBtn = document.getElementById('nav-back-btn');
  const bpBtn = document.getElementById('bp');          // bottom prev
  const bhBtn = document.getElementById('bh');          // bottom home (list)
  const bnBtn = document.getElementById('bn');          // bottom next
  const lessonTabsEl = document.getElementById('lesson-tabs');

  // Only run on lessons page
  if (!viewList && !viewContent) return;

  // Metadata for each lesson (icon, track, level)
  const lessonMeta = {
    'hello-world':    { icon: '🌱', track: 'core',        level: 'beginner' },
    'modules':        { icon: '📦', track: 'core',        level: 'beginner' },
    'fs':             { icon: '📁', track: 'core',        level: 'beginner' },
    'async':          { icon: '⚡', track: 'core',        level: 'beginner' },
    'http':           { icon: '🌐', track: 'web',         level: 'intermediate' },
    'express':        { icon: '🚂', track: 'web',         level: 'intermediate' },
    'events':         { icon: '📡', track: 'core',        level: 'beginner' },
    'streams':        { icon: '🌊', track: 'core',        level: 'intermediate' },
    'database':       { icon: '🍃', track: 'db-auth',     level: 'intermediate' },
    'jwt':            { icon: '🔐', track: 'db-auth',     level: 'advanced' },
    'os-process':     { icon: '⚙️', track: 'core',        level: 'beginner' },
    'error-handling': { icon: '🛡️', track: 'web',         level: 'intermediate' },
    'websockets':     { icon: '🔴', track: 'db-auth',     level: 'advanced' },
    'testing':        { icon: '🧪', track: 'devops-test', level: 'advanced' },
    'cors-helmet':    { icon: '🔒', track: 'web',         level: 'intermediate' },
    'env-config':     { icon: '🔧', track: 'core',        level: 'beginner' },
    'file-upload':    { icon: '📤', track: 'web',         level: 'intermediate' },
    'redis':          { icon: '⚡', track: 'db-auth',     level: 'advanced' },
    'clustering':     { icon: '🖥️', track: 'devops-test', level: 'advanced' },
    'graphql':        { icon: '🔮', track: 'web',         level: 'advanced' },
  };

  // Track completed lessons (from localStorage)
  let completedIds = JSON.parse(localStorage.getItem('np_completed') || '[]');
  let activeIndex = 0;


  function saveCompleted() {
    localStorage.setItem('np_completed', JSON.stringify(completedIds));
  }

  function markDone(id) {
    if (!completedIds.includes(id)) {
      completedIds.push(id);
      saveCompleted();
    }
  }

  /* ─── Swipe Feed Data ─── */
  const lessonCodeSnippets = {
    'hello-world':    `console.log("Hello, World!");\nconsole.log(process.version);`,
    'modules':        `const fs = require('fs');\nmodule.exports = { greet };`,
    'fs':             `fs.readFile('data.txt', (err, data)\n  => console.log(data));`,
    'async':          `async function main() {\n  await delay(1000);\n  console.log('done');\n}`,
    'http':           `http.createServer((req, res) => {\n  res.end('Hello!');\n}).listen(3000);`,
    'express':        `app.get('/api', (req, res) => {\n  res.json({ ok: true });\n});`,
    'events':         `emitter.on('data', (msg) => {\n  console.log(msg);\n});`,
    'streams':        `readable.pipe(writable);\nstream.on('end', done);`,
    'database':       `await db.collection('users')\n  .find({ active: true });`,
    'jwt':            `jwt.sign({ id: user._id },\n  SECRET, { expiresIn:'7d'});`,
    'os-process':     `process.on('exit', (code) => {\n  console.log('bye', code);\n});`,
    'error-handling': `try {\n  await riskyOp();\n} catch(err) {\n  next(err);\n}`,
    'websockets':     `io.on('connection', (socket) => {\n  socket.emit('hi', 'world');\n});`,
    'testing':        `describe('API', () => {\n  it('returns 200', async () =>\n    expect(res.status).toBe(200));`,
    'cors-helmet':    `app.use(helmet());\napp.use(cors({ origin: '*' }));`,
    'env-config':     `require('dotenv').config();\nconst PORT = process.env.PORT || 3000;`,
    'file-upload':    `upload.single('photo'),\n(req, res) => res.json({ path: req.file.path });`,
    'redis':          `const cached = await redis.get(key);\nif (cached) return res.json(JSON.parse(cached));`,
    'clustering':     `if (cluster.isPrimary) cluster.fork();\nelse http.createServer(handler).listen(3000);`,
    'graphql':        `const schema = buildSchema(\`type Query { hello: String }\`);\nconst root = { hello: () => 'Hello World!' };`,
  };
  const trackLabels = { 'core':'🌱 Core', 'web':'🚂 Express', 'db-auth':'🗄️ DB & Auth', 'devops-test':'🧪 Testing' };

  let _activeFilter = 'all';
  let _swipeIdx = 0;
  let _swipeItems = [];
  let _gestureReady = false;

  /* ─── List View (Dynamic Recycled Vertical Swiper) ─── */
  const track = document.getElementById('slider-track');
  const slideLeft = document.getElementById('slide-left');
  const slideCenter = document.getElementById('slide-center');
  const slideRight = document.getElementById('slide-right');
  
  let sliderHeight = 0;
  let startY = 0;
  let currentY = 0;
  let isDragging = false;
  let terminalTimers = {};

  function renderList(filterTrack) {
    if (!llc) return;
    if (filterTrack !== undefined) {
      _activeFilter = filterTrack;
      _swipeIdx = 0;
    }

    // Build filtered items from database
    _swipeItems = lessons.map((l, i) => {
      const meta = lessonMeta[l.id] || {};
      return { lesson: l, index: i, meta, track: meta.track || 'core' };
    }).filter(item => _activeFilter === 'all' || item.track === _activeFilter);

    // Auto-focus first incomplete lesson on initial load
    if (filterTrack === undefined) {
      const fi = _swipeItems.findIndex(it => !completedIds.includes(it.lesson.id));
      _swipeIdx = fi >= 0 ? fi : 0;
    }
    _swipeIdx = Math.max(0, Math.min(_swipeIdx, _swipeItems.length - 1));

    // Reset slider dimensions
    sliderHeight = llc.offsetHeight || window.innerHeight;

    // Populate active track slides
    renderSlides();
    
    // Bind touch gestures once
    if (!_gestureReady) {
      setupSwipeGestures();
      setupEventDelegation();
      _gestureReady = true;
    }
    setupFilterTabs();
    updateProgressBanner();
  }

  function renderSlides() {
    if (_swipeItems.length === 0) {
      if (slideCenter) slideCenter.innerHTML = '<div style="height:100%;display:flex;align-items:center;justify-content:center;color:var(--text-muted);font-size:0.85rem;">No lessons in this track.</div>';
      if (slideLeft) slideLeft.innerHTML = '';
      if (slideRight) slideRight.innerHTML = '';
      return;
    }

    if (slideCenter) slideCenter.innerHTML = buildSwipeCardHtml(_swipeItems[_swipeIdx], _swipeIdx);
    if (slideLeft) slideLeft.innerHTML = _swipeIdx > 0 ? buildSwipeCardHtml(_swipeItems[_swipeIdx - 1], _swipeIdx - 1) : '<div class="card" style="opacity: 0.3; justify-content: center; align-items: center; display: flex; font-size: 0.9rem; font-weight: 700; color: var(--text-muted);">Beginning of Track</div>';
    if (slideRight) slideRight.innerHTML = _swipeIdx < _swipeItems.length - 1 ? buildSwipeCardHtml(_swipeItems[_swipeIdx + 1], _swipeIdx + 1) : '<div class="card" style="opacity: 0.3; justify-content: center; align-items: center; display: flex; font-size: 0.9rem; font-weight: 700; color: var(--text-muted);">End of Track</div>';
    
    if (slideCenter) slideCenter.scrollTop = 0;
    if (slideLeft) slideLeft.scrollTop = 0;
    if (slideRight) slideRight.scrollTop = 0;
  }

  function buildSwipeCardHtml(item, pos) {
    const { lesson, index, meta, track } = item;
    const isDone = completedIds.includes(lesson.id);
    const level = meta.level || 'beginner';
    const badgeClass = level === 'advanced' ? 'ba' : level === 'intermediate' ? 'bi' : 'bg';
    const tLabel = trackLabels[track] || track;
    const lNum = `LESSON ${String(index + 1).padStart(2, '0')}`;
    const sClass = isDone ? 's-done' : 's-new';
    const sText = isDone ? '✓ Completed' : 'New';
    const mins = level === 'beginner' ? '5' : level === 'intermediate' ? '8' : '12';

    // Dots: show up to 12, centred around current
    const maxD = Math.min(_swipeItems.length, 12);
    const dStart = Math.max(0, Math.min(pos - 5, _swipeItems.length - maxD));
    const dotsHtml = Array.from({length: maxD}, (_, i) => {
      const rp = dStart + i;
      const di = _swipeItems[rp];
      const dd = di && completedIds.includes(di.lesson.id);
      return `<div class="sc-dot${rp === pos ? ' sc-dot-cur' : dd ? ' sc-dot-done' : ''}" data-idx="${rp}"></div>`;
    }).join('');

    // Code preview snippet
    const rawSnippet = lessonCodeSnippets[lesson.id] || '';
    const highlightedSnippet = highlightCode(rawSnippet);

    return `
      <div class="card">
        <div class="card-meta">
          <span class="sc-status sbadge ${sClass}">${sText}</span>
          <span class="sc-lesson-num">${lNum}</span>
        </div>
        <div>
          <div class="sc-track-lbl" style="margin-bottom: 2px;">${tLabel}</div>
          <h2 class="sc-title">${lesson.title}</h2>
        </div>
        <p class="sc-theory">${lesson.theory}</p>
        
        <div class="sc-code-block" style="margin-top: 4px;">
          <div class="sc-code-label">CODE PREVIEW</div>
          <div class="code-block" style="padding: 12px; margin: 0; border: none; font-size: 0.8rem;">${highlightedSnippet}</div>
        </div>

        <div style="display: flex; gap: 8px; margin-top: 4px; flex-wrap: wrap;">
          <button class="run-btn" data-idx="${pos}" data-lesson-id="${lesson.id}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-bottom:-1px;"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <span>Run Application</span>
          </button>
          <button class="sc-open-btn" data-idx="${index}" style="background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); color: var(--text-secondary); padding: 8px 14px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 0.78rem;">
            Open Full Lesson →
          </button>
        </div>

        <div class="terminal-box" id="terminal-${pos}"></div>
        
        <div class="sc-dots-rail">${dotsHtml}</div>
        <div class="sc-swipe-hint">↕ swipe up · down</div>
      </div>
    `;
  }

  function highlightCode(code) {
    if (!code) return '';
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/(\/\/.*)/g, '<span class="cmt">$1</span>')
      .replace(/(const|let|var|function|return|import|from|require|module\.exports|exports)/g, '<span class="kw">$1</span>')
      .replace(/(\.[a-zA-Z0-9_]+(?=\())/g, '<span class="fn">$1</span>')
      .replace(/(['"`](.*?)['"`])/g, '<span class="str">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="num">$1</span>');
  }

  function setTranslation(py) {
    if (track) track.style.transform = `translate3d(0, ${py}px, 0)`;
  }

  function animateToPage(direction) {
    if (direction === 0) {
      setTranslation(0);
      return;
    }

    const targetY = -direction * sliderHeight;
    track.style.transition = 'transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1)';
    setTranslation(targetY);

    setTimeout(() => {
      _swipeIdx += direction;
      track.style.transition = 'none';
      setTranslation(0);
      renderSlides();
      updateProgressBanner();
    }, 250);
  }

  function setupSwipeGestures() {
    track.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
      isDragging = true;
      track.style.transition = 'none';
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;

      // Rubberbanding at edges
      if ((_swipeIdx === 0 && deltaY > 0) || (_swipeIdx === _swipeItems.length - 1 && deltaY < 0)) {
        setTranslation(deltaY * 0.3);
      } else {
        setTranslation(deltaY);
      }

      if (Math.abs(deltaY) > 10) {
        e.preventDefault();
      }
    }, { passive: false });

    track.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      const deltaY = currentY - startY;
      const threshold = sliderHeight * 0.20;

      track.style.transition = 'transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1)';

      if (deltaY < -threshold && _swipeIdx < _swipeItems.length - 1) {
        animateToPage(1);
      } else if (deltaY > threshold && _swipeIdx > 0) {
        animateToPage(-1);
      } else {
        animateToPage(0);
      }
    });

    // Keyboard arrow keys
    document.addEventListener('keydown', (e) => {
      if (document.body.classList.contains('sv')) return; // ignore in full view
      if (e.key === 'ArrowUp' && _swipeIdx > 0) {
        animateToPage(-1);
      } else if (e.key === 'ArrowDown' && _swipeIdx < _swipeItems.length - 1) {
        animateToPage(1);
      }
    });

    window.addEventListener('resize', () => {
      sliderHeight = llc.offsetHeight || window.innerHeight;
    });
  }

  function setupEventDelegation() {
    llc.addEventListener('click', (e) => {
      // Run Application trigger
      const runBtn = e.target.closest('.run-btn');
      if (runBtn) {
        e.stopPropagation();
        const pos = parseInt(runBtn.dataset.idx, 10);
        const lessonId = runBtn.dataset.lessonId;
        executeSimulatedCode(pos, lessonId, runBtn);
        return;
      }

      // Open Full Lesson trigger
      const openBtn = e.target.closest('.sc-open-btn');
      if (openBtn) {
        e.stopPropagation();
        const idx = parseInt(openBtn.dataset.idx, 10);
        openLesson(idx);
        return;
      }

      // Dot rail indicator click
      const dot = e.target.closest('.sc-dot');
      if (dot) {
        e.stopPropagation();
        const targetIdx = parseInt(dot.dataset.idx, 10);
        if (!isNaN(targetIdx) && targetIdx !== _swipeIdx) {
          _swipeIdx = targetIdx;
          renderSlides();
        }
        return;
      }
    });
  }

  function executeSimulatedCode(pos, lessonId, btn) {
    const term = document.getElementById(`terminal-${pos}`);
    if (!term) return;

    if (terminalTimers[pos]) {
      clearTimeout(terminalTimers[pos]);
      terminalTimers[pos] = null;
    }

    if (term.classList.contains('active')) {
      term.classList.remove('active');
      term.innerHTML = '';
      btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-bottom:-1px;"><polygon points="5 3 19 12 5 21 5 3"/></svg><span>Run Application</span>`;
      return;
    }

    term.classList.add('active');
    btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-bottom:-1px;"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg><span>Stop</span>`;

    // Simulated terminal execution outputs mapping
    const outputs = {
      'hello-world': [
        `$ node app.js`,
        `Hello, World!`,
        `v24.16.0`,
        `✔ Execution finished successfully!`
      ],
      'modules': [
        `$ node index.js`,
        `[info] Importing custom greeter module...`,
        `Hello, NextSem Student!`,
        `✔ Custom module export successfully loaded!`
      ],
      'fs': [
        `$ node file-read.js`,
        `[info] Reading system file: recipe.txt...`,
        `File Content: "1. Require fs, 2. Call readFile"`,
        `✔ File read successfully!`
      ],
      'async': [
        `$ node async.js`,
        `[info] Dispatching asynchronous timer tasks...`,
        `[async] Timer task completed in 100ms`,
        `✔ Asynchronous loop complete!`
      ],
      'http': [
        `$ node server.js`,
        `[info] Creating HTTP Server...`,
        `✔ Web server listening on http://localhost:3000/`,
        `[network] 127.0.0.1 - GET / - 200 OK`
      ]
    };

    // Fallback default output for modular scaling
    const defaultOutput = [
      `$ node execution.js`,
      `[info] Initializing execution context for ${lessonId}...`,
      `[info] Checking package dependencies...`,
      `✔ Execution finished successfully!`
    ];

    const lines = outputs[lessonId] || defaultOutput;
    term.innerHTML = '';
    let currentLine = 0;

    function printNext() {
      if (currentLine >= lines.length || !term.classList.contains('active')) {
        terminalTimers[pos] = null;
        return;
      }
      const lineDiv = document.createElement('div');
      lineDiv.style.marginBottom = '4px';
      lineDiv.textContent = lines[currentLine];

      if (lines[currentLine].startsWith('$')) {
        lineDiv.style.color = '#ffffff';
        lineDiv.style.fontWeight = 'bold';
      } else if (lines[currentLine].startsWith('✔')) {
        lineDiv.style.color = '#34d399';
        
        // Completion Action: Mark lesson complete upon success!
        const item = _swipeItems[pos];
        if (item && !completedIds.includes(item.lesson.id)) {
          markDone(item.lesson.id);
          if (typeof triggerConfetti === 'function') {
            triggerConfetti();
          }
          // Sync with Firebase
          if (typeof firebase !== 'undefined' && firebase.auth().currentUser && typeof window.markModuleDone === 'function') {
            window.markModuleDone(item.index);
          }
          // Rerender badges
          setTimeout(renderSlides, 800);
        }
      } else if (lines[currentLine].startsWith('[network]') || lines[currentLine].startsWith('[async]')) {
        lineDiv.style.color = '#60a5fa';
      }

      term.appendChild(lineDiv);
      currentLine++;

      const card = term.closest('.card');
      if (card) {
        card.scrollTop = card.scrollHeight;
      }

      terminalTimers[pos] = setTimeout(printNext, 400);
    }

    printNext();
  }

  function updateProgressBanner() {
    const completedCount = completedIds.length;
    const totalCount = lessons.length;
    const pct = Math.round((completedCount / Math.max(1, totalCount)) * 100);
    
    if (lpf) lpf.style.width = pct + '%';
    if (lpl) lpl.textContent = `${completedCount} / ${totalCount} completed`;
    
    // update continue learning banner if present
    if (typeof updateContinueBanner === 'function') {
      updateContinueBanner();
    }
  }

  function setupFilterTabs() {
    document.querySelectorAll('.tft').forEach(btn => {
      const fresh = btn.cloneNode(true);
      btn.parentNode.replaceChild(fresh, btn);
      fresh.addEventListener('click', () => {
        document.querySelectorAll('.tft').forEach(b => b.classList.remove('active'));
        fresh.classList.add('active');
        renderList(fresh.dataset.filter);
      });
    });
  }

  function escapeHtml(text) {
    return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }



  /* ─── Progress Dots ─── */
  function renderDots(index) {
    if (!pdr) return;
    pdr.innerHTML = '';
    lessons.forEach((l, i) => {
      const d = document.createElement('div');
      d.className = 'pd' + (i === index ? ' cur' : completedIds.includes(l.id) ? ' done' : '');
      d.title = `Lesson ${i + 1}: ${l.title}`;
      d.addEventListener('click', () => {
        openLesson(i);
      });
      pdr.appendChild(d);
    });
  }

  /* ─── Desktop Sidebar TOC ─── */
  function renderDesktopSidebar(index) {
    const sidebar = document.getElementById('desktop-lessons-sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = `
      <div class="sidebar-toc-header" style="padding: 1rem; border-bottom: 1px solid var(--border); font-weight: 800; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); display: flex; align-items: center; gap: 0.5rem;">
        <span>📋</span> Lessons Outline
      </div>
      <div class="sidebar-toc-list" style="display: flex; flex-direction: column; overflow-y: auto; flex: 1;">
        ${lessons.map((l, i) => {
          const isCurrent = i === index;
          const isDone = completedIds.includes(l.id);
          const icon = isCurrent ? '👉' : isDone ? '✅' : '⚪';
          const bg = isCurrent ? 'rgba(104, 160, 99, 0.08)' : 'transparent';
          const color = isCurrent ? 'var(--node-green-light)' : isDone ? 'var(--text-primary)' : 'var(--text-secondary)';
          return `
            <div class="sidebar-toc-item" data-idx="${i}" style="display: flex; align-items: center; gap: 0.6rem; padding: 0.8rem 1rem; cursor: pointer; background: ${bg}; border-left: 3px solid ${isCurrent ? 'var(--node-green)' : 'transparent'}; border-bottom: 1px solid rgba(255,255,255,0.02); transition: background 0.2s; color: ${color}; font-size: 0.82rem; font-weight: ${isCurrent ? '700' : '500'};" onmouseover="this.style.background='rgba(255,255,255,0.02)'" onmouseout="this.style.background='${bg}'">
              <span>${icon}</span>
              <div style="flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                ${i + 1}. ${l.title}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Click listeners
    sidebar.querySelectorAll('.sidebar-toc-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.idx, 10);
        if (!isNaN(idx)) openLesson(idx);
      });
    });
  }

  /* ─── Lesson Content ─── */
  function renderContent(index) {
    if (!lci) return;
    const lesson = lessons[index];
    if (!lesson) return;
    const isFirst = index === 0;
    const isLast = index === lessons.length - 1;

    lci.innerHTML = `
      <div class="lts-hero" style="background-image: url('lesson_${lesson.id}.png');"></div>
      <div class="lts">
        <h3>${lesson.title}</h3>
        <p>${lesson.theory}</p>
        <ul>${lesson.points.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
      <div class="lcs">
        <div class="lch">
          <span>${lesson.filename}</span>
          <button class="bcopy" id="bcopy-btn">Copy</button>
        </div>
        <pre><code>${lesson.code}</code></pre>
      </div>
      ${lesson.conceptImage ? `
      <div class="lcs-concept-diagram" style="border-top: 1px solid var(--border);">
        <div class="lch" style="background: #11161d; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 0.55rem 1.1rem; color: var(--text-muted); font-size: 0.75rem;">
          <span>🧠 Concept Architecture Diagram</span>
        </div>
        <div class="concept-image-container" style="padding: 1.5rem; text-align: center; background: #0d1117;">
          <img src="${lesson.conceptImage}" alt="${lesson.title} Diagram" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid var(--border); box-shadow: var(--shadow-card);" />
        </div>
      </div>
      ` : ''}
      ${lesson.details ? `
      <div class="lts-details-rich" style="padding: 1.4rem 1.2rem; border-top: 1px solid var(--border); background: var(--bg-card);">
        ${lesson.details}
      </div>
      ` : ''}
    `;

    // Copy button
    const copyBtn = document.getElementById('bcopy-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const plain = lesson.code.replace(/<[^>]+>/g, '');
        navigator.clipboard.writeText(plain).then(() => {
          copyBtn.textContent = '✓';
          setTimeout(() => copyBtn.textContent = 'Copy', 2000);
        }).catch(() => {});
      });
    }

    // Update bottom nav buttons
    if (bpBtn) bpBtn.disabled = isFirst;
    if (bnBtn) {
      const isDone = completedIds.includes(lesson.id);
      if (isLast) {
        if (!isDone) {
          bnBtn.disabled = false;
          bnBtn.innerHTML = `Finish Course 🎓`;
          bnBtn.classList.add('bn-complete-btn');
        } else {
          bnBtn.disabled = true;
          bnBtn.innerHTML = `Next <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="13" height="13"><polyline points="9 18 15 12 9 6"/></svg>`;
          bnBtn.classList.remove('bn-complete-btn');
        }
      } else {
        bnBtn.disabled = false;
        if (!isDone) {
          bnBtn.innerHTML = `Complete & Next <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="13" height="13"><polyline points="9 18 15 12 9 6"/></svg>`;
          bnBtn.classList.add('bn-complete-btn');
        } else {
          bnBtn.innerHTML = `Next <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="13" height="13"><polyline points="9 18 15 12 9 6"/></svg>`;
          bnBtn.classList.remove('bn-complete-btn');
        }
      }
    }

    // Update dots
    renderDots(index);

    // Render desktop sidebar TOC
    renderDesktopSidebar(index);

    // Update nav title
    if (navTitle) navTitle.textContent = lesson.tab;
  }

  /* ─── Open lesson ─── */
  let _firstOpen = true;
  function openLesson(index) {
    activeIndex = index;
    renderContent(index);
    document.body.classList.add('sv');
    if (viewContent) viewContent.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Show swipe hint the first time a lesson is opened
    if (_firstOpen) {
      _firstOpen = false;
      setTimeout(showSwipeHint, 600);
    }
  }

  /* ─── Back to list ─── */
  function showList() {
    document.body.classList.remove('sv');
    if (navTitle) navTitle.textContent = 'Node.js Lessons';
    renderList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ─── Navigation wiring ─── */
  if (bpBtn) bpBtn.addEventListener('click', () => { if (activeIndex > 0) openLesson(activeIndex - 1); });
  if (bnBtn) {
    bnBtn.addEventListener('click', () => {
      const lesson = lessons[activeIndex];
      const wasDone = completedIds.includes(lesson.id);

      if (lesson && !wasDone) {
        markDone(lesson.id);
        if (typeof triggerConfetti === 'function') {
          triggerConfetti();
        }
      }

      if (activeIndex < lessons.length - 1) {
        setTimeout(() => {
          openLesson(activeIndex + 1);
        }, wasDone ? 0 : 700); // delay navigation slightly to show confetti
      } else if (activeIndex === lessons.length - 1 && !wasDone) {
        setTimeout(() => {
          showList();
        }, 1200);
      }
    });
  }
  if (bhBtn) bhBtn.addEventListener('click', showList);

  // Navbar back button: in content view → go to list; in list view → go to index.html
  if (navBackBtn) {
    navBackBtn.addEventListener('click', () => {
      if (document.body.classList.contains('sv')) {
        showList();
      } else {
        window.location.href = 'index.html';
      }
    });
  }

  // Build hidden tabs for any legacy code
  if (lessonTabsEl) {
    lessons.forEach((lesson, index) => {
      const tab = document.createElement('button');
      tab.className = 'lesson-tab' + (index === 0 ? ' active' : '');
      tab.textContent = lesson.tab;
      tab.addEventListener('click', () => openLesson(index));
      lessonTabsEl.appendChild(tab);
    });
  }

  // Check URL for lesson ID
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const idx = lessons.findIndex(l => l.id === hash);
    if (idx >= 0) { openLesson(idx); return; }
  }

  // Listen for hash changes
  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.replace('#', '');
    if (newHash) {
      const idx = lessons.findIndex(l => l.id === newHash);
      if (idx >= 0) { openLesson(idx); }
    } else {
      // If hash is cleared, go to list view
      document.body.classList.remove('sv');
      renderList();
    }
  });

  // Default: show list view
  renderList();

  /* ─── Touch Swipe Gesture Navigation (Vertical: up/down in content view) ─── */
  let touchStartX = 0;
  let touchStartY = 0;
  const SWIPE_MIN_Y = 55;  // minimum vertical distance to count as swipe
  const SWIPE_MAX_X = 80; // maximum horizontal drift

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    // Only handle swipes when in content view
    if (!document.body.classList.contains('sv')) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const dy = touchEndY - touchStartY; // negative = swipe up, positive = swipe down
    const dx = Math.abs(touchEndX - touchStartX);

    // Ignore if mostly horizontal (user is scrolling sideways or swiping within content)
    if (Math.abs(dy) < SWIPE_MIN_Y || dx > SWIPE_MAX_X) return;

    if (dy < 0) {
      // Swipe UP → Next lesson
      if (activeIndex < lessons.length - 1) {
        openLesson(activeIndex + 1);
      }
    } else {
      // Swipe DOWN → Previous lesson
      if (activeIndex > 0) {
        openLesson(activeIndex - 1);
      }
    }
  }, { passive: true });

  /* ─── Swipe hint on first visit (shown once) ─── */
  function showSwipeHint() {
    if (localStorage.getItem('np_swipe_hint_seen')) return;
    localStorage.setItem('np_swipe_hint_seen', '1');

    const hint = document.createElement('div');
    hint.id = 'swipe-hint';
    hint.style.cssText = `
      position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%);
      background: rgba(104,160,99,0.15); border: 1px solid rgba(104,160,99,0.3);
      color: #8cc084; font-size: 0.78rem; font-weight: 600;
      padding: 0.45rem 1.1rem; border-radius: 99px;
      display: flex; align-items: center; gap: 0.5rem;
      z-index: 500; pointer-events: none;
      animation: swipeHintFade 2.8s ease forwards;
      white-space: nowrap;
    `;
    hint.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M12 19V5"/><polyline points="5 12 12 5 19 12"/></svg>
      Swipe up / down to navigate
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M12 5v14"/><polyline points="19 12 12 19 5 12"/></svg>
    `;
    document.body.appendChild(hint);

    // Inject keyframe if not already present
    if (!document.getElementById('swipe-hint-style')) {
      const st = document.createElement('style');
      st.id = 'swipe-hint-style';
      st.textContent = `
        @keyframes swipeHintFade {
          0%   { opacity: 0; transform: translateX(-50%) translateY(8px); }
          15%  { opacity: 1; transform: translateX(-50%) translateY(0); }
          75%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(-50%) translateY(-6px); }
        }
      `;
      document.head.appendChild(st);
    }

    setTimeout(() => { if (hint.parentNode) hint.parentNode.removeChild(hint); }, 3000);
  }

})();






/* ── Playground ── */
const playgroundExamples = [
  {
    name: 'Hello World',
    code: `// Hello World
console.log("Hello, Node.js! 🚀");
console.log("Current time:", new Date().toLocaleTimeString());
console.log("Platform info:", process.platform);`
  },
  {
    name: 'Variables & Types',
    code: `// JavaScript Data Types
const name = "NextSem";
let version = 20;
const isAwesome = true;
const tags = ["node", "js", "backend"];
const meta = { author: "You", year: 2026 };

console.log("Name:", name);
console.log("Version:", version);
console.log("Is awesome:", isAwesome);
console.log("Tags:", tags.join(", "));
console.log("Meta:", JSON.stringify(meta));`
  },
  {
    name: 'Arrow Functions',
    code: `// Arrow Functions
const greet = (name) => \`Hello, \${name}! 👋\`;
const square = x => x * x;
const add = (a, b) => a + b;

console.log(greet("Developer"));
console.log("5² =", square(5));
console.log("7 + 8 =", add(7, 8));

// Higher-order functions
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const sum = nums.reduce((acc, n) => acc + n, 0);

console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("Sum:", sum);`
  },
  {
    name: 'Promises',
    code: `// Working with Promises
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchData(id) {
  return new Promise((resolve, reject) => {
    if (id > 0) {
      resolve({ id, name: "User " + id, active: true });
    } else {
      reject(new Error("Invalid ID: " + id));
    }
  });
}

// Promise chain
fetchData(42)
  .then(user => {
    console.log("✅ Fetched user:", JSON.stringify(user));
    return fetchData(99);
  })
  .then(user2 => console.log("✅ User 2:", JSON.stringify(user2)))
  .catch(err => console.error("❌ Error:", err.message));`
  },
  {
    name: 'Async/Await',
    code: `// Async/Await Pattern
async function getWeather(city) {
  // Simulate API call
  await new Promise(r => setTimeout(r, 300));
  return {
    city,
    temp: Math.floor(Math.random() * 30 + 10),
    condition: ["Sunny", "Cloudy", "Rainy"][Math.floor(Math.random() * 3)]
  };
}

async function main() {
  console.log("🌍 Fetching weather...");
  
  try {
    const cities = ["London", "Tokyo", "New York"];
    const results = await Promise.all(cities.map(getWeather));
    
    results.forEach(w => {
      console.log(\`\${w.city}: \${w.temp}°C, \${w.condition}\`);
    });
  } catch (err) {
    console.error("Failed:", err.message);
  }
}

main();`
  },
  {
    name: 'Array Methods',
    code: `// Powerful Array Methods
const products = [
  { name: "Laptop", price: 999, category: "Electronics" },
  { name: "Book", price: 29, category: "Education" },
  { name: "Phone", price: 799, category: "Electronics" },
  { name: "Desk", price: 349, category: "Furniture" },
  { name: "Course", price: 0, category: "Education" },
];

// Filter electronics
const electronics = products.filter(p => p.category === "Electronics");
console.log("Electronics:", electronics.map(p => p.name).join(", "));

// Get names of items > $100
const expensive = products
  .filter(p => p.price > 100)
  .map(p => p.name);
console.log("Expensive items:", expensive);

// Total cost
const total = products.reduce((sum, p) => sum + p.price, 0);
console.log("Total catalog value: $" + total);

// Sort by price
const sorted = [...products].sort((a, b) => a.price - b.price);
console.log("Cheapest first:", sorted.map(p => \`\${p.name}($\${p.price})\`).join(", "));`
  },
  {
    name: 'Classes & OOP',
    code: `// Object-Oriented Programming
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return \`\${this.name} says \${this.sound}!\`;
  }

  toString() {
    return \`[Animal: \${this.name}]\`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Woof");
    this.breed = breed;
  }

  fetch(item) {
    return \`\${this.name} fetches the \${item}! 🎾\`;
  }
}

const cat = new Animal("Luna", "Meow");
const dog = new Dog("Buddy", "Golden Retriever");

console.log(cat.speak());
console.log(dog.speak());
console.log(dog.fetch("ball"));
console.log("Is Dog?", dog instanceof Dog);
console.log("Is Animal?", dog instanceof Animal);`
  },
  {
    name: 'Error Handling',
    code: `// Robust Error Handling

// Custom Error class
class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
  }
}

// Sync error handling
function divide(a, b) {
  if (b === 0) throw new AppError("Division by zero!", 400);
  return a / b;
}

try {
  console.log("10 / 2 =", divide(10, 2));
  console.log("5 / 0 =", divide(5, 0)); // throws
} catch (err) {
  if (err instanceof AppError) {
    console.error(\`[AppError \${err.statusCode}]: \${err.message}\`);
  } else {
    console.error("Unknown error:", err.message);
  }
} finally {
  console.log("✅ Execution complete");
}`
  },
  {
    name: 'JSON Parsing',
    code: `// Parsing and Formatting JSON
const jsonString = '{"course": "NextSem", "durationWeeks": 6, "completed": false}';

// 1. Parse JSON string to Object
try {
  const parsed = JSON.parse(jsonString);
  console.log("Course name:", parsed.course);
  console.log("Duration:", parsed.durationWeeks, "weeks");

  // 2. Modify object & Stringify back to JSON
  parsed.completed = true;
  parsed.students = 1500;
  
  const prettyJSON = JSON.stringify(parsed, null, 2);
  console.log("Formatted JSON:\\n" + prettyJSON);
} catch (err) {
  console.error("Failed to parse JSON:", err.message);
}`
  },
  {
    name: 'Modern ES6+',
    code: `// Destructuring, Rest & Spread operators
const developer = {
  name: "Neo",
  skills: ["JavaScript", "Node.js", "Express"],
  experience: { years: 5, role: "Backend Developer" }
};

// 1. Destructuring
const { name, skills: [primarySkill], experience: { role } } = developer;
console.log(\`Developer \${name} is a \${role} specializing in \${primarySkill}.\`);

// 2. Spread Operator (Arrays)
const newSkills = [...developer.skills, "MongoDB", "Docker"];
console.log("Updated skills list:", newSkills);

// 3. Spread Operator (Objects)
const updatedDev = { ...developer, name: "Morpheus", level: "Senior" };
console.log("Updated user profile:", JSON.stringify(updatedDev));`
  },
  {
    name: 'String Utils',
    code: `// Common String & Text manipulations
const message = "   Welcome to NextSem - Learn Node.js Interactively!   ";

// 1. Clean spaces and case conversion
const clean = message.trim();
console.log("Original length:", message.length, "| Clean length:", clean.length);
console.log("Lowercase:", clean.toLowerCase());

// 2. Substrings and searching
const wordToFind = "Node.js";
console.log(\`Does it contain "\${wordToFind}"?\`, clean.includes(wordToFind));
console.log("Index of NextSem:", clean.indexOf("NextSem"));

// 3. String replacement
const replaced = clean.replace("Node.js", "Backend JavaScript");
console.log("Replaced text:", replaced);

// 4. Split and Join
const words = clean.split(" ");
console.log("Word count:", words.length);
console.log("URL Sluggified:", words.slice(0, 3).join("-").toLowerCase());`
  },
  {
    name: 'Date Calculations',
    code: `// Date manipulation and formatters
const now = new Date();

console.log("Current Date String:", now.toDateString());
console.log("ISO Format:", now.toISOString());

// 1. Add days
const targetDate = new Date();
targetDate.setDate(now.getDate() + 7);
console.log("Target Date (7 days later):", targetDate.toDateString());

// 2. Calculate time difference in hours
const diffTimeMs = targetDate - now;
const diffHours = Math.floor(diffTimeMs / (1000 * 60 * 60));
console.log(\`Time difference: \${diffHours} hours\`);

// 3. Locale Formats
console.log("Formatted Time:", now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));`
  }
];

const exampleList = document.getElementById('example-list');
const codeEditor = document.getElementById('code-editor');
let activeExample = null;

if (exampleList && codeEditor) {
  activeExample = playgroundExamples[0];
  codeEditor.value = activeExample.code;

  playgroundExamples.forEach((ex, i) => {
    const li = document.createElement('li');
    li.className = 'example-item' + (i === 0 ? ' active' : '');
    li.textContent = ex.name;
    li.addEventListener('click', () => {
      document.querySelectorAll('.example-item').forEach(el => el.classList.remove('active'));
      li.classList.add('active');
      activeExample = ex;
      activeChallenge = null;
      const verifyBtnEl = document.getElementById('verify-btn');
      if (verifyBtnEl) verifyBtnEl.style.display = 'none';
      const challengeCardEl = document.getElementById('challenge-card');
      if (challengeCardEl) challengeCardEl.style.display = 'none';
      codeEditor.value = ex.code;
      const outputContentEl = document.getElementById('output-content');
      if (outputContentEl) {
        outputContentEl.innerHTML = '<span class="output-placeholder">Run your code to see output here…</span>';
      }
    });
    exampleList.appendChild(li);
  });
}

/* ── Coding Challenges Logic ── */
const playgroundChallenges = [
  {
    id: 1,
    name: "1. Create HTTP Server",
    description: "Create an HTTP server using the built-in 'http' module. The server must respond with the text 'Hello next sem!' (exactly!) to all requests. The server must listen on port 3000.\n\nRequirements:\n- Use http.createServer()\n- Use server.listen(3000)",
    startingCode: `// Challenge 1: Create an HTTP Server
const http = require('http');

// Write your code here
`,
    verify: (code, logs) => {
      if (!code.includes('http.createServer')) {
        return { success: false, message: "Your code must use http.createServer() to create a server." };
      }
      if (!code.includes('3000')) {
        return { success: false, message: "Your server must listen on port 3000." };
      }

      // Run simulation with mocked HTTP
      let serverCallback = null;
      let serverPort = null;
      const mockHttp = {
        createServer: (cb) => {
          serverCallback = cb;
          return {
            listen: (port, cb2) => {
              serverPort = port;
              if (cb2) cb2();
            }
          };
        }
      };

      try {
        const fn = new Function('console', 'setTimeout', 'Promise', 'JSON', 'Math', 'Date', 'Error', 'Array', 'require', code);
        const reqRequire = (mod) => {
          if (mod === 'http') return mockHttp;
          throw new Error(`Module ${mod} is not mockable in this challenge.`);
        };
        fn({ log: () => {}, error: () => {}, warn: () => {} }, () => {}, Promise, JSON, Math, Date, Error, Array, reqRequire);
      } catch (err) {
        return { success: false, message: "Code execution error: " + err.message };
      }

      if (!serverCallback) {
        return { success: false, message: "http.createServer was not successfully called with a handler." };
      }
      if (Number(serverPort) !== 3000) {
        return { success: false, message: "The server did not call .listen() with port 3000." };
      }

      // Test the handler
      let responseData = "";
      const mockReq = {};
      const mockRes = {
        writeHead: () => {},
        end: (data) => { responseData = data; }
      };
      try {
        serverCallback(mockReq, mockRes);
      } catch (err) {
        return { success: false, message: "Error calling server request handler: " + err.message };
      }

      if (String(responseData).trim() !== "Hello next sem!") {
        return { success: false, message: `Expected server to respond with 'Hello next sem!', but got: '${responseData}'` };
      }

      return { success: true, message: "Congratulations! Your HTTP server is correctly configured!" };
    }
  },
  {
    id: 2,
    name: "2. EventEmitter Greet",
    description: "Create an EventEmitter instance. Register a listener for the event 'greet', and emit the event 'greet' with the string argument 'next sem'. The listener function must log 'Hello, next sem!' to the console.\n\nRequirements:\n- Require 'events'\n- Emit 'greet' with 'next sem'\n- Log 'Hello, next sem!'",
    startingCode: `// Challenge 2: EventEmitter Greet
const EventEmitter = require('events');

// Write your code here
`,
    verify: (code, logs) => {
      if (!code.includes('events') && !code.includes('EventEmitter')) {
        return { success: false, message: "Your code must use the events module and EventEmitter class." };
      }
      if (!code.includes('greet')) {
        return { success: false, message: "Your code must register/emit the 'greet' event." };
      }

      // Check logs
      const loggedGreet = logs.some(l => l.text === 'Hello, next sem!' && l.type === 'log');
      if (!loggedGreet) {
        return { success: false, message: "The console log 'Hello, next sem!' was not found in the output. Make sure you run your code before verifying." };
      }

      return { success: true, message: "Congratulations! The EventEmitter communication works perfectly!" };
    }
  },
  {
    id: 3,
    name: "3. Safe JSON Parsing",
    description: "Safely parse the JSON string '{\"course\":\"next sem\",\"active\":false}'. Modify the parsed object's 'active' property to true, and output the pretty-printed JSON string back to the console using JSON.stringify.\n\nRequirements:\n- Use JSON.parse()\n- Modify active to true\n- Log pretty JSON containing active: true",
    startingCode: `// Challenge 3: Safe JSON Parsing
const jsonString = '{"course":"next sem","active":false}';

// Write your code here
`,
    verify: (code, logs) => {
      if (!code.includes('JSON.parse')) {
        return { success: false, message: "Your code must use JSON.parse() to parse the JSON string." };
      }
      if (!code.includes('JSON.stringify')) {
        return { success: false, message: "Your code must use JSON.stringify() to format the object." };
      }

      const logTexts = logs.map(l => l.text);
      const containsMatch = logTexts.some(text => {
        try {
          const obj = JSON.parse(text);
          return obj.course === 'next sem' && obj.active === true;
        } catch(e) {
          return false;
        }
      });

      if (!containsMatch) {
        return { success: false, message: "Could not find a logged JSON output matching course='next sem' and active=true. Make sure to run your code first." };
      }

      return { success: true, message: "Congratulations! JSON parsing and modification completed successfully!" };
    }
  }
];

let activeChallenge = null;
let challengeStatus = JSON.parse(localStorage.getItem('challengeStatus') || '{}');

const challengeList = document.getElementById('challenge-list');
const verifyBtn = document.getElementById('verify-btn');
const challengeCard = document.getElementById('challenge-card');
const challengeTitle = document.getElementById('active-challenge-title');
const challengeDesc = document.getElementById('active-challenge-desc');
const challengeStatusBadge = document.getElementById('active-challenge-status');

// Render Challenges
function renderChallenges() {
  if (!challengeList) return;
  challengeList.innerHTML = '';
  playgroundChallenges.forEach(ch => {
    const li = document.createElement('li');
    const isSolved = challengeStatus[ch.id] === 'solved';
    li.className = 'challenge-item' + (activeChallenge && activeChallenge.id === ch.id ? ' active' : '');
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = ch.name;
    li.appendChild(nameSpan);

    const badge = document.createElement('span');
    badge.className = 'challenge-badge ' + (isSolved ? 'solved' : 'unsolved');
    badge.textContent = isSolved ? 'solved' : 'unsolved';
    li.appendChild(badge);

    li.addEventListener('click', () => {
      document.querySelectorAll('.challenge-item').forEach(el => el.classList.remove('active'));
      li.classList.add('active');
      activeChallenge = ch;
      activeExample = null;
      document.querySelectorAll('.example-item').forEach(el => el.classList.remove('active'));

      // Show challenge description
      if (challengeCard) challengeCard.style.display = 'flex';
      if (challengeTitle) challengeTitle.textContent = ch.name;
      if (challengeDesc) challengeDesc.textContent = ch.description;
      updateChallengeStatusBadge(ch.id);

      if (verifyBtn) verifyBtn.style.display = 'flex';
      if (codeEditor) codeEditor.value = ch.startingCode;
      const outputContentEl = document.getElementById('output-content');
      if (outputContentEl) {
        outputContentEl.innerHTML = '<span class="output-placeholder">Run your code to see output here…</span>';
      }
    });
    challengeList.appendChild(li);
  });
}

function updateChallengeStatusBadge(id) {
  if (!challengeStatusBadge) return;
  const isSolved = challengeStatus[id] === 'solved';
  challengeStatusBadge.className = 'challenge-status-badge ' + (isSolved ? 'solved' : 'unsolved');
  challengeStatusBadge.textContent = isSolved ? 'solved' : 'unsolved';
}

// Tab Switching
const tabExamples = document.getElementById('tab-examples');
const tabChallenges = document.getElementById('tab-challenges');
const sidebarExamples = document.getElementById('sidebar-examples');
const sidebarChallenges = document.getElementById('sidebar-challenges');

if (tabExamples && tabChallenges && sidebarExamples && sidebarChallenges) {
  tabExamples.addEventListener('click', () => {
    tabExamples.classList.add('active');
    tabChallenges.classList.remove('active');
    sidebarExamples.classList.remove('hidden');
    sidebarChallenges.classList.add('hidden');
  });

  tabChallenges.addEventListener('click', () => {
    tabChallenges.classList.add('active');
    tabExamples.classList.remove('active');
    sidebarChallenges.classList.remove('hidden');
    sidebarExamples.classList.add('hidden');
    renderChallenges();
  });
}

/* ── Code Runner (simulated) ── */
const runBtn = document.getElementById('run-btn');
const clearBtn = document.getElementById('clear-btn');
const clearOutputBtn = document.getElementById('clear-output-btn');
const outputContent = document.getElementById('output-content');

const fakeRequire = (mod) => {
  if (mod === 'events') {
    const EventEmitter = function() {
      this.listeners = {};
    };
    EventEmitter.prototype.on = function(event, cb) {
      if (!this.listeners[event]) this.listeners[event] = [];
      this.listeners[event].push(cb);
    };
    EventEmitter.prototype.emit = function(event, ...args) {
      if (this.listeners[event]) {
        this.listeners[event].forEach(cb => cb(...args));
      }
    };
    return EventEmitter;
  }
  if (mod === 'http') {
    return {
      createServer: (cb) => {
        return {
          listen: (port, cb2) => {
            if (cb2) cb2();
          }
        };
      }
    };
  }
  throw new Error(`Module "${mod}" is not supported in this browser environment.`);
};

function simulateRun(code) {
  const lines = [];
  const logs = [];

  // Capture console output
  const fakeConsole = {
    log: (...args) => logs.push({ type: 'log', text: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') }),
    error: (...args) => logs.push({ type: 'error', text: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') }),
    warn: (...args) => logs.push({ type: 'warn', text: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') }),
  };

  try {
    const patchedCode = code
      .replace(/\bprocess\.platform\b/g, '"win32"')
      .replace(/\bprocess\.version\b/g, '"v20.11.0"');

    const fn = new Function('console', 'setTimeout', 'Promise', 'JSON', 'Math', 'Date', 'Error', 'Array', 'require', patchedCode);

    // Collect deferred output
    const deferreds = [];
    const fakeST = (cb, ms) => { deferreds.push({ cb, ms }); return 0; };

    fn(fakeConsole, fakeST, Promise, JSON, Math, Date, Error, Array, fakeRequire);

    // Execute deferred immediately (for simulation)
    deferreds.sort((a, b) => a.ms - b.ms).forEach(d => {
      try { d.cb(); } catch(e) {}
    });

  } catch (err) {
    logs.push({ type: 'error', text: err.message });
  }

  return logs;
}

if (runBtn) {
  runBtn.addEventListener('click', () => {
    if (!codeEditor || !outputContent) return;
    const code = codeEditor.value.trim();
    if (!code) return;

    outputContent.innerHTML = '<span style="color:#8b949e">⏳ Running…</span>';

    setTimeout(() => {
      const logs = simulateRun(code);

      if (logs.length === 0) {
        outputContent.innerHTML = '<span style="color:#8b949e;font-style:italic">No output produced.</span>';
        return;
      }

      outputContent.innerHTML = logs.map(l => {
        const cls = l.type === 'error' ? 'output-error' : l.type === 'warn' ? 'output-warn' : 'output-log';
        const prefix = l.type === 'error' ? '✗ ' : l.type === 'warn' ? '⚠ ' : '› ';
        return `<div class="${cls}">${prefix}${escapeHtml(l.text)}</div>`;
      }).join('');
    }, 200);
  });
}

if (verifyBtn) {
  verifyBtn.addEventListener('click', () => {
    if (!activeChallenge || !codeEditor || !outputContent) return;
    const code = codeEditor.value.trim();

    // Run a quick simulation first to populate logs
    const logs = simulateRun(code);

    const result = activeChallenge.verify(code, logs);
    
    outputContent.innerHTML = '';
    if (result.success) {
      outputContent.innerHTML = `<div class="output-log" style="color: var(--node-green-light); font-weight: bold; background: rgba(104, 160, 99, 0.05); padding: 0.75rem; border-radius: 4px; border: 1px solid rgba(104, 160, 99, 0.2);">
        🎉 Verification Successful!<br>
        <span style="font-weight: 500; font-size: 0.85rem; display: block; margin-top: 4px; color: var(--text-secondary);">${result.message}</span>
      </div>`;
      
      // Mark as solved
      challengeStatus[activeChallenge.id] = 'solved';
      localStorage.setItem('challengeStatus', JSON.stringify(challengeStatus));
      renderChallenges();
      updateChallengeStatusBadge(activeChallenge.id);
    } else {
      outputContent.innerHTML = `<div class="output-error" style="color: #ff7b72; font-weight: bold; background: rgba(255, 123, 114, 0.05); padding: 0.75rem; border-radius: 4px; border: 1px solid rgba(255, 123, 114, 0.2);">
        ✗ Verification Failed<br>
        <span style="font-weight: 500; font-size: 0.85rem; display: block; margin-top: 4px; color: var(--text-secondary);">${result.message}</span>
      </div>`;
    }
  });
}

if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    if (codeEditor) codeEditor.value = '';
    if (outputContent) outputContent.innerHTML = '<span class="output-placeholder">Run your code to see output here…</span>';
  });
}

if (clearOutputBtn) {
  clearOutputBtn.addEventListener('click', () => {
    if (outputContent) outputContent.innerHTML = '<span class="output-placeholder">Run your code to see output here…</span>';
  });
}

// Tab key support in editor
if (codeEditor) {
  codeEditor.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = codeEditor.selectionStart;
      const end = codeEditor.selectionEnd;
      codeEditor.value = codeEditor.value.substring(0, start) + '  ' + codeEditor.value.substring(end);
      codeEditor.selectionStart = codeEditor.selectionEnd = start + 2;
    }
  });
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Playground Mode Switcher (Node.js vs Live Preview) ── */
const modeNodeBtn = document.getElementById('mode-nodejs');
const modeHtmlBtn = document.getElementById('mode-html');
const playgroundWrapper = document.querySelector('.playground-wrapper');
const livePreviewWrapper = document.getElementById('live-preview-wrapper');

if (modeNodeBtn && modeHtmlBtn) {
  modeNodeBtn.addEventListener('click', () => {
    modeNodeBtn.classList.add('active');
    modeHtmlBtn.classList.remove('active');
    if (playgroundWrapper) playgroundWrapper.style.display = '';
    if (livePreviewWrapper) livePreviewWrapper.classList.remove('active');
  });
  modeHtmlBtn.addEventListener('click', () => {
    modeHtmlBtn.classList.add('active');
    modeNodeBtn.classList.remove('active');
    if (playgroundWrapper) playgroundWrapper.style.display = 'none';
    if (livePreviewWrapper) {
      livePreviewWrapper.classList.add('active');
      updateLivePreview();
    }
  });
}

/* ── Live HTML/CSS/JS Preview ── */
function updateLivePreview() {
  const frame = document.getElementById('live-preview-frame');
  if (!frame) return;
  const html = document.getElementById('live-html')?.value || '';
  const css  = document.getElementById('live-css')?.value  || '';
  const js   = document.getElementById('live-js')?.value   || '';

  // Inject CSS and JS into the HTML
  const hasHead = /<head[\s>]/i.test(html);
  let content = html;
  if (hasHead) {
    content = content.replace(/<\/head>/i, `<style>${css}</style></head>`);
  } else {
    content = `<style>${css}</style>` + content;
  }
  const hasBody = /<\/body>/i.test(content);
  if (hasBody) {
    content = content.replace(/<\/body>/i, `<script>${js}<\/script></body>`);
  } else {
    content = content + `<script>${js}<\/script>`;
  }
  frame.srcdoc = content;
}

// Live editor tab switching
const liveEditorTabs = document.querySelectorAll('.live-editor-tab');
const liveCodeAreas  = document.querySelectorAll('.live-code-area');

liveEditorTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    liveEditorTabs.forEach(t => t.classList.remove('active'));
    liveCodeAreas.forEach(a => a.classList.remove('active'));
    tab.classList.add('active');
    const lang = tab.dataset.lang;
    const area = document.getElementById(`live-${lang}`);
    if (area) area.classList.add('active');
  });
});

// Auto-update preview on typing (debounced)
let previewTimeout;
liveCodeAreas.forEach(area => {
  area.addEventListener('input', () => {
    clearTimeout(previewTimeout);
    previewTimeout = setTimeout(updateLivePreview, 400);
  });
  area.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const s = area.selectionStart, en = area.selectionEnd;
      area.value = area.value.substring(0, s) + '  ' + area.value.substring(en);
      area.selectionStart = area.selectionEnd = s + 2;
    }
  });
});

// Manual refresh button
const refreshPreviewBtn = document.getElementById('refresh-preview');
if (refreshPreviewBtn) refreshPreviewBtn.addEventListener('click', updateLivePreview);

/* ── Intersection Observer animations ── */
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.module-card, .resource-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, box-shadow 0.3s';
  observer.observe(el);
});

/* ── Active nav link tracking ── */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinkEls.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}` ? '#68a063' : '';
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => sectionObserver.observe(s));

/* ── Interactive Quiz ── */
const quizQuestions = [
  { question: "Which engine does Node.js use to execute JavaScript?",
    options: ["Chakra","SpiderMonkey","V8 Engine","JavaScriptCore"],
    answer: 2, explanation: "Node.js runs on Google's V8 engine, which compiles JavaScript directly into native machine code." },
  { question: "Which of the following is true about Node.js event-driven architecture?",
    options: ["Creates a new thread per connection","Runs a single thread with async I/O via libuv","Relies entirely on synchronous multi-threading","Forces the CPU to block on disk reads"],
    answer: 1, explanation: "Node.js is single-threaded but handles highly concurrent operations asynchronously through the event loop, backed by libuv." },
  { question: "What is the difference between process.nextTick() and setImmediate()?",
    options: ["setImmediate runs first always","process.nextTick runs after current op, before event loop phases continue","setImmediate runs outside the V8 execution context","process.nextTick runs only when the CPU is completely idle"],
    answer: 1, explanation: "process.nextTick() queues callbacks in the microtask queue to run immediately after the current operation. setImmediate() executes in the Check phase of the event loop." },
  { question: "Why should you avoid using synchronous file methods (like fs.readFileSync) in a production web server?",
    options: ["They crash automatically","They consume too many CPU registers","They block the single main thread, halting request handling","They require administrative OS access"],
    answer: 2, explanation: "Synchronous operations block the single-threaded event loop, preventing all other incoming connections from being processed." },
  { question: "Which built-in Node.js module is used to work with file and directory paths?",
    options: ["url","path","fs","os"],
    answer: 1, explanation: "The path module provides utilities for working with file and directory paths (e.g., path.join, path.resolve)." },
  { question: "What npm command installs a package as a developer-only dependency in package.json?",
    options: ["npm install -g <pkg>","npm install --save-dev <pkg>","npm install --prod <pkg>","npm install --global-dev <pkg>"],
    answer: 1, explanation: "npm install --save-dev (or -D) saves packages under devDependencies, separate from runtime production packages." },
  { question: "What is a Buffer in Node.js?",
    options: ["A cache memory for images","A temporary container in memory for handling raw binary data","A class that manages child threads","A CSS styles processor"],
    answer: 1, explanation: "Buffers are global memory containers designed to read and manipulate raw octets or binary data streams in Node.js." },
  { question: "Which event loop phase executes callbacks scheduled by setTimeout() and setInterval()?",
    options: ["Check phase","Poll phase","Close callbacks phase","Timers phase"],
    answer: 3, explanation: "The Timers phase is the very first phase of the event loop iteration and runs timer callbacks that are due." },
  { question: "What is the purpose of the Event Emitter class in Node.js?",
    options: ["To connect servers together","To bind listeners to specific custom event strings and trigger them","To run tasks in parallel child threads","To handle HTTP request bodies"],
    answer: 1, explanation: "Node's EventEmitter class facilitates communication by allowing objects to register handlers (on) and emit custom events (emit)." },
  { question: "What happens when an unhandled promise rejection occurs in modern Node.js versions?",
    options: ["The warning is ignored","The promise retries automatically","Node.js logs the error and terminates the process with code 1","It spawns a new event loop cycle"],
    answer: 2, explanation: "Modern Node.js versions terminate the process on unhandled promise rejections to prevent silent memory/state errors." },
  { question: "Which module allows you to spawn multiple child processes to share the same port and utilize multi-core CPUs?",
    options: ["os","child_process","cluster","worker_threads"],
    answer: 2, explanation: "The cluster module allows you to easily scale a single Node.js application across multiple CPU cores by running multiple worker processes." },
  { question: "What does 'module.exports' do in a CommonJS module?",
    options: ["Imports a package from npm","Registers a listener on process.on","Defines the exposed public API of the module","Compiles the code to binary"],
    answer: 2, explanation: "module.exports is the object returned when another file imports the module using require()." },
  { question: "What is the role of PM2 in a Node.js production deployment?",
    options: ["Secures database connections","A process manager that keeps apps alive and handles cluster reloading","An asset bundler","A testing library"],
    answer: 1, explanation: "PM2 is a production process manager that keeps Node.js applications alive, auto-restarts on crash, and manages server clusters." },
  { question: "Which npm package protects Express apps by setting secure HTTP headers?",
    options: ["cors","helmet","morgan","dotenv"],
    answer: 1, explanation: "Helmet.js sets security headers like X-Frame-Options and X-Content-Type-Options to protect against common web attacks." },
  { question: "What does JWT stand for?",
    options: ["JavaScript Web Token","JSON Web Token","Java Web Transport","JSON With Types"],
    answer: 1, explanation: "JWT stands for JSON Web Token. It is a compact, URL-safe token format used for authentication." },
  { question: "What is middleware in Express.js?",
    options: ["A database connector","A function with access to req, res, and next","A CSS preprocessor","A build tool"],
    answer: 1, explanation: "Middleware is a function with (req, res, next) parameters that can process requests, modify responses, or pass control to the next middleware." },
  { question: "Which HTTP method is used to update a resource in REST APIs?",
    options: ["GET","POST","PUT","DELETE"],
    answer: 2, explanation: "PUT (or PATCH) is used to update an existing resource. GET reads, POST creates, DELETE removes." },
  { question: "What does bcrypt do in authentication?",
    options: ["Encrypts database connections","Hashes passwords securely","Generates session IDs","Validates JWT tokens"],
    answer: 1, explanation: "bcrypt is a password hashing library. It adds a salt and applies multiple rounds of hashing to securely store passwords." },
  { question: "What is CORS?",
    options: ["A Node.js module","A browser security policy for cross-origin requests","A database protocol","A CSS framework"],
    answer: 1, explanation: "CORS (Cross-Origin Resource Sharing) is a browser security feature that controls which domains can make requests to your API." },
  { question: "What is Mongoose in the Node.js ecosystem?",
    options: ["A testing framework","An ODM (Object Document Mapper) for MongoDB","A SQL query builder","A web server framework"],
    answer: 1, explanation: "Mongoose is an ODM (Object Document Mapper) that provides a schema-based solution for modeling MongoDB data in Node.js." }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let isAnswered = false;

const quizActiveState = document.getElementById('quiz-active-state');
const quizResultsState = document.getElementById('quiz-results-state');
const qProgressText = document.getElementById('quiz-progress-text');
const qScoreBadge = document.getElementById('quiz-score-badge');
const qProgressBarFill = document.getElementById('quiz-progress-bar-fill');
const qQuestionText = document.getElementById('quiz-question-text');
const qOptionsContainer = document.getElementById('quiz-options');
const qFeedback = document.getElementById('quiz-feedback');
const qFeedbackTitle = document.getElementById('quiz-feedback-title');
const qFeedbackText = document.getElementById('quiz-feedback-text');
const qNextBtn = document.getElementById('quiz-next-btn');

const qResultsIcon = document.getElementById('quiz-results-icon');
const qResultsScore = document.getElementById('quiz-results-score');
const qResultsHeading = document.getElementById('quiz-results-heading');
const qResultsText = document.getElementById('quiz-results-text');
const qRestartBtn = document.getElementById('quiz-restart-btn');

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  selectedOption = null;
  isAnswered = false;
  
  if (quizActiveState && quizResultsState) {
    quizActiveState.style.display = 'block';
    quizResultsState.style.display = 'none';
    loadQuestion();
  }
}

function loadQuestion() {
  selectedOption = null;
  isAnswered = false;
  
  const q = quizQuestions[currentQuestionIndex];
  qProgressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  qScoreBadge.textContent = `Score: ${score}`;
  
  const pct = ((currentQuestionIndex) / quizQuestions.length) * 100;
  qProgressBarFill.style.width = pct + '%';
  
  qQuestionText.textContent = q.question;
  qOptionsContainer.innerHTML = '';
  
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerHTML = `
      <span>${opt}</span>
      <span class="quiz-option-marker">${String.fromCharCode(65 + idx)}</span>
    `;
    btn.addEventListener('click', () => {
      if (isAnswered) return;
      selectOption(idx);
    });
    qOptionsContainer.appendChild(btn);
  });
  
  qFeedback.style.display = 'none';
  qNextBtn.textContent = 'Submit Answer';
  qNextBtn.disabled = true;
}

function selectOption(index) {
  selectedOption = index;
  
  const options = qOptionsContainer.querySelectorAll('.quiz-option');
  options.forEach((opt, idx) => {
    opt.classList.toggle('selected', idx === index);
  });
  
  qNextBtn.disabled = false;
}

function submitAnswer() {
  isAnswered = true;
  const q = quizQuestions[currentQuestionIndex];
  const options = qOptionsContainer.querySelectorAll('.quiz-option');
  
  options.forEach((opt) => opt.classList.add('disabled'));
  
  if (selectedOption === q.answer) {
    score++;
    qScoreBadge.textContent = `Score: ${score}`;
    options[selectedOption].classList.add('correct');
    
    qFeedback.className = 'quiz-feedback correct-feedback';
    qFeedbackTitle.textContent = '✓ Correct Answer!';
  } else {
    options[selectedOption].classList.add('incorrect');
    options[q.answer].classList.add('correct');
    
    qFeedback.className = 'quiz-feedback incorrect-feedback';
    qFeedbackTitle.textContent = '✗ Incorrect';
  }
  
  qFeedbackText.textContent = q.explanation;
  qFeedback.style.display = 'block';
  
  const isLast = currentQuestionIndex === quizQuestions.length - 1;
  qNextBtn.textContent = isLast ? 'Show Results' : 'Next Question';
  
  const nextPct = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  qProgressBarFill.style.width = nextPct + '%';
}

function showResults() {
  quizActiveState.style.display = 'none';
  quizResultsState.style.display = 'block';
  
  qResultsScore.innerHTML = `${score}<span>/${quizQuestions.length}</span>`;
  
  let icon = '🏆';
  let heading = 'Outstanding!';
  let text = 'You have a solid understanding of Node.js fundamentals. Keep up the great work!';
  
  const ratio = score / quizQuestions.length;
  if (ratio < 0.5) {
    icon = '📚';
    heading = 'Keep Learning!';
    text = 'Review the curriculum lessons and practice running code examples in the Playground to strengthen your Node.js skills.';
  } else if (ratio < 0.8) {
    icon = '👍';
    heading = 'Good Job!';
    text = 'You have a good grasp of the basics. Read our technical deep-dives on the Blog to master advanced patterns!';
  }
  
  qResultsIcon.textContent = icon;
  qResultsHeading.textContent = heading;
  qResultsText.textContent = text;
}

if (qNextBtn) {
  qNextBtn.addEventListener('click', () => {
    if (!isAnswered) {
      submitAnswer();
    } else {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
      } else {
        showResults();
      }
    }
  });
}

if (qRestartBtn) {
  qRestartBtn.addEventListener('click', startQuiz);
}

// Start immediately on load if elements present
if (document.getElementById('quiz-card')) {
  startQuiz();
}

/* ── Continue Learning Banner (Homepage) ── */
window.updateContinueBanner = function() {
  const banner = document.getElementById('continue-learning-banner');
  const bannerText = document.getElementById('continue-learning-text');
  const resumeBtn = document.getElementById('btn-continue-learning');

  if (!banner || !bannerText || !resumeBtn) return;

  const completedIds = JSON.parse(localStorage.getItem('np_completed') || '[]');
  if (completedIds.length === 0) {
    banner.style.display = 'none';
    return;
  }

  // Find the first uncompleted lesson
  let nextLesson = null;
  if (typeof lessons !== 'undefined') {
    for (let i = 0; i < lessons.length; i++) {
      if (!completedIds.includes(lessons[i].id)) {
        nextLesson = lessons[i];
        break;
      }
    }
  }

  if (!nextLesson) {
    bannerText.innerHTML = '🎉 <strong>All lessons completed!</strong> Revisit key topics anytime.';
    resumeBtn.textContent = 'Lessons List';
    const newBtn = resumeBtn.cloneNode(true);
    resumeBtn.parentNode.replaceChild(newBtn, resumeBtn);
    newBtn.addEventListener('click', () => {
      window.location.href = 'lessons.html';
    });
  } else {
    bannerText.innerHTML = `Continue learning: <strong>${nextLesson.tab}</strong>`;
    const newBtn = resumeBtn.cloneNode(true);
    resumeBtn.parentNode.replaceChild(newBtn, resumeBtn);
    newBtn.addEventListener('click', () => {
      window.location.href = `lessons.html#${nextLesson.id}`;
    });
  }
  banner.style.display = 'block';
};

// Initial execution
window.updateContinueBanner();

/* ── Mobile Playground Tabs Navigation ── */
(function() {
  const wrapper = document.querySelector('.playground-wrapper');
  const tabs = document.querySelectorAll('.pg-m-tab');

  if (!wrapper || tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      
      // Update active tab button style
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update wrapper display classes
      wrapper.classList.remove('show-sidebar', 'show-editor', 'show-output');
      if (target === 'editor') {
        wrapper.classList.add('show-editor');
      } else if (target === 'output') {
        wrapper.classList.add('show-output');
      }
    });
  });

  // Switch to output tab when code runs
  const runBtn = document.getElementById('run-btn');
  const verifyBtn = document.getElementById('verify-btn');
  const terminalTab = document.querySelector('.pg-m-tab[data-tab="output"]');

  function switchToTerminal() {
    if (window.innerWidth <= 480 && terminalTab) {
      terminalTab.click();
    }
  }

  if (runBtn) runBtn.addEventListener('click', () => setTimeout(switchToTerminal, 50));
  if (verifyBtn) verifyBtn.addEventListener('click', () => setTimeout(switchToTerminal, 50));
})();

