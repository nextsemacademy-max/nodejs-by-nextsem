// ===========================
// NextSem – playground.js
// ===========================

(function() {
  /* ─── Examples & Challenges Datasets ─── */
  const playgroundExamples = [
    {
      id: 'example-1',
      name: 'Hello World',
      tab: 'Hello World',
      theory: 'Hello World is the traditional starting point. It prints a simple message to the console using console.log().',
      code: `// Hello World\nconsole.log("Hello, Node.js! 🚀");\nconsole.log("Current time:", new Date().toLocaleTimeString());\nconsole.log("Platform info:", process.platform);`
    },
    {
      id: 'example-2',
      name: 'Variables & Types',
      tab: 'Variables',
      theory: 'JavaScript variables can be declared using const (immutable) or let (mutable). Types include strings, numbers, booleans, arrays, and objects.',
      code: `// JavaScript Data Types\nconst name = "NextSem";\nlet version = 20;\nconst isAwesome = true;\nconst tags = ["node", "js", "backend"];\nconst meta = { author: "You", year: 2026 };\n\nconsole.log("Name:", name);\nconsole.log("Version:", version);\nconsole.log("Is awesome:", isAwesome);\nconsole.log("Tags:", tags.join(", "));\nconsole.log("Meta:", JSON.stringify(meta));`
    },
    {
      id: 'example-3',
      name: 'Arrow Functions',
      tab: 'Arrow Functions',
      theory: 'Arrow functions offer a short, clean syntax for writing functions. They inherit the surrounding lexical scope (no local `this`).',
      code: `// Arrow Functions\nconst greet = (name) => \`Hello, \${name}! 👋\`;\nconst square = x => x * x;\nconst add = (a, b) => a + b;\n\nconsole.log(greet("Developer"));\nconsole.log("5² =", square(5));\nconsole.log("7 + 8 =", add(7, 8));\n\n// Higher-order functions\nconst nums = [1, 2, 3, 4, 5];\nconst doubled = nums.map(n => n * 2);\nconst evens = nums.filter(n => n % 2 === 0);\nconst sum = nums.reduce((acc, n) => acc + n, 0);\n\nconsole.log("Doubled:", doubled);\nconsole.log("Evens:", evens);\nconsole.log("Sum:", sum);`
    },
    {
      id: 'example-4',
      name: 'Promises',
      tab: 'Promises',
      theory: 'Promises represent the eventual completion (or failure) of an asynchronous operation. Connect actions using .then() and .catch().',
      code: `// Working with Promises\nfunction delay(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nfunction fetchData(id) {\n  return new Promise((resolve, reject) => {\n    if (id > 0) {\n      resolve({ id, name: "User " + id, active: true });\n    } else {\n      reject(new Error("Invalid ID: " + id));\n    }\n  });\n}\n\n// Promise chain\nfetchData(42)\n  .then(user => {\n    console.log("✅ Fetched user:", JSON.stringify(user));\n    return fetchData(99);\n  })\n  .then(user2 => console.log("✅ User 2:", JSON.stringify(user2)))\n  .catch(err => console.error("❌ Error:", err.message));`
    },
    {
      id: 'example-5',
      name: 'Async/Await',
      tab: 'Async/Await',
      theory: 'Async/Await allows you to write promise-based asynchronous code that looks and behaves like synchronous code, using try/catch for error handling.',
      code: `// Async/Await Pattern\nasync function getWeather(city) {\n  // Simulate API call\n  await new Promise(r => setTimeout(r, 300));\n  return {\n    city,\n    temp: Math.floor(Math.random() * 30 + 10),\n    condition: ["Sunny", "Cloudy", "Rainy"][Math.floor(Math.random() * 3)]\n  };\n}\n\nasync function main() {\n  console.log("🌍 Fetching weather...");\n  try {\n    const cities = ["London", "Tokyo", "New York"];\n    const results = await Promise.all(cities.map(getWeather));\n    results.forEach(w => {\n      console.log(\`\${w.city}: \${w.temp}°C, \${w.condition}\`);\n    });\n  } catch (err) {\n    console.error("Failed:", err.message);\n  }\n}\nmain();`
    },
    {
      id: 'example-6',
      name: 'Array Methods',
      tab: 'Arrays',
      theory: 'Use functional array utilities like .filter(), .map(), and .reduce() to process lists of data cleanly without loops.',
      code: `// Powerful Array Methods\nconst products = [\n  { name: "Laptop", price: 999, category: "Electronics" },\n  { name: "Book", price: 29, category: "Education" },\n  { name: "Phone", price: 799, category: "Electronics" },\n  { name: "Desk", price: 349, category: "Furniture" },\n  { name: "Course", price: 0, category: "Education" },\n];\n\n// Filter electronics\nconst electronics = products.filter(p => p.category === "Electronics");\nconsole.log("Electronics:", electronics.map(p => p.name).join(", "));\n\n// Get names of items > $100\nconst expensive = products\n  .filter(p => p.price > 100)\n  .map(p => p.name);\nconsole.log("Expensive items:", expensive);\n\n// Total cost\nconst total = products.reduce((sum, p) => sum + p.price, 0);\nconsole.log("Total catalog value: $" + total);\n\n// Sort by price\nconst sorted = [...products].sort((a, b) => a.price - b.price);\nconsole.log("Cheapest first:", sorted.map(p => \`\${p.name}($\${p.price})\`).join(", "));`
    },
    {
      id: 'example-7',
      name: 'Classes & OOP',
      tab: 'Classes',
      theory: 'JavaScript supports object-oriented code structures using class inheritance and constructor methods.',
      code: `// Object-Oriented Programming\nclass Animal {\n  constructor(name, sound) {\n    this.name = name; \n    this.sound = sound;\n  }\n  speak() { return \`\${this.name} says \${this.sound}!\`; }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name, "Woof");\n    this.breed = breed;\n  }\n  fetch(item) { return \`\${this.name} fetches the \${item}! 🎾\`; }\n}\n\nconst cat = new Animal("Luna", "Meow");\nconst dog = new Dog("Buddy", "Golden Retriever");\nconsole.log(cat.speak());\nconsole.log(dog.speak());\nconsole.log(dog.fetch("ball"));`
    },
    {
      id: 'example-8',
      name: 'Error Handling',
      tab: 'Errors',
      theory: 'Protect execution flow using try/catch blocks. Spawn custom exceptions using standard or inherited Error classes.',
      code: `// Robust Error Handling\nclass AppError extends Error {\n  constructor(message, statusCode = 500) {\n    super(message);\n    this.name = "AppError";\n    this.statusCode = statusCode;\n  }\n}\n\nfunction divide(a, b) {\n  if (b === 0) throw new AppError("Division by zero!", 400);\n  return a / b;\n}\n\ntry {\n  console.log("10 / 2 =", divide(10, 2));\n  console.log("5 / 0 =", divide(5, 0));\n} catch (err) {\n  if (err instanceof AppError) {\n    console.error(\`[AppError \${err.statusCode}]: \${err.message}\`);\n  } else {\n    console.error("Unknown error:", err.message);\n  }\n} finally {\n  console.log("✅ Execution complete");\n}`
    },
    {
      id: 'example-9',
      name: 'JSON Parsing',
      tab: 'JSON',
      theory: 'Serialize objects into text using JSON.stringify(), and deserialize JSON strings into JavaScript objects using JSON.parse().',
      code: `// Parsing and Formatting JSON\nconst jsonString = '{"course": "NextSem", "durationWeeks": 6, "completed": false}';\ntry {\n  const parsed = JSON.parse(jsonString);\n  console.log("Course name:", parsed.course);\n  console.log("Duration:", parsed.durationWeeks, "weeks");\n  parsed.completed = true;\n  const prettyJSON = JSON.stringify(parsed, null, 2);\n  console.log("Formatted JSON:\\n" + prettyJSON);\n} catch (err) {\n  console.error("Failed to parse JSON:", err.message);\n}`
    },
    {
      id: 'example-10',
      name: 'Modern ES6+',
      tab: 'ES6+',
      theory: 'Leverage modern Javascript variables destructuring, arrays/objects spread operators, and rest parameters.',
      code: `// Destructuring, Rest & Spread operators\nconst developer = {\n  name: "Neo",\n  skills: ["JavaScript", "Node.js", "Express"],\n  experience: { years: 5, role: "Backend Developer" }\n};\n\nconst { name, skills: [primarySkill], experience: { role } } = developer;\nconsole.log(\`Developer \${name} is a \${role} specializing in \${primarySkill}.\`);\n\nconst newSkills = [...developer.skills, "MongoDB", "Docker"];\nconsole.log("Updated skills list:", newSkills);`
    }
  ];

  const playgroundChallenges = [
    {
      id: 'challenge-1',
      name: 'Create HTTP Server',
      tab: 'Challenge 1',
      theory: "Create an HTTP server using the built-in 'http' module. The server must respond with the text 'Hello next sem!' (exactly!) to all requests. The server must listen on port 3000.\n\nRequirements:\n- Use http.createServer()\n- Use server.listen(3000)",
      startingCode: `// Challenge 1: Create an HTTP Server\nconst http = require('http');\n\n// Write your code here\n`,
      verify: (code, logs) => {
        if (!code.includes('http.createServer')) {
          return { success: false, message: "Your code must use http.createServer() to create a server." };
        }
        if (!code.includes('3000')) {
          return { success: false, message: "Your server must listen on port 3000." };
        }
        let serverCallback = null;
        let serverPort = null;
        const mockHttp = {
          createServer: (cb) => {
            serverCallback = cb;
            return { listen: (port, cb2) => { serverPort = port; if (cb2) cb2(); } };
          }
        };
        try {
          const fn = new Function('console', 'setTimeout', 'Promise', 'JSON', 'Math', 'Date', 'Error', 'Array', 'require', code);
          fn({ log: () => {}, error: () => {}, warn: () => {} }, () => {}, Promise, JSON, Math, Date, Error, Array, (m) => m === 'http' ? mockHttp : null);
        } catch (err) {
          return { success: false, message: "Code execution error: " + err.message };
        }
        if (!serverCallback) return { success: false, message: "http.createServer was not successfully called with a handler." };
        if (Number(serverPort) !== 3000) return { success: false, message: "The server did not call .listen() with port 3000." };
        let responseData = "";
        serverCallback({}, { writeHead: () => {}, end: (d) => { responseData = d; } });
        if (String(responseData).trim() !== "Hello next sem!") {
          return { success: false, message: `Expected response 'Hello next sem!', but got: '${responseData}'` };
        }
        return { success: true, message: "Congratulations! Your HTTP server is correctly configured!" };
      }
    },
    {
      id: 'challenge-2',
      name: 'EventEmitter Greet',
      tab: 'Challenge 2',
      theory: "Create an EventEmitter instance. Register a listener for the event 'greet', and emit the event 'greet' with the string argument 'next sem'. The listener function must log 'Hello, next sem!' to the console.\n\nRequirements:\n- Require 'events'\n- Emit 'greet' with 'next sem'\n- Log 'Hello, next sem!'",
      startingCode: `// Challenge 2: EventEmitter Greet\nconst EventEmitter = require('events');\n\n// Write your code here\n`,
      verify: (code, logs) => {
        if (!code.includes('events') && !code.includes('EventEmitter')) {
          return { success: false, message: "Your code must use the events module and EventEmitter class." };
        }
        if (!code.includes('greet')) {
          return { success: false, message: "Your code must register/emit the 'greet' event." };
        }
        const loggedGreet = logs.some(l => l.text === 'Hello, next sem!' && l.type === 'log');
        if (!loggedGreet) {
          return { success: false, message: "The console log 'Hello, next sem!' was not found in the output. Make sure you run your code before verifying." };
        }
        return { success: true, message: "Congratulations! The EventEmitter communication works perfectly!" };
      }
    },
    {
      id: 'challenge-3',
      name: 'Safe JSON Parsing',
      tab: 'Challenge 3',
      theory: "Safely parse the JSON string '{\"course\":\"next sem\",\"active\":false}'. Modify the parsed object's 'active' property to true, and output the pretty-printed JSON string back to the console using JSON.stringify.\n\nRequirements:\n- Use JSON.parse()\n- Modify active to true\n- Log pretty JSON containing active: true",
      startingCode: `// Challenge 3: Safe JSON Parsing\nconst jsonString = '{"course":"next sem","active":false}';\n\n// Write your code here\n`,
      verify: (code, logs) => {
        if (!code.includes('JSON.parse')) {
          return { success: false, message: "Your code must use JSON.parse()." };
        }
        if (!code.includes('JSON.stringify')) {
          return { success: false, message: "Your code must use JSON.stringify()." };
        }
        const logTexts = logs.map(l => l.text);
        const containsMatch = logTexts.some(text => {
          try {
            const obj = JSON.parse(text);
            return obj.course === 'next sem' && obj.active === true;
          } catch(e) { return false; }
        });
        if (!containsMatch) {
          return { success: false, message: "Could not find logged JSON output with course='next sem' and active=true. Make sure to run your code first." };
        }
        return { success: true, message: "Congratulations! JSON parsing and modification completed successfully!" };
      }
    }
  ];

  // Merge items into a single flat array for vertical swipe transitions
  const items = [
    ...playgroundChallenges.map((ch, idx) => ({ ...ch, type: 'challenge', index: idx })),
    ...playgroundExamples.map((ex, idx) => ({ ...ex, type: 'example', index: playgroundChallenges.length + idx }))
  ];

  /* ─── DOM Elements ─── */
  const viewList = document.getElementById('view-list');
  const viewContent = document.getElementById('view-content');
  const clc = document.getElementById('clc');
  const elc = document.getElementById('elc');
  const pdr = document.getElementById('pdr');
  const pinfoSec = document.getElementById('pinfo-sec');
  const codeEditor = document.getElementById('code-editor');
  const outputContent = document.getElementById('output-content');
  const navTitle = document.getElementById('nav-title');
  const navBackBtn = document.getElementById('nav-back-btn');
  const runBtn = document.getElementById('run-btn');
  const verifyBtn = document.getElementById('verify-btn');
  const clearCodeBtn = document.getElementById('clear-code-btn');
  const clearOutBtn = document.getElementById('clear-out-btn');
  
  const prevBtn = document.getElementById('prev-btn');
  const homeBtn = document.getElementById('home-btn');
  const nextBtn = document.getElementById('next-btn');
  const suBtn = document.getElementById('su');
  const sdBtn = document.getElementById('sd');

  // Mobile layout tabs
  const btnShowCode = document.getElementById('btn-show-code');
  const btnShowConsole = document.getElementById('btn-show-console');

  let activeIndex = 0;
  let challengeStatus = JSON.parse(localStorage.getItem('challengeStatus') || '{}');

  /* ─── List Rendering ─── */
  function renderLists() {
    if (clc) {
      clc.innerHTML = '';
      items.filter(item => item.type === 'challenge').forEach(ch => {
        const isSolved = challengeStatus[ch.id] === 'solved';
        const div = document.createElement('div');
        div.className = 'pli' + (ch.index === activeIndex ? ' cur' : '');
        div.innerHTML = `
          <div class="plinfo">
            <div class="pltitle">${ch.name}</div>
          </div>
          <span class="plstatus ${isSolved ? 'solved' : 'unsolved'}">${isSolved ? 'solved' : 'unsolved'}</span>
        `;
        div.addEventListener('click', () => openItem(ch.index));
        clc.appendChild(div);
      });
    }

    if (elc) {
      elc.innerHTML = '';
      items.filter(item => item.type === 'example').forEach(ex => {
        const div = document.createElement('div');
        div.className = 'pli' + (ex.index === activeIndex ? ' cur' : '');
        div.innerHTML = `
          <div class="plinfo">
            <div class="pltitle">${ex.name}</div>
          </div>
          <span class="plstatus solved">example</span>
        `;
        div.addEventListener('click', () => openItem(ex.index));
        elc.appendChild(div);
      });
    }
  }

  /* ─── Dots Rendering ─── */
  function renderDots(index) {
    if (!pdr) return;
    pdr.innerHTML = '';
    items.forEach((item, i) => {
      const d = document.createElement('div');
      const isSolved = item.type === 'challenge' && challengeStatus[item.id] === 'solved';
      d.className = 'pd' + (i === index ? ' cur' : isSolved ? ' done' : '');
      pdr.appendChild(d);
    });
  }

  /* ─── Open Playground Item ─── */
  let _firstOpen = true;
  function openItem(index) {
    activeIndex = index;
    const item = items[index];
    if (!item) return;

    // Toggle content card
    if (pinfoSec) {
      pinfoSec.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.theory}</p>
      `;
    }

    // Set code
    if (codeEditor) {
      if (item.type === 'challenge') {
        // Load starting code for challenge
        codeEditor.value = item.startingCode;
      } else {
        // Load example code
        codeEditor.value = item.code;
      }
    }

    // Toggle Verify Button
    if (verifyBtn) {
      verifyBtn.style.display = item.type === 'challenge' ? 'inline-flex' : 'none';
    }

    // Clear Console
    if (outputContent) {
      outputContent.innerHTML = '<span class="output-placeholder">Run code to see output here...</span>';
    }

    // Toggle button disabled state
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === items.length - 1;
    if (suBtn) suBtn.disabled = index === 0;
    if (sdBtn) sdBtn.disabled = index === items.length - 1;

    // Mobile tabs reset
    document.body.classList.remove('show-console-only');
    if (btnShowCode) btnShowCode.classList.add('active');
    if (btnShowConsole) btnShowConsole.classList.remove('active');

    // Title & Dots
    if (navTitle) navTitle.textContent = item.tab;
    renderDots(index);

    // Swap hash URL
    window.location.hash = item.id;

    // Show content view
    document.body.classList.add('pv');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Show hint toast
    if (_firstOpen) {
      _firstOpen = false;
      setTimeout(showSwipeHintV, 600);
    }
  }

  function showList() {
    document.body.classList.remove('pv');
    if (navTitle) navTitle.textContent = 'Code Playground';
    renderLists();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ─── Navigation wiring ─── */
  if (prevBtn) prevBtn.addEventListener('click', () => { if (activeIndex > 0) openItem(activeIndex - 1); });
  if (nextBtn) nextBtn.addEventListener('click', () => { if (activeIndex < items.length - 1) openItem(activeIndex + 1); });
  if (suBtn) suBtn.addEventListener('click', () => { if (activeIndex > 0) openItem(activeIndex - 1); });
  if (sdBtn) sdBtn.addEventListener('click', () => { if (activeIndex < items.length - 1) openItem(activeIndex + 1); });
  if (homeBtn) homeBtn.addEventListener('click', showList);

  if (navBackBtn) {
    navBackBtn.addEventListener('click', () => {
      if (document.body.classList.contains('pv')) {
        showList();
      } else {
        window.location.href = 'index.html';
      }
    });
  }

  /* ─── Code Simulator Runner ─── */
  const fakeRequire = (mod) => {
    if (mod === 'events') {
      const EventEmitter = function() { this.listeners = {}; };
      EventEmitter.prototype.on = function(event, cb) {
        if (!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event].push(cb);
      };
      EventEmitter.prototype.emit = function(event, ...args) {
        if (this.listeners[event]) this.listeners[event].forEach(cb => cb(...args));
      };
      return EventEmitter;
    }
    if (mod === 'http') {
      return {
        createServer: (cb) => {
          return { listen: (port, cb2) => { if (cb2) cb2(); } };
        }
      };
    }
    if (mod === 'fs') {
      return {
        readFile: (path, encoding, cb) => {
          const callback = typeof encoding === 'function' ? encoding : cb;
          setTimeout(() => callback(null, 'Recipe: 1. Require fs, 2. Call readFile'), 100);
        },
        readFileSync: (path) => 'Recipe: 1. Require fs, 2. Call readFile',
        writeFile: (path, data, cb) => {
          setTimeout(() => cb(null), 100);
        },
        writeFileSync: (path, data) => {}
      };
    }
    if (mod === 'os') {
      return {
        platform: () => 'win32',
        arch: () => 'x64',
        cpus: () => [ { model: 'Intel Core i9', speed: 3600 } ],
        totalmem: () => 17179869184,
        freemem: () => 8589934592
      };
    }
    if (mod === 'path') {
      return {
        join: (...args) => args.join('/'),
        resolve: (...args) => '/' + args.join('/'),
        basename: (p) => p.split('/').pop(),
        extname: (p) => '.' + p.split('.').pop()
      };
    }
    throw new Error(`Module "${mod}" is not supported in this browser simulator.`);
  };

  function simulateRun(code) {
    const logs = [];
    const fakeConsole = {
      log: (...args) => logs.push({ type: 'log', text: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ') }),
      error: (...args) => logs.push({ type: 'error', text: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ') }),
      warn: (...args) => logs.push({ type: 'warn', text: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ') }),
    };

    try {
      const patchedCode = code.replace(/\bprocess\.platform\b/g, '"win32"').replace(/\bprocess\.version\b/g, '"v20.11.0"');
      const fn = new Function('console', 'setTimeout', 'Promise', 'JSON', 'Math', 'Date', 'Error', 'Array', 'require', patchedCode);
      const deferreds = [];
      const fakeST = (cb, ms) => { deferreds.push({ cb, ms }); return 0; };
      
      fn(fakeConsole, fakeST, Promise, JSON, Math, Date, Error, Array, fakeRequire);
      deferreds.sort((a, b) => a.ms - b.ms).forEach(d => { try { d.cb(); } catch(e) {} });
    } catch (err) {
      logs.push({ type: 'error', text: err.message });
    }
    return logs;
  }

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ─── Buttons Trigger Actions ─── */
  if (runBtn) {
    runBtn.addEventListener('click', () => {
      if (!codeEditor || !outputContent) return;
      const code = codeEditor.value.trim();
      if (!code) return;

      outputContent.innerHTML = '<span style="color:#8b949e">⏳ Running…</span>';
      // Automatically switch to console view on mobile
      if (window.innerWidth <= 480) {
        document.body.classList.add('show-console-only');
        if (btnShowConsole) btnShowConsole.classList.add('active');
        if (btnShowCode) btnShowCode.classList.remove('active');
      }

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
      const item = items[activeIndex];
      if (!item || item.type !== 'challenge' || !codeEditor || !outputContent) return;
      const code = codeEditor.value.trim();

      if (window.innerWidth <= 480) {
        document.body.classList.add('show-console-only');
        if (btnShowConsole) btnShowConsole.classList.add('active');
        if (btnShowCode) btnShowCode.classList.remove('active');
      }

      const logs = simulateRun(code);
      const result = item.verify(code, logs);

      if (result.success) {
        outputContent.innerHTML = `
          <div class="output-log" style="color:var(--node-green-light);font-weight:bold;background:rgba(104,160,99,0.05);padding:0.75rem;border-radius:4px;border:1px solid rgba(104,160,99,0.2);">
            🎉 Challenge Solved!<br>
            <span style="font-weight:500;font-size:0.82rem;display:block;margin-top:4px;color:var(--text-secondary);">${result.message}</span>
          </div>
        `;
        challengeStatus[item.id] = 'solved';
        localStorage.setItem('challengeStatus', JSON.stringify(challengeStatus));
        renderLists();
        renderDots(activeIndex);
        if (typeof triggerConfetti === 'function') {
          triggerConfetti();
        }
      } else {
        outputContent.innerHTML = `
          <div class="output-error" style="color:#ff7b72;font-weight:bold;background:rgba(255,123,114,0.05);padding:0.75rem;border-radius:4px;border:1px solid rgba(255,123,114,0.2);">
            ✗ Verification Failed<br>
            <span style="font-weight:500;font-size:0.82rem;display:block;margin-top:4px;color:var(--text-secondary);">${result.message}</span>
          </div>
        `;
      }
    });
  }

  if (clearCodeBtn) {
    clearCodeBtn.addEventListener('click', () => {
      if (codeEditor) codeEditor.value = '';
    });
  }

  if (clearOutBtn) {
    clearOutBtn.addEventListener('click', () => {
      if (outputContent) outputContent.innerHTML = '<span class="output-placeholder">Run code to see output here...</span>';
    });
  }

  // Tab key indents in code textarea
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

  // Mobile Editor/Console View toggling
  if (btnShowCode) {
    btnShowCode.addEventListener('click', () => {
      document.body.classList.remove('show-console-only');
      btnShowCode.classList.add('active');
      if (btnShowConsole) btnShowConsole.classList.remove('active');
    });
  }
  if (btnShowConsole) {
    btnShowConsole.addEventListener('click', () => {
      document.body.classList.add('show-console-only');
      btnShowConsole.classList.add('active');
      if (btnShowCode) btnShowCode.classList.remove('active');
    });
  }

  /* ─── Touch Swipe Gesture (Vertical Navigation) ─── */
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;
  
  const SWIPE_MIN_Y = 50;  // minimum vertical distance
  const SWIPE_MAX_X = 70;  // maximum horizontal drift to avoid false triggers

  document.addEventListener('touchstart', (e) => {
    // Disable swipes if touch starts inside code-editor textarea
    if (e.target.closest('#code-editor')) return;
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    if (e.target.closest('#code-editor')) return;
    if (!document.body.classList.contains('pv')) return; // content view only

    touchEndX = e.changedTouches[0].clientX;
    touchEndY = e.changedTouches[0].clientY;

    const dy = touchEndY - touchStartY; // positive means down, negative means up
    const dx = Math.abs(touchEndX - touchStartX);

    // Ignore if mostly horizontal swipe
    if (dx > SWIPE_MAX_X) return;

    if (dy < -SWIPE_MIN_Y) {
      // Swipe UP -> Next Challenge/Example
      if (activeIndex < items.length - 1) {
        animateArrowTap(sdBtn);
        openItem(activeIndex + 1);
      }
    } else if (dy > SWIPE_MIN_Y) {
      // Swipe DOWN -> Previous Challenge/Example
      if (activeIndex > 0) {
        animateArrowTap(suBtn);
        openItem(activeIndex - 1);
      }
    }
  }, { passive: true });

  function animateArrowTap(btn) {
    if (!btn) return;
    btn.style.background = 'var(--node-green)';
    btn.style.transform = btn.id === 'su' ? 'translateX(-50%) translateY(-6px) scale(1.18)' : 'translateX(-50%) translateY(6px) scale(1.18)';
    setTimeout(() => {
      btn.style.background = '';
      btn.style.transform = 'translateX(-50%)';
    }, 220);
  }

  /* ─── Vertical Swipe Onboard Hint ─── */
  function showSwipeHintV() {
    if (localStorage.getItem('np_swipe_hint_v_seen')) return;
    localStorage.setItem('np_swipe_hint_v_seen', '1');

    const hint = document.createElement('div');
    hint.id = 'swipe-hint-v';
    hint.innerHTML = `
      <span class="swipe-hint-icon">↕</span>
      <div class="swipe-hint-title">Vertical Navigation</div>
      <div class="swipe-hint-desc">Swipe UP or DOWN to browse examples &amp; challenges.</div>
    `;
    document.body.appendChild(hint);
    setTimeout(() => { if (hint.parentNode) hint.parentNode.removeChild(hint); }, 3500);
  }

  /* ─── Initialize ─── */
  renderLists();

  // Check url hash for deep linking
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const idx = items.findIndex(item => item.id === hash);
    if (idx >= 0) { openItem(idx); return; }
  }
})();
