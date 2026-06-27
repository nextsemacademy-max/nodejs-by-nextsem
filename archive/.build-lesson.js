// Builder: generates lesson-html-fundamentals.html
const fs = require('fs');
const out = 'c:/nodejs by NA/lesson-html-fundamentals.html';

const head = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Fundamentals - F-01 | NextSem</title>
  <meta name="description" content="Learn HTML elements, attributes, semantic HTML5, forms and tables with interactive examples." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css?v=15" />
  <link rel="manifest" href="manifest.json" />
  <link rel="icon" sizes="192x192" href="icon-192.png" />
  <meta name="theme-color" content="#0a0e13" />
  <style>
.lesson-page{max-width:900px;margin:0 auto;padding:100px 1.5rem 80px}
.back-link{display:inline-flex;align-items:center;gap:.5rem;color:var(--node-green-light);text-decoration:none;font-size:.9rem;font-weight:600;margin-bottom:2rem;transition:var(--transition)}
.back-link:hover{transform:translateX(-4px)}
.lesson-hero{background:var(--card-bg);border:1px solid var(--border);border-radius:20px;padding:2.5rem;margin-bottom:2.5rem;position:relative;overflow:hidden}
.lesson-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at top left,rgba(104,160,99,.08) 0%,transparent 60%);pointer-events:none}
.lesson-meta{display:flex;align-items:center;gap:.75rem;flex-wrap:wrap;margin-bottom:1rem}
.lesson-badge{background:rgba(104,160,99,.12);border:1px solid rgba(104,160,99,.25);color:var(--node-green-light);padding:.25rem .75rem;border-radius:6px;font-size:.78rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase}
.lesson-badge.track{background:rgba(99,132,255,.1);border-color:rgba(99,132,255,.2);color:#99aaff}
.lesson-hero-title{font-size:clamp(2rem,5vw,2.8rem);font-weight:900;letter-spacing:-1px;color:var(--text-primary);margin-bottom:.75rem;line-height:1.2}
.lesson-hero-title .gradient-text{background:linear-gradient(135deg,#68a063,#00d4aa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.lesson-hero-desc{color:var(--text-secondary);font-size:1.05rem;line-height:1.7;max-width:680px;margin-bottom:1.5rem}
.lesson-tags{display:flex;gap:.5rem;flex-wrap:wrap}
.lesson-tag{background:var(--surface);border:1px solid var(--border);color:var(--node-green-light);padding:.3rem .75rem;border-radius:6px;font-size:.8rem;font-weight:600;font-family:'JetBrains Mono',monospace}
.lesson-progress-bar-wrap{margin-top:1.75rem;background:var(--surface);border-radius:8px;height:6px;overflow:hidden}
.lesson-progress-bar-fill{height:100%;background:linear-gradient(90deg,#68a063,#00d4aa);border-radius:8px;transition:width .6s ease;width:0%}
.lesson-progress-label{font-size:.78rem;color:var(--text-secondary);margin-top:.5rem}
.lesson-toc{background:var(--card-bg);border:1px solid var(--border);border-radius:14px;padding:1.5rem;margin-bottom:2rem}
.lesson-toc h3{font-size:.85rem;text-transform:uppercase;letter-spacing:.1em;color:var(--text-secondary);margin-bottom:.75rem;font-weight:700}
.toc-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.35rem}
.toc-list a{color:var(--text-secondary);text-decoration:none;font-size:.92rem;transition:var(--transition);display:flex;align-items:center;gap:.5rem}
.toc-list a:hover{color:var(--node-green-light);transform:translateX(4px)}
.toc-num{font-family:'JetBrains Mono',monospace;font-size:.75rem;color:var(--node-green);min-width:1.8rem}
.lesson-section{background:var(--card-bg);border:1px solid var(--border);border-radius:16px;padding:2rem;margin-bottom:1.5rem;scroll-margin-top:90px}
.lesson-section-header{display:flex;align-items:center;gap:.75rem;margin-bottom:1.25rem}
.section-icon{width:42px;height:42px;background:rgba(104,160,99,.1);border:1px solid rgba(104,160,99,.2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0}
.lesson-section h2{font-size:1.35rem;font-weight:800;color:var(--text-primary);letter-spacing:-.3px}
.lesson-section p,.lesson-section ul,.lesson-section ol{color:var(--text-secondary);line-height:1.8;margin-bottom:1rem}
.lesson-section ul,.lesson-section ol{padding-left:1.4rem}
.lesson-section li{margin-bottom:.3rem}
.lesson-section strong{color:var(--text-primary)}
.code-block{background:#0d1117;border:1px solid rgba(104,160,99,.15);border-radius:10px;overflow:hidden;margin:1.25rem 0}
.code-block-header{background:rgba(255,255,255,.03);border-bottom:1px solid rgba(255,255,255,.06);padding:.6rem 1rem;display:flex;align-items:center;justify-content:space-between;gap:.5rem}
.code-block-dots{display:flex;gap:5px}
.code-block-dots span{width:10px;height:10px;border-radius:50%}
.d1{background:#ff5f57}.d2{background:#febc2e}.d3{background:#28c840}
.code-block-lang{font-family:'JetBrains Mono',monospace;font-size:.72rem;color:var(--text-secondary);letter-spacing:.05em}
.code-block-copy{background:transparent;border:1px solid var(--border);color:var(--text-secondary);padding:.25rem .6rem;border-radius:5px;font-size:.72rem;cursor:pointer;transition:var(--transition)}
.code-block-copy:hover{border-color:var(--node-green);color:var(--node-green-light)}
.code-block pre{margin:0;padding:1.25rem;overflow-x:auto;font-family:'JetBrains Mono',monospace;font-size:.88rem;line-height:1.7;color:#e6edf3}
.info-box{border-radius:10px;padding:1rem 1.25rem;margin:1rem 0;display:flex;gap:.75rem;align-items:flex-start}
.info-box.tip{background:rgba(104,160,99,.08);border:1px solid rgba(104,160,99,.2)}
.info-box.warn{background:rgba(255,193,7,.07);border:1px solid rgba(255,193,7,.2)}
.info-box.note{background:rgba(99,132,255,.07);border:1px solid rgba(99,132,255,.2)}
.info-box-icon{font-size:1.1rem;flex-shrink:0;margin-top:1px}
.info-box p{margin:0;color:var(--text-secondary);font-size:.93rem;line-height:1.7}
.tryit-wrap{border:1px solid var(--border);border-radius:14px;overflow:hidden;margin:1.5rem 0}
.tryit-header{background:var(--surface);border-bottom:1px solid var(--border);padding:.75rem 1rem;display:flex;align-items:center;gap:.5rem}
.tryit-label{font-size:.8rem;font-weight:700;color:var(--node-green-light);text-transform:uppercase;letter-spacing:.06em}
.tryit-body{display:grid;grid-template-columns:1fr 1fr;min-height:220px}
@media(max-width:640px){.tryit-body{grid-template-columns:1fr}}
.tryit-editor{border-right:1px solid var(--border)}
.tryit-editor textarea{width:100%;height:100%;min-height:220px;background:#0d1117;color:#e6edf3;font-family:'JetBrains Mono',monospace;font-size:.82rem;line-height:1.7;padding:1rem;border:none;resize:none;outline:none;box-sizing:border-box}
.tryit-preview{background:#fff;display:flex;flex-direction:column}
.tryit-preview-bar{background:#f0f0f0;border-bottom:1px solid #ddd;padding:.4rem .75rem;display:flex;align-items:center;justify-content:space-between}
.tryit-preview-bar span{font-size:.72rem;color:#666}
.tryit-run-btn{background:#28c840;color:#fff;border:none;padding:.25rem .75rem;border-radius:5px;font-size:.75rem;font-weight:700;cursor:pointer}
.tryit-preview iframe{width:100%;flex:1;border:none;min-height:180px}
.quiz-mini{background:var(--card-bg);border:1px solid var(--border);border-radius:16px;padding:2rem;margin-bottom:1.5rem}
.quiz-mini h2{font-size:1.35rem;font-weight:800;color:var(--text-primary);margin-bottom:.5rem}
.quiz-mini>p{color:var(--text-secondary);margin-bottom:1.5rem}
.quiz-q{margin-bottom:1.5rem}
.quiz-q-text{font-weight:700;color:var(--text-primary);margin-bottom:.75rem;font-size:.97rem}
.quiz-options{display:flex;flex-direction:column;gap:.4rem}
.quiz-opt{background:var(--surface);border:1px solid var(--border);color:var(--text-secondary);padding:.65rem 1rem;border-radius:8px;cursor:pointer;text-align:left;font-size:.9rem;transition:var(--transition)}
.quiz-opt:hover:not(:disabled){border-color:var(--node-green);color:var(--node-green-light)}
.quiz-opt.correct{background:rgba(104,160,99,.12);border-color:#68a063;color:#a8d5a0}
.quiz-opt.wrong{background:rgba(239,68,68,.1);border-color:#ef4444;color:#fca5a5}
.quiz-feedback-msg{font-size:.85rem;margin-top:.5rem;min-height:1.2em}
.quiz-feedback-msg.ok{color:var(--node-green-light)}
.quiz-feedback-msg.err{color:#fca5a5}
.lesson-nav{display:flex;gap:1rem;margin-top:2.5rem;flex-wrap:wrap}
.lesson-nav-btn{flex:1;min-width:180px;background:var(--card-bg);border:1px solid var(--border);border-radius:14px;padding:1.1rem 1.4rem;text-align:left;text-decoration:none;transition:var(--transition);display:flex;flex-direction:column;gap:.25rem}
.lesson-nav-btn:hover{border-color:var(--node-green);background:rgba(104,160,99,.06)}
.lesson-nav-dir{font-size:.75rem;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.07em;font-weight:600}
.lesson-nav-title{font-size:1rem;font-weight:700;color:var(--text-primary)}
.lesson-nav-btn.next{text-align:right;align-items:flex-end}
  </style>
</head>`;

const nav = `
<body>
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <button class="hamburger" id="hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
      <a href="index.html" class="nav-logo">
        <svg class="logo-icon" viewBox="0 0 84 64" fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"><path d="M 16 52 L 16 26 C 16 17.5 22.5 11 30.5 11 C 38.5 11 45 17.5 45 26 L 45 42 C 45 48 49 53 56 53 C 63 53 67 48 67 42 C 67 36 63 32 56 32 C 49 32 45 28 45 22 C 45 16 49 11 56 11 C 63 11 67 16 67 22" /></svg>
        <span class="logo-text">next sem</span>
      </a>
      <ul class="nav-links" id="nav-links">
        <li><a href="index.html#curriculum" class="nav-link">Curriculum</a></li>
        <li><a href="index.html#lessons" class="nav-link">Lessons</a></li>
        <li><a href="index.html#playground" class="nav-link">Playground</a></li>
        <li><a href="index.html#quiz" class="nav-link">Quiz</a></li>
        <li><a href="blog.html" class="nav-link">Blog</a></li>
        <li><a href="about.html" class="nav-link">About</a></li>
      </ul>
      <div class="nav-actions">
        <a href="index.html" class="btn-start" style="text-decoration:none">Back to Courses</a>
      </div>
    </div>
  </nav>`;

const hero = `
  <main class="lesson-page">
    <a href="index.html#curriculum" class="back-link">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      Back to Curriculum
    </a>
    <div class="lesson-hero">
      <div class="lesson-meta">
        <span class="lesson-badge">F-01</span>
        <span class="lesson-badge track">Frontend Track</span>
        <span class="lesson-badge">Beginner</span>
      </div>
      <h1 class="lesson-hero-title">&#127959;&#65039; <span class="gradient-text">HTML Fundamentals</span></h1>
      <p class="lesson-hero-desc">Learn the building blocks of the web: elements, attributes, semantic HTML5, forms, tables, and document structure. By the end you will be able to build any static web page from scratch.</p>
      <div class="lesson-tags">
        <span class="lesson-tag">Elements</span><span class="lesson-tag">Semantics</span>
        <span class="lesson-tag">Forms</span><span class="lesson-tag">Tables</span>
        <span class="lesson-tag">Attributes</span><span class="lesson-tag">HTML5</span>
      </div>
      <div class="lesson-progress-bar-wrap"><div class="lesson-progress-bar-fill" id="lesson-progress-fill"></div></div>
      <div class="lesson-progress-label" id="lesson-progress-label">0% complete &#8212; scroll to learn</div>
    </div>
    <div class="lesson-toc">
      <h3>In this lesson</h3>
      <ol class="toc-list">
        <li><a href="#sec-what"><span class="toc-num">01</span>What is HTML?</a></li>
        <li><a href="#sec-structure"><span class="toc-num">02</span>Document Structure</a></li>
        <li><a href="#sec-elements"><span class="toc-num">03</span>Common Elements</a></li>
        <li><a href="#sec-attributes"><span class="toc-num">04</span>Attributes</a></li>
        <li><a href="#sec-semantic"><span class="toc-num">05</span>Semantic HTML5</a></li>
        <li><a href="#sec-links"><span class="toc-num">06</span>Links &amp; Images</a></li>
        <li><a href="#sec-lists"><span class="toc-num">07</span>Lists</a></li>
        <li><a href="#sec-tables"><span class="toc-num">08</span>Tables</a></li>
        <li><a href="#sec-forms"><span class="toc-num">09</span>Forms &amp; Inputs</a></li>
        <li><a href="#sec-quiz"><span class="toc-num">10</span>Knowledge Check</a></li>
      </ol>
    </div>`;

const sections = `
    <div class="lesson-section" id="sec-what">
      <div class="lesson-section-header"><div class="section-icon">&#127760;</div><h2>What is HTML?</h2></div>
      <p><strong>HTML (HyperText Markup Language)</strong> is the standard language for creating and structuring web pages. It is not a programming language &mdash; it is a <em>markup language</em> that uses tags to annotate content.</p>
      <p>Every web page you have visited is built on HTML. Combined with CSS (styling) and JavaScript (interactivity), HTML forms the three pillars of front-end web development.</p>
      <div class="info-box tip"><span class="info-box-icon">&#128161;</span><p><strong>Fun fact:</strong> HTML was created by Tim Berners-Lee in 1991. The current standard is <strong>HTML5</strong>, continuously updated by the W3C.</p></div>
    </div>

    <div class="lesson-section" id="sec-structure">
      <div class="lesson-section-header"><div class="section-icon">&#128196;</div><h2>Document Structure</h2></div>
      <p>Every HTML document follows a standard skeleton that browsers use to render the page correctly.</p>
      <div class="code-block">
        <div class="code-block-header"><div class="code-block-dots"><span class="d1"></span><span class="d2"></span><span class="d3"></span></div><span class="code-block-lang">HTML</span><button class="code-block-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;title&gt;My First Web Page&lt;/title&gt;
  &lt;link rel="stylesheet" href="style.css" /&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello, World!&lt;/h1&gt;
  &lt;p&gt;Welcome to my first web page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
      <ul>
        <li><strong>&lt;!DOCTYPE html&gt;</strong> &mdash; Declares this is an HTML5 document.</li>
        <li><strong>&lt;html lang="en"&gt;</strong> &mdash; Root element; lang attribute helps screen readers and SEO.</li>
        <li><strong>&lt;head&gt;</strong> &mdash; Metadata: charset, viewport, title, CSS links (not visible).</li>
        <li><strong>&lt;body&gt;</strong> &mdash; All visible content lives here.</li>
      </ul>
    </div>

    <div class="lesson-section" id="sec-elements">
      <div class="lesson-section-header"><div class="section-icon">&#127991;</div><h2>Common Elements</h2></div>
      <p>HTML elements are represented by tags in angle brackets. Most have an opening and closing tag.</p>
      <div class="code-block">
        <div class="code-block-header"><div class="code-block-dots"><span class="d1"></span><span class="d2"></span><span class="d3"></span></div><span class="code-block-lang">HTML</span><button class="code-block-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code>&lt;!-- Headings h1 (most important) to h6 (least) --&gt;
&lt;h1&gt;Main Heading&lt;/h1&gt;
&lt;h2&gt;Sub Heading&lt;/h2&gt;

&lt;!-- Paragraph --&gt;
&lt;p&gt;This is a paragraph.&lt;/p&gt;

&lt;!-- Inline formatting --&gt;
&lt;p&gt;&lt;strong&gt;bold&lt;/strong&gt;, &lt;em&gt;italic&lt;/em&gt;, &lt;mark&gt;highlighted&lt;/mark&gt;&lt;/p&gt;

&lt;!-- Self-closing --&gt;
&lt;br /&gt;   &lt;!-- line break --&gt;
&lt;hr /&gt;   &lt;!-- horizontal rule --&gt;

&lt;div class="card"&gt;Block container&lt;/div&gt;
&lt;span class="highlight"&gt;Inline container&lt;/span&gt;</code></pre>
      </div>
      <div class="info-box note"><span class="info-box-icon">&#128204;</span><p><strong>Block vs Inline:</strong> Block elements (div, p, h1) take full width and start on a new line. Inline elements (span, strong, em) flow within text.</p></div>
    </div>

    <div class="lesson-section" id="sec-attributes">
      <div class="lesson-section-header"><div class="section-icon">&#9881;&#65039;</div><h2>Attributes</h2></div>
      <p>Attributes provide extra information about an element, written in the opening tag as <code>name="value"</code> pairs.</p>
      <div class="code-block">
        <div class="code-block-header"><div class="code-block-dots"><span class="d1"></span><span class="d2"></span><span class="d3"></span></div><span class="code-block-lang">HTML</span><button class="code-block-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code>&lt;div id="main-content"&gt;Unique identifier&lt;/div&gt;
&lt;p class="text-primary font-bold"&gt;Reusable class&lt;/p&gt;
&lt;h2 style="color: teal;"&gt;Inline style&lt;/h2&gt;
&lt;button data-user-id="42"&gt;Custom data attr&lt;/button&gt;
&lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr&gt;</code></pre>
      </div>
      <ul>
        <li><strong>id</strong> &mdash; Uniquely identifies one element. Used by CSS (#id) and JS (getElementById).</li>
        <li><strong>class</strong> &mdash; Groups elements. Used by CSS (.class) and JS (querySelector).</li>
        <li><strong>style</strong> &mdash; Inline CSS. Prefer external stylesheets for real projects.</li>
        <li><strong>data-*</strong> &mdash; Custom data for JavaScript without polluting the DOM.</li>
        <li><strong>hidden</strong> &mdash; Boolean attribute that hides an element from the page.</li>
      </ul>
    </div>

    <div class="lesson-section" id="sec-semantic">
      <div class="lesson-section-header"><div class="section-icon">&#127963;&#65039;</div><h2>Semantic HTML5</h2></div>
      <p>Semantic elements describe their meaning clearly, improving <strong>accessibility</strong>, <strong>SEO</strong>, and code readability.</p>
      <div class="code-block">
        <div class="code-block-header"><div class="code-block-dots"><span class="d1"></span><span class="d2"></span><span class="d3"></span></div><span class="code-block-lang">HTML</span><button class="code-block-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code>&lt;header&gt;
  &lt;nav&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;section id="about"&gt;
    &lt;h2&gt;About Us&lt;/h2&gt;
    &lt;p&gt;We build amazing things.&lt;/p&gt;
  &lt;/section&gt;
  &lt;article&gt;
    &lt;h2&gt;Blog Post&lt;/h2&gt;
    &lt;p&gt;Self-contained content...&lt;/p&gt;
  &lt;/article&gt;
  &lt;aside&gt;&lt;p&gt;Related sidebar links.&lt;/p&gt;&lt;/aside&gt;
&lt;/main&gt;

&lt;footer&gt;&lt;p&gt;&amp;copy; 2025 NextSem&lt;/p&gt;&lt;/footer&gt;</code></pre>
      </div>
      <ul>
        <li><strong>&lt;header&gt;</strong> &mdash; Site or section header (logo, nav).</li>
        <li><strong>&lt;nav&gt;</strong> &mdash; Navigation links.</li>
        <li><strong>&lt;main&gt;</strong> &mdash; Dominant content area (one per page).</li>
        <li><strong>&lt;section&gt;</strong> &mdash; Thematic grouping of content.</li>
        <li><strong>&lt;article&gt;</strong> &mdash; Self-contained content (blog post, news item).</li>
        <li><strong>&lt;aside&gt;</strong> &mdash; Content tangentially related to main content.</li>
        <li><strong>&lt;footer&gt;</strong> &mdash; Page or section footer.</li>
      </ul>
      <div class="info-box warn"><span class="info-box-icon">&#9888;</span><p><strong>Avoid div-soup!</strong> Use semantic elements first &mdash; they help search engines and screen readers understand your page.</p></div>
    </div>

    <div class="lesson-section" id="sec-links">
      <div class="lesson-section-header"><div class="section-icon">&#128279;</div><h2>Links &amp; Images</h2></div>
      <p>Links and images are core to the web. Both rely on key attributes to function correctly.</p>
      <div class="code-block">
        <div class="code-block-header"><div class="code-block-dots"><span class="d1"></span><span class="d2"></span><span class="d3"></span></div><span class="code-block-lang">HTML</span><button class="code-block-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code>&lt;!-- Basic link --&gt;
&lt;a href="https://nextsem.web.app"&gt;Visit NextSem&lt;/a&gt;

&lt;!-- New tab + security --&gt;
&lt;a href="https://example.com" target="_blank"
   rel="noopener noreferrer"&gt;External Link&lt;/a&gt;

&lt;!-- Jump to section --&gt;
&lt;a href="#about"&gt;Jump to About&lt;/a&gt;

&lt;!-- Image with alt text --&gt;
&lt;img src="photo.jpg" alt="A sunset over the ocean"
     width="600" height="400" loading="lazy" /&gt;

&lt;!-- Clickable image --&gt;
&lt;a href="about.html"&gt;
  &lt;img src="logo.png" alt="Company logo" /&gt;
&lt;/a&gt;</code></pre>
      </div>
      <div class="info-box tip"><span class="info-box-icon">&#9855;</span><p><strong>Always write alt text!</strong> The alt attribute is read by screen readers and shown when images fail to load. Use alt="" for purely decorative images.</p></div>
    </div>

    <div class="lesson-section" id="sec-lists">
      <div class="lesson-section-header"><div class="section-icon">&#128203;</div><h2>Lists</h2></div>
      <p>HTML provides three list types for organising content.</p>
      <div class="code-block">
        <div class="code-block-header"><div class="code-block-dots"><span class="d1"></span><span class="d2"></span><span class="d3"></span></div><span class="code-block-lang">HTML</span><button class="code-block-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code>&lt;!-- Unordered (bullets) --&gt;
&lt;ul&gt;
  &lt;li&gt;HTML&lt;/li&gt;
  &lt;li&gt;CSS&lt;/li&gt;
  &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Ordered (numbered) --&gt;
&lt;ol&gt;
  &lt;li&gt;Install Node.js&lt;/li&gt;
  &lt;li&gt;Create index.html&lt;/li&gt;
  &lt;li&gt;Deploy to the web&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- Description list --&gt;
&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;Structures web pages.&lt;/dd&gt;
  &lt;dt&gt;CSS&lt;/dt&gt;
  &lt;dd&gt;Styles web pages.&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
      </div>
    </div>

    <div class="lesson-section" id="sec-tables">
      <div class="lesson-section-header"><div class="section-icon">&#128202;</div><h2>Tables</h2></div>
      <p>Use tables for <strong>tabular data</strong> only &mdash; not for page layout (use CSS Grid or Flexbox for that).</p>
      <div class="code-block">
        <div class="code-block-header"><div class="code-block-dots"><span class="d1"></span><span class="d2"></span><span class="d3"></span></div><span class="code-block-lang">HTML</span><button class="code-block-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code>&lt;table&gt;
  &lt;caption&gt;Frontend Technologies&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th&gt;Language&lt;/th&gt;&lt;th&gt;Purpose&lt;/th&gt;&lt;th&gt;Level&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td&gt;HTML&lt;/td&gt;&lt;td&gt;Structure&lt;/td&gt;&lt;td&gt;Beginner&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;CSS&lt;/td&gt;&lt;td&gt;Styling&lt;/td&gt;&lt;td&gt;Beginner&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;JavaScript&lt;/td&gt;&lt;td&gt;Interactivity&lt;/td&gt;&lt;td&gt;Intermediate&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;&lt;td colspan="3"&gt;All three are essential for web dev&lt;/td&gt;&lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</code></pre>
      </div>
      <ul>
        <li><strong>&lt;thead&gt;/&lt;tbody&gt;/&lt;tfoot&gt;</strong> &mdash; Semantic row grouping.</li>
        <li><strong>&lt;th&gt;</strong> &mdash; Header cell (bold + centred; accessible).</li>
        <li><strong>&lt;td&gt;</strong> &mdash; Data cell.</li>
        <li><strong>colspan / rowspan</strong> &mdash; Merge cells across columns or rows.</li>
      </ul>
    </div>`;

const forms = `
    <div class="lesson-section" id="sec-forms">
      <div class="lesson-section-header"><div class="section-icon">&#128221;</div><h2>Forms &amp; Inputs</h2></div>
      <p>Forms let users send data. HTML provides rich input types with built-in browser validation for free.</p>
      <div class="code-block">
        <div class="code-block-header"><div class="code-block-dots"><span class="d1"></span><span class="d2"></span><span class="d3"></span></div><span class="code-block-lang">HTML</span><button class="code-block-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code>&lt;form action="/submit" method="POST"&gt;
  &lt;label for="name"&gt;Full Name&lt;/label&gt;
  &lt;input type="text" id="name" name="name"
         placeholder="Jane Smith" required /&gt;

  &lt;label for="email"&gt;Email&lt;/label&gt;
  &lt;input type="email" id="email" required /&gt;

  &lt;label for="pwd"&gt;Password&lt;/label&gt;
  &lt;input type="password" id="pwd" minlength="8" required /&gt;

  &lt;select name="track"&gt;
    &lt;option value=""&gt;Choose a track...&lt;/option&gt;
    &lt;option value="frontend"&gt;Frontend&lt;/option&gt;
    &lt;option value="backend"&gt;Backend&lt;/option&gt;
  &lt;/select&gt;

  &lt;textarea name="message" rows="4"&gt;&lt;/textarea&gt;

  &lt;input type="checkbox" id="agree" required /&gt;
  &lt;label for="agree"&gt;I agree to the terms&lt;/label&gt;

  &lt;button type="submit"&gt;Send&lt;/button&gt;
&lt;/form&gt;</code></pre>
      </div>
      <div class="tryit-wrap">
        <div class="tryit-header"><span>&#9889;</span><span class="tryit-label">Try it &mdash; edit HTML and see live preview</span></div>
        <div class="tryit-body">
          <div class="tryit-editor">
            <textarea id="tryit-code" spellcheck="false">&lt;style&gt;
body{font-family:sans-serif;padding:1rem;background:#f9f9f9}
label{display:block;margin-top:.75rem;font-weight:600;font-size:.9rem}
input,select,textarea{width:100%;padding:.5rem;margin-top:.25rem;border:1px solid #ccc;border-radius:6px;font-size:.9rem;box-sizing:border-box}
button{margin-top:1rem;padding:.6rem 1.5rem;background:#28c840;color:white;border:none;border-radius:6px;cursor:pointer;font-weight:700}
&lt;/style&gt;
&lt;h2&gt;Sign Up Form&lt;/h2&gt;
&lt;form onsubmit="alert('Submitted!');return false;"&gt;
  &lt;label for="n"&gt;Name&lt;/label&gt;
  &lt;input type="text" id="n" placeholder="Your name" required /&gt;
  &lt;label for="e"&gt;Email&lt;/label&gt;
  &lt;input type="email" id="e" placeholder="you@example.com" /&gt;
  &lt;label for="t"&gt;Track&lt;/label&gt;
  &lt;select id="t"&gt;
    &lt;option&gt;Frontend&lt;/option&gt;
    &lt;option&gt;Backend&lt;/option&gt;
    &lt;option&gt;Full Stack&lt;/option&gt;
  &lt;/select&gt;
  &lt;button type="submit"&gt;Sign Up&lt;/button&gt;
&lt;/form&gt;</textarea>
          </div>
          <div class="tryit-preview">
            <div class="tryit-preview-bar"><span>Preview</span><button class="tryit-run-btn" onclick="runTryit()">Run</button></div>
            <iframe id="tryit-frame" title="HTML preview" sandbox="allow-scripts allow-modals"></iframe>
          </div>
        </div>
      </div>
    </div>`;

const quiz = `
    <div class="quiz-mini" id="sec-quiz">
      <h2>&#129504; Knowledge Check</h2>
      <p>Click an answer to check if you are right!</p>
      <div class="quiz-q" id="qq1">
        <div class="quiz-q-text">1. What does the <code>alt</code> attribute on an &lt;img&gt; element do?</div>
        <div class="quiz-options">
          <button class="quiz-opt" data-correct="false" onclick="answerQuiz(this,'qq1',false)">Sets the image size</button>
          <button class="quiz-opt" data-correct="true" onclick="answerQuiz(this,'qq1',true)">Provides alternative text for screen readers and broken images</button>
          <button class="quiz-opt" data-correct="false" onclick="answerQuiz(this,'qq1',false)">Links the image to another page</button>
          <button class="quiz-opt" data-correct="false" onclick="answerQuiz(this,'qq1',false)">Specifies the image file format</button>
        </div>
        <div class="quiz-feedback-msg" id="fb-qq1"></div>
      </div>
      <div class="quiz-q" id="qq2">
        <div class="quiz-q-text">2. Which element should you use for the main navigation of a website?</div>
        <div class="quiz-options">
          <button class="quiz-opt" data-correct="false" onclick="answerQuiz(this,'qq2',false)">&lt;div class="nav"&gt;</button>
          <button class="quiz-opt" data-correct="false" onclick="answerQuiz(this,'qq2',false)">&lt;menu&gt;</button>
          <button class="quiz-opt" data-correct="true" onclick="answerQuiz(this,'qq2',true)">&lt;nav&gt;</button>
          <button class="quiz-opt" data-correct="false" onclick="answerQuiz(this,'qq2',false)">&lt;header&gt;</button>
        </div>
        <div class="quiz-feedback-msg" id="fb-qq2"></div>
      </div>
      <div class="quiz-q" id="qq3">
        <div class="quiz-q-text">3. How do you create a numbered (ordered) list in HTML?</div>
        <div class="quiz-options">
          <button class="quiz-opt" data-correct="false" onclick="answerQuiz(this,'qq3',false)">&lt;ul&gt; with &lt;li&gt; items</button>
          <button class="quiz-opt" data-correct="true" onclick="answerQuiz(this,'qq3',true)">&lt;ol&gt; with &lt;li&gt; items</button>
          <button class="quiz-opt" data-correct="false" onclick="answerQuiz(this,'qq3',false)">&lt;list type="ordered"&gt;</button>
          <button class="quiz-opt" data-correct="false" onclick="answerQuiz(this,'qq3',false)">&lt;dl&gt; with &lt;dt&gt; items</button>
        </div>
        <div class="quiz-feedback-msg" id="fb-qq3"></div>
      </div>
      <div class="quiz-q" id="qq4">
        <div class="quiz-q-text">4. Which HTML5 element represents the dominant content area (one per page)?</div>
        <div class="quiz-options">
          <button class="quiz-opt" data-correct="false" onclick="answerQuiz(this,'qq4',false)">&lt;section&gt;</button>
          <button class="quiz-opt" data-correct="false" onclick="answerQuiz(this,'qq4',false)">&lt;body&gt;</button>
          <button class="quiz-opt" data-correct="true" onclick="answerQuiz(this,'qq4',true)">&lt;main&gt;</button>
          <button class="quiz-opt" data-correct="false" onclick="answerQuiz(this,'qq4',false)">&lt;article&gt;</button>
        </div>
        <div class="quiz-feedback-msg" id="fb-qq4"></div>
      </div>
      <div class="quiz-q" id="qq5">
        <div class="quiz-q-text">5. What attribute connects a &lt;label&gt; to its &lt;input&gt;?</div>
        <div class="quiz-options">
          <button class="quiz-opt" data-correct="false" onclick="answerQuiz(this,'qq5',false)">name</button>
          <button class="quiz-opt" data-correct="true" onclick="answerQuiz(this,'qq5',true)">for (matching the input's id)</button>
          <button class="quiz-opt" data-correct="false" onclick="answerQuiz(this,'qq5',false)">target</button>
          <button class="quiz-opt" data-correct="false" onclick="answerQuiz(this,'qq5',false)">link</button>
        </div>
        <div class="quiz-feedback-msg" id="fb-qq5"></div>
      </div>
    </div>
    <div class="lesson-nav">
      <a href="index.html#curriculum" class="lesson-nav-btn prev">
        <span class="lesson-nav-dir">&#8592; Previous</span>
        <span class="lesson-nav-title">Back to Curriculum</span>
      </a>
      <a href="index.html#curriculum" class="lesson-nav-btn next">
        <span class="lesson-nav-dir">Next &#8594;</span>
        <span class="lesson-nav-title">F-02: CSS Basics &amp; Selectors</span>
      </a>
    </div>
  </main>`;

const footer = `
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <svg class="logo-icon" viewBox="0 0 84 64" fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"><path d="M 16 52 L 16 26 C 16 17.5 22.5 11 30.5 11 C 38.5 11 45 17.5 45 26 L 45 42 C 45 48 49 53 56 53 C 63 53 67 48 67 42 C 67 36 63 32 56 32 C 49 32 45 28 45 22 C 45 16 49 11 56 11 C 63 11 67 16 67 22" /></svg>
        <span class="logo-text">next sem</span>
      </div>
      <div class="footer-links">
        <a href="blog.html" class="footer-link">Blog</a>
        <a href="index.html#quiz" class="footer-link">Quiz</a>
        <a href="about.html" class="footer-link">About</a>
        <a href="privacy.html" class="footer-link">Privacy Policy</a>
        <a href="contact.html" class="footer-link">Contact</a>
      </div>
      <p class="footer-text">Built with love to make learning accessible for everyone.</p>
      <p class="footer-copy">&copy; 2026 NextSem &middot; Free &amp; Open Source</p>
    </div>
  </footer>`;

const scripts = `
  <script>
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 30); });
    document.getElementById('hamburger').addEventListener('click', () => {
      document.getElementById('nav-links').classList.toggle('active');
      document.getElementById('hamburger').classList.toggle('active');
    });
    function copyCode(btn) {
      const text = btn.closest('.code-block').querySelector('pre').innerText;
      navigator.clipboard.writeText(text).then(() => { btn.textContent='Copied!'; setTimeout(()=>btn.textContent='Copy',1800); });
    }
    function runTryit() {
      const code = document.getElementById('tryit-code').value;
      const frame = document.getElementById('tryit-frame');
      const doc = frame.contentDocument || frame.contentWindow.document;
      doc.open(); doc.write(code); doc.close();
    }
    window.addEventListener('load', runTryit);
    let deb;
    document.getElementById('tryit-code').addEventListener('input', () => { clearTimeout(deb); deb = setTimeout(runTryit, 600); });
    const answered = {};
    function answerQuiz(btn, qid, correct) {
      if (answered[qid]) return;
      answered[qid] = true;
      const container = document.getElementById(qid);
      const fb = document.getElementById('fb-' + qid);
      container.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
      if (correct) {
        btn.classList.add('correct');
        fb.textContent = 'Correct!'; fb.className = 'quiz-feedback-msg ok';
      } else {
        btn.classList.add('wrong');
        fb.textContent = 'Not quite — review the section above.'; fb.className = 'quiz-feedback-msg err';
        container.querySelectorAll('.quiz-opt[data-correct="true"]').forEach(b => b.classList.add('correct'));
      }
      const pct = Math.round((Object.keys(answered).length / 5) * 100);
      document.getElementById('lesson-progress-fill').style.width = pct + '%';
      document.getElementById('lesson-progress-label').textContent =
        Object.keys(answered).length === 5 ? 'Lesson complete! Great work!' :
        pct + '% complete — ' + (5 - Object.keys(answered).length) + ' question(s) remaining';
    }
    window.addEventListener('scroll', () => {
      if (Object.keys(answered).length === 5) return;
      const el = document.documentElement;
      const rp = Math.round((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 60);
      const qp = Math.round((Object.keys(answered).length / 5) * 40);
      const t = Math.min(rp + qp, 99);
      const cur = parseInt(document.getElementById('lesson-progress-fill').style.width || '0');
      if (t > cur) {
        document.getElementById('lesson-progress-fill').style.width = t + '%';
        document.getElementById('lesson-progress-label').textContent = t + '% complete — keep scrolling!';
      }
    });
  </script>
</body>
</html>`;

const html = head + nav + hero + sections + forms + quiz + footer + scripts;
fs.writeFileSync(out, html, 'utf8');
console.log('Written', fs.statSync(out).size, 'bytes to', out);