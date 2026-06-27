// ==========================================
// NextSem – lessons-data.js
// Enriched curriculum data for all 20 lessons
// ==========================================

window.lessons = [
  {
    id: 'hello-world',
    tab: 'Hello World',
    title: 'Your First Node.js Program',
    theory: `Node.js lets you run JavaScript on the server. The simplest program just uses console.log() to output text.`,
    points: [
      'Node.js uses the V8 JavaScript engine (same as Chrome)',
      'No browser required – runs directly on your machine',
      'console.log() prints to the terminal',
      'Run with: node filename.js',
    ],
    code: `<span class="cmt">// hello.js – Your first Node.js program</span>

<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Hello, World! 🌍"</span>);

<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Node.js version:"</span>, process.version);

<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Platform:"</span>, process.platform);

<span class="cmt">// Object output</span>
<span class="kw">const</span> <span class="var">info</span> = {
  name: <span class="str">"NextSem"</span>,
  awesome: <span class="kw">true</span>,
  year: <span class="num">2026</span>
};

<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"App info:"</span>, <span class="var">info</span>);`,
    filename: 'hello.js',
    conceptImage: 'concept_nodejs_arch.png',
    details: `
      <h4>🎯 Conceptual Deep-Dive</h4>
      <p>Node.js is an open-source, cross-platform runtime environment built on Google Chrome's V8 JavaScript engine. It compiles JavaScript code directly into native machine code, making execution incredibly fast.</p>
      <p>Unlike traditional web applications where JavaScript runs only in the browser (client-side), Node.js enables you to use JavaScript to write server-side scripts, build APIs, and interact directly with system resources like files, databases, and network adapters.</p>
      
      <h4>🎓 BCA/B.Tech Syllabus Highlights</h4>
      <ul>
        <li><strong>V8 Engine:</strong> Developed by Google, written in C++. It parses and executes JavaScript code.</li>
        <li><strong>Single-Threaded Event Loop:</strong> Node.js handles thousands of concurrent requests on a single main thread without thread context-switching overhead.</li>
        <li><strong>REPL (Read-Eval-Print Loop):</strong> An interactive shell environment for executing JavaScript code snippets in real-time. Simply type <code>node</code> in your command prompt to enter REPL mode.</li>
      </ul>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>Interviewers love to ask: <em>"Is Node.js single-threaded or multi-threaded?"</em> The answer: The JavaScript execution thread is single-threaded (using the Event Loop), but Node's C++ background APIs (via the Libuv library) utilize a thread pool to execute heavy I/O operations asynchronously.</p>
      </div>
    `
  },
  {
    id: 'modules',
    tab: 'Modules',
    title: 'Working with Modules',
    theory: `Modules help you organize code into reusable pieces. Node.js uses CommonJS (require/exports) and also supports ES Modules (import/export).`,
    points: [
      'Use require() to import built-in or custom modules',
      'Use module.exports to export your own functions',
      'npm provides thousands of third-party modules',
      'ES Modules use import/export syntax',
    ],
    code: `<span class="cmt">// math.js – Creating a custom module</span>

<span class="kw">const</span> <span class="fn">add</span> = (<span class="var">a</span>, <span class="var">b</span>) => <span class="var">a</span> + <span class="var">b</span>;
<span class="kw">const</span> <span class="fn">subtract</span> = (<span class="var">a</span>, <span class="var">b</span>) => <span class="var">a</span> - <span class="var">b</span>;
<span class="kw">const</span> <span class="fn">multiply</span> = (<span class="var">a</span>, <span class="var">b</span>) => <span class="var">a</span> * <span class="var">b</span>;

module.exports = { <span class="fn">add</span>, <span class="fn">subtract</span>, <span class="fn">multiply</span> };

<span class="cmt">// ─────────────────────────────────────</span>
<span class="cmt">// app.js – Using the custom module</span>

<span class="kw">const</span> <span class="var">math</span> = <span class="fn">require</span>(<span class="str">'./math'</span>);
<span class="kw">const</span> <span class="var">path</span> = <span class="fn">require</span>(<span class="str">'path'</span>); <span class="cmt">// built-in</span>

<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"5 + 3 ="</span>, <span class="var">math</span>.<span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>));
<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"10 - 4 ="</span>, <span class="var">math</span>.<span class="fn">subtract</span>(<span class="num">10</span>, <span class="num">4</span>));
<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Dir:"</span>, path.<span class="fn">join</span>(<span class="str">'/home'</span>, <span class="str">'user'</span>));`,
    filename: 'modules.js',
    conceptImage: null,
    details: `
      <h4>🎯 Understanding Modularization</h4>
      <p>Modularization is a software design technique that splits a large program into independent, interchangeable modules. This prevents code repetition (DRY principle) and helps maintain a clean codebase as features scale.</p>
      
      <h4>📦 Node.js Module Types</h4>
      <ul>
        <li><strong>Core Modules:</strong> Built directly into Node.js (e.g., <code>fs</code>, <code>path</code>, <code>http</code>, <code>os</code>). They can be imported without installing any dependencies.</li>
        <li><strong>Local Modules:</strong> Custom JS files written by you (e.g., <code>./math.js</code>). You must specify the relative file path to import them.</li>
        <li><strong>Third-Party Modules:</strong> Installed from NPM (Node Package Manager) (e.g., <code>express</code>, <code>lodash</code>, <code>mongoose</code>) and loaded simply by package name.</li>
      </ul>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>Be ready to explain the difference between <code>CommonJS (CJS)</code> and <code>ES Modules (ESM)</code>. CJS is the default in Node.js (using <code>require()</code> and synchronous loading). ESM is the standard in modern browsers (using <code>import/export</code> and asynchronous loading). ESM is activated in Node.js by setting <code>"type": "module"</code> in your <code>package.json</code>.</p>
      </div>
    `
  },
  {
    id: 'fs',
    tab: 'File System',
    title: 'Reading & Writing Files',
    theory: `The fs (file system) module lets you interact with files on your machine. Operations can be synchronous (blocking) or asynchronous (non-blocking).`,
    points: [
      'fs.readFile() reads files asynchronously (recommended)',
      'fs.readFileSync() reads synchronously (blocks execution)',
      'fs.writeFile() creates or overwrites a file',
      'fs.appendFile() adds content to existing files',
    ],
    code: `<span class="kw">const</span> <span class="var">fs</span> = <span class="fn">require</span>(<span class="str">'fs'</span>);

<span class="cmt">// Async read (non-blocking)</span>
<span class="var">fs</span>.<span class="fn">readFile</span>(<span class="str">'notes.txt'</span>, <span class="str">'utf8'</span>, (<span class="var">err</span>, <span class="var">data</span>) => {
  <span class="kw">if</span> (<span class="var">err</span>) {
    <span class="fn">console</span>.<span class="fn">error</span>(<span class="str">'Error:'</span>, <span class="var">err</span>.message);
    <span class="kw">return</span>;
  }
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'File contents:'</span>, <span class="var">data</span>);
});

<span class="cmt">// Write a new file</span>
<span class="kw">const</span> <span class="var">content</span> = <span class="str">\`Hello from Node.js!\nWritten at: \${new Date()}\`</span>;

<span class="var">fs</span>.<span class="fn">writeFile</span>(<span class="str">'output.txt'</span>, <span class="var">content</span>, (<span class="var">err</span>) => {
  <span class="kw">if</span> (<span class="var">err</span>) <span class="kw">throw</span> <span class="var">err</span>;
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'✅ File written successfully!'</span>);
});`,
    filename: 'fs-demo.js',
    conceptImage: 'concept_streams_pipe.png',
    details: `
      <h4>🎯 Synchronous vs Asynchronous I/O</h4>
      <p>The <code>fs</code> module is a prime example of Node's core philosophy. For almost every file system operation, Node offers both blocking (Sync) and non-blocking (Async) options.</p>
      <p>Synchronous operations freeze the execution thread until the file access is complete. In a web server, this means all other incoming HTTP requests will hang. Asynchronous operations delegate the file access to Libuv's thread pool and immediately continue executing code, invoking a callback function when the file operation is done.</p>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>Always use asynchronous functions (e.g., <code>fs.readFile</code> or the promise-based <code>fs.promises.readFile</code>) in web applications to preserve high concurrency. Reserve synchronous operations (like <code>fs.readFileSync</code>) for startup initialization tasks like loading configuration files.</p>
      </div>
    `
  },
  {
    id: 'async',
    tab: 'Async/Await',
    title: 'Async JavaScript in Node.js',
    theory: `Asynchronous programming is the heart of Node.js. Modern Node.js uses Promises and async/await for clean, readable async code.`,
    points: [
      'Callbacks were the first async pattern – can lead to "callback hell"',
      'Promises chain async operations cleanly with .then()/.catch()',
      'async/await makes async code look synchronous',
      'Always handle errors with try/catch in async functions',
    ],
    code: `<span class="cmt">// Simulating an async API call</span>
<span class="kw">function</span> <span class="fn">fetchUser</span>(<span class="var">id</span>) {
  <span class="kw">return new</span> <span class="fn">Promise</span>((<span class="var">resolve</span>, <span class="var">reject</span>) => {
    <span class="fn">setTimeout</span>(() => {
      <span class="kw">if</span> (<span class="var">id</span> > <span class="num">0</span>) {
        <span class="var">resolve</span>({ id: <span class="var">id</span>, name: <span class="str">"Alice"</span>, role: <span class="str">"admin"</span> });
      } <span class="kw">else</span> {
        <span class="var">reject</span>(<span class="kw">new</span> <span class="fn">Error</span>(<span class="str">"Invalid user ID"</span>));
      }
    }, <span class="num">500</span>);
  });
}

<span class="cmt">// Using async/await</span>
<span class="kw">async function</span> <span class="fn">main</span>() {
  <span class="kw">try</span> {
    <span class="kw">const</span> <span class="var">user</span> = <span class="kw">await</span> <span class="fn">fetchUser</span>(<span class="num">1</span>);
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"✅ User:"</span>, <span class="var">user</span>);
  } <span class="kw">catch</span> (<span class="var">err</span>) {
    <span class="fn">console</span>.<span class="fn">error</span>(<span class="str">"❌ Error:"</span>, <span class="var">err</span>.message);
  }
}

<span class="fn">main</span>();`,
    filename: 'async-demo.js',
    conceptImage: 'concept_async_evolution.png',
    details: `
      <h4>🎯 The Evolution of Asynchronous Patterns</h4>
      <p>JavaScript handles async operations natively. Over the years, the methods for managing async code flow evolved to make developer code cleaner and easier to debug:</p>
      <ul>
        <li><strong>Callbacks:</strong> Passing a function as an argument. Multiple nested callbacks create deep nesting, commonly referred to as the <em>"Callback Hell"</em> or <em>"Pyramid of Doom"</em>.</li>
        <li><strong>Promises:</strong> Introduce state representation (Pending, Resolved, Rejected). Allows linear method chaining with <code>.then()</code> and <code>.catch()</code>.</li>
        <li><strong>Async/Await:</strong> Syntactic sugar over Promises. Marked with <code>async</code> on the function, code inside waits on a promise with <code>await</code>, making async code write and look like synchronous code.</li>
      </ul>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>Always handle promise rejections. In production apps, an unhandled promise rejection can cause Node processes to crash. Use <code>try/catch</code> blocks around <code>await</code> calls, or attach a catch handler to ensure errors are logged gracefully.</p>
      </div>
    `
  },
  {
    id: 'http',
    tab: 'HTTP Server',
    title: 'Building an HTTP Server',
    theory: `Node.js has a built-in http module to create web servers. Every incoming request is handled by a callback function with request and response objects.`,
    points: [
      'http.createServer() returns a Server instance',
      'req contains URL, method, headers, and body',
      'res.writeHead() sets status code and headers',
      'res.end() sends the response to the client',
    ],
    code: `<span class="kw">const</span> <span class="var">http</span> = <span class="fn">require</span>(<span class="str">'http'</span>);

<span class="kw">const</span> <span class="var">PORT</span> = <span class="num">3000</span>;

<span class="kw">const</span> <span class="var">server</span> = http.<span class="fn">createServer</span>((<span class="var">req</span>, <span class="var">res</span>) => {
  <span class="kw">const</span> { <span class="var">url</span>, <span class="var">method</span> } = <span class="var">req</span>;

  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`\${method} \${url}\`</span>);

  <span class="kw">if</span> (<span class="var">url</span> === <span class="str">'/'</span>) {
    <span class="var">res</span>.<span class="fn">writeHead</span>(<span class="num">200</span>, { <span class="str">'Content-Type'</span>: <span class="str">'text/html'</span> });
    <span class="var">res</span>.<span class="fn">end</span>(<span class="str">'&lt;h1&gt;Welcome to NextSem! 🚀&lt;/h1&gt;'</span>);
  } <span class="kw">else if</span> (<span class="var">url</span> === <span class="str">'/api'</span>) {
    <span class="var">res</span>.<span class="fn">writeHead</span>(<span class="num">200</span>, { <span class="str">'Content-Type'</span>: <span class="str">'application/json'</span> });
    <span class="var">res</span>.<span class="fn">end</span>(<span class="obj">JSON</span>.<span class="fn">stringify</span>({ ok: <span class="kw">true</span>, msg: <span class="str">"API works!"</span> }));
  } <span class="kw">else</span> {
    <span class="var">res</span>.<span class="fn">writeHead</span>(<span class="num">404</span>);
    <span class="var">res</span>.<span class="fn">end</span>(<span class="str">'Not Found'</span>);
  }
});

<span class="var">server</span>.<span class="fn">listen</span>(<span class="var">PORT</span>, () =>
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`🌐 Server: http://localhost:\${PORT}\`</span>)
);`,
    filename: 'server.js',
    conceptImage: 'concept_http_lifecycle.png',
    details: `
      <h4>🎯 HTTP Request-Response Lifecycle</h4>
      <p>When a client (e.g., a web browser) visits <code>http://localhost:3000</code>, Node's HTTP server captures the socket connection and converts the TCP request into two streams:</p>
      <ul>
        <li><strong>http.IncomingMessage (req):</strong> Contains the client headers, query strings, and HTTP request body.</li>
        <li><strong>http.ServerResponse (res):</strong> A writable stream used to send response headers, status codes, and the final payload back to the client.</li>
      </ul>
      <p>Basic routing is achieved by manually checking the request path (<code>req.url</code>) and request method (<code>req.method</code>) using a switch/if-else block.</p>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>Raw HTTP server routing becomes messy and unmaintainable as your application grows. That is why frameworks like Express.js are preferred for commercial backend API development.</p>
      </div>
    `
  },
  {
    id: 'express',
    tab: 'Express API',
    title: 'REST API with Express.js',
    theory: `Express.js is the most popular Node.js framework. It simplifies building robust APIs with routing, middleware, and a rich ecosystem of plugins.`,
    points: [
      'app.get/post/put/delete() define routes',
      'Middleware functions transform requests and responses',
      'express.json() parses JSON request bodies',
      'Router() helps organize routes by resource',
    ],
    code: `<span class="kw">const</span> <span class="var">express</span> = <span class="fn">require</span>(<span class="str">'express'</span>);
<span class="kw">const</span> <span class="var">app</span> = <span class="fn">express</span>();

<span class="var">app</span>.<span class="fn">use</span>(<span class="var">express</span>.<span class="fn">json</span>()); <span class="cmt">// Parse JSON bodies</span>

<span class="kw">let</span> <span class="var">todos</span> = [
  { id: <span class="num">1</span>, text: <span class="str">"Learn Node.js"</span>, done: <span class="kw">false</span> },
  { id: <span class="num">2</span>, text: <span class="str">"Build an API"</span>, done: <span class="kw">false</span> },
];

<span class="cmt">// GET all todos</span>
<span class="var">app</span>.<span class="fn">get</span>(<span class="str">'/todos'</span>, (<span class="var">req</span>, <span class="var">res</span>) => {
  <span class="var">res</span>.<span class="fn">json</span>({ success: <span class="kw">true</span>, data: <span class="var">todos</span> });
});

<span class="cmt">// POST – create todo</span>
<span class="var">app</span>.<span class="fn">post</span>(<span class="str">'/todos'</span>, (<span class="var">req</span>, <span class="var">res</span>) => {
  <span class="kw">const</span> <span class="var">todo</span> = { id: <span class="var">todos</span>.length + <span class="num">1</span>, ...req.body };
  <span class="var">todos</span>.<span class="fn">push</span>(<span class="var">todo</span>);
  <span class="var">res</span>.<span class="fn">status</span>(<span class="num">201</span>).<span class="fn">json</span>(<span class="var">todo</span>);
});

<span class="var">app</span>.<span class="fn">listen</span>(<span class="num">3000</span>, () =>
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"🚀 API running on port 3000"</span>)
);`,
    filename: 'express-api.js',
    conceptImage: 'concept_express_middleware.png',
    details: `
      <h4>🎯 MVC Pattern and REST APIs</h4>
      <p>Express.js is a minimal and flexible web application framework. It makes implementing a REST (Representational State Transfer) API standard and clean. Each HTTP verb maps directly to an application action:</p>
      <ul>
        <li><code>GET /resource</code>: Retrieve all resources.</li>
        <li><code>POST /resource</code>: Create a new resource.</li>
        <li><code>PUT /resource/:id</code>: Update an existing resource.</li>
        <li><code>DELETE /resource/:id</code>: Remove a resource.</li>
      </ul>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>In Express, <em>"everything is middleware"</em>. Middleware functions are functions that have access to the request object (<code>req</code>), response object (<code>res</code>), and the next middleware function (<code>next</code>) in the application's request-response cycle.</p>
      </div>
    `
  },
  {
    id: 'events',
    tab: 'Event Emitter',
    title: 'Event Emitters in Node.js',
    theory: `Node.js has a built-in 'events' module that enables objects to emit and listen to custom events. This forms the basis of Node's asynchronous, event-driven architecture.`,
    points: [
      'Use const EventEmitter = require(\'events\') to import the module',
      'Create an instance and register listeners using emitter.on(eventName, callback)',
      'Trigger events and pass arguments using emitter.emit(eventName, data)',
      'Event Emitter supports synchronous callback execution by default.',
    ],
    code: `<span class="kw">const</span> <span class="var">EventEmitter</span> = <span class="fn">require</span>(<span class="str">'events'</span>);
<span class="kw">const</span> <span class="var">myEmitter</span> = <span class="kw">new</span> <span class="fn">EventEmitter</span>();

<span class="cmt">// 1. Register listener</span>
<span class="var">myEmitter</span>.<span class="fn">on</span>(<span class="str">'userLoggedIn'</span>, (<span class="var">user</span>) => {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`🔔 Notification: \${user.name} has logged in!\`</span>);
});

<span class="var">myEmitter</span>.<span class="fn">on</span>(<span class="str">'userLoggedIn'</span>, (<span class="var">user</span>) => {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`📊 Analytics: Logged sign-in for user ID \${user.id}\`</span>);
});

<span class="cmt">// 2. Emit event with payload</span>
<span class="kw">const</span> <span class="var">currentUser</span> = { id: <span class="num">101</span>, name: <span class="str">'Sarah Connor'</span> };
<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'Starting login simulation...'</span>);
<span class="var">myEmitter</span>.<span class="fn">emit</span>(<span class="str">'userLoggedIn'</span>, <span class="var">currentUser</span>);`,
    filename: 'emitter-demo.js',
    conceptImage: null,
    details: `
      <h4>🎯 Event-Driven Architecture</h4>
      <p>Node.js is built around an event-driven model. Objects called <strong>emitters</strong> periodically trigger (emit) named events that cause listener functions to run. For example:</p>
      <ul>
        <li>A net.Server object emits an event each time a peer connects to it.</li>
        <li>An fs.ReadStream emits an event when the file is opened and as data chunks arrive.</li>
      </ul>
      <p>Using EventEmitters allows loose coupling between different components of your application. The module that triggers the event does not need to know which modules are listening to it.</p>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>By default, event listeners run <strong>synchronously</strong> in the order they were registered. This ensures proper flow control. If you need a listener to run asynchronously, wrap its execution in <code>setImmediate()</code> or <code>process.nextTick()</code>.</p>
      </div>
    `
  },
  {
    id: 'streams',
    tab: 'Streams',
    title: 'Streams & Pipes for Data Processing',
    theory: `Streams are collections of data — like arrays or strings — but instead of loading the entire content into memory at once, they read and write chunks of data piece by piece. This is extremely memory-efficient for large files or network streams.`,
    points: [
      'Readable streams read data from a source (e.g. fs.createReadStream)',
      'Writable streams write data to a destination (e.g. fs.createWriteStream)',
      'Piping allows you to direct output from a readable stream into a writable stream',
      'Avoids memory overflow when handling multi-gigabyte files.',
    ],
    code: `<span class="kw">const</span> <span class="var">fs</span> = <span class="fn">require</span>(<span class="str">'fs'</span>);
<span class="kw">const</span> <span class="var">zlib</span> = <span class="fn">require</span>(<span class="str">'zlib'</span>); <span class="cmt">// For compression</span>

<span class="cmt">// 1. Create readable stream from large file</span>
<span class="kw">const</span> <span class="var">readStream</span> = <span class="var">fs</span>.<span class="fn">createReadStream</span>(<span class="str">'large-log.txt'</span>);

<span class="cmt">// 2. Create writable stream</span>
<span class="kw">const</span> <span class="var">writeStream</span> = <span class="var">fs</span>.<span class="fn">createWriteStream</span>(<span class="str">'compressed-log.txt.gz'</span>);

<span class="cmt">// 3. Pipe data through a gzip transform stream</span>
<span class="kw">const</span> <span class="var">gzip</span> = <span class="var">zlib</span>.<span class="fn">createGzip</span>();

<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'Starting compression stream...'</span>);
<span class="var">readStream</span>
  .<span class="fn">pipe</span>(<span class="var">gzip</span>)
  .<span class="fn">pipe</span>(<span class="var">writeStream</span>)
  .<span class="fn">on</span>(<span class="str">'finish'</span>, () => {
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'✅ File successfully compressed via streaming!'</span>);
  });`,
    filename: 'streams-pipe.js',
    conceptImage: 'concept_streams_pipe.png',
    details: `
      <h4>🎯 Why Streams Matter</h4>
      <p>Consider reading a 4GB video file on a server with 2GB of RAM. If you use <code>fs.readFile</code>, the server will throw an <em>Out of Memory (OOM)</em> error because it tries to buffer the entire file in RAM. Streams read the file in small chunks (usually 64KB), process them, and release them immediately, consuming less than 30MB of RAM regardless of file size.</p>

      <h4>🔀 Types of Streams</h4>
      <ul>
        <li><strong>Readable:</strong> Abstraction for a source of data (e.g., HTTP request, standard input).</li>
        <li><strong>Writable:</strong> Abstraction for a destination of data (e.g., HTTP response, standard output).</li>
        <li><strong>Duplex:</strong> Both readable and writable (e.g., TCP socket).</li>
        <li><strong>Transform:</strong> A duplex stream where the output is computed based on input (e.g., zlib compression, crypto encryption).</li>
      </ul>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>What is <em>backpressure</em>? It occurs when data is read from a source faster than it can be written to a destination. The <code>.pipe()</code> method handles backpressure automatically, pausing the read stream when write buffers are full and resuming it when they clear.</p>
      </div>
    `
  },
  {
    id: 'database',
    tab: 'Database (CRUD)',
    title: 'Connecting MongoDB with Mongoose',
    theory: `Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and translates between objects in code and documents in MongoDB.`,
    points: [
      'Define Schemas to structure database collections',
      'Compile schemas into Models to perform queries',
      'Use standard async query methods like model.find() and model.save()',
      'Enforces structure and validation on flexible MongoDB collections.',
    ],
    code: `<span class="kw">const</span> <span class="var">mongoose</span> = <span class="fn">require</span>(<span class="str">'mongoose'</span>);

<span class="cmt">// 1. Define User Schema</span>
<span class="kw">const</span> <span class="var">userSchema</span> = <span class="kw">new</span> <span class="var">mongoose</span>.<span class="fn">Schema</span>({
  name: { type: <span class="str">String</span>, required: <span class="kw">true</span> },
  email: { type: <span class="str">String</span>, unique: <span class="kw">true</span>, lowercase: <span class="kw">true</span> },
  role: { type: <span class="str">String</span>, default: <span class="str">'student'</span> },
  createdAt: { type: <span class="str">Date</span>, default: Date.now }
});

<span class="cmt">// 2. Create Model</span>
<span class="kw">const</span> <span class="var">User</span> = <span class="var">mongoose</span>.<span class="fn">model</span>(<span class="str">'User'</span>, <span class="var">userSchema</span>);

<span class="cmt">// 3. Save a new user</span>
<span class="kw">async function</span> <span class="fn">createUser</span>() {
  <span class="kw">const</span> <span class="var">newUser</span> = <span class="kw">new</span> <span class="fn">User</span>({ name: <span class="str">'John Doe'</span>, email: <span class="str">'john@example.com'</span> });
  <span class="kw">const</span> <span class="var">savedUser</span> = <span class="kw">await</span> <span class="var">newUser</span>.<span class="fn">save</span>();
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'User created:'</span>, <span class="var">savedUser</span>);
}`,
    filename: 'mongoose-demo.js',
    conceptImage: null,
    details: `
      <h4>🎯 SQL vs NoSQL & ODM</h4>
      <p>Traditional SQL databases (like MySQL/PostgreSQL) require tables with fixed rows and columns. NoSQL databases (like MongoDB) store data in flexible, JSON-like documents. Mongoose bridges the gap by letting you define schemas in JS code, ensuring consistent types and valid fields before writing data to MongoDB.</p>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>Know the difference between <code>Schema</code> and <code>Model</code>. A Schema defines the structure and rules of the document. A Model is a wrapper wrapper on the Schema that provides the database connection and methods (like <code>find()</code>, <code>create()</code>, <code>update()</code>) to execute queries on MongoDB.</p>
      </div>
    `
  },
  {
    id: 'jwt',
    tab: 'JWT Security',
    title: 'JSON Web Tokens (JWT) for APIs',
    theory: `JSON Web Tokens are an open standard for securely transmitting information between client and server. In APIs, JWTs are signed with a secret key and used to authorize clients after they log in without needing session cookies.`,
    points: [
      'jwt.sign() encodes user payload and signs it using a secret key',
      'Token is sent to client and stored in localStorage or secure cookies',
      'Client sends token in Authorization header: Bearer <token>',
      'jwt.verify() decodes and validates incoming tokens in middleware.',
    ],
    code: `<span class="kw">const</span> <span class="var">jwt</span> = <span class="fn">require</span>(<span class="str">'jsonwebtoken'</span>);
<span class="kw">const</span> <span class="var">SECRET_KEY</span> = <span class="str">'super-secret-key-12345'</span>;

// 1. Generate token on successful login
<span class="kw">function</span> <span class="fn">loginUser</span>(<span class="var">user</span>) {
  <span class="kw">const</span> <span class="var">payload</span> = { id: <span class="var">user</span>.id, email: <span class="var">user</span>.email, role: <span class="var">user</span>.role };
  <span class="kw">const</span> <span class="var">token</span> = <span class="var">jwt</span>.<span class="fn">sign</span>(<span class="var">payload</span>, <span class="var">SECRET_KEY</span>, { expiresIn: <span class="str">'1h'</span> });
  <span class="kw">return</span> <span class="var">token</span>;
}

// 2. Verify token in middleware
<span class="kw">function</span> <span class="fn">verifyToken</span>(<span class="var">token</span>) {
  <span class="kw">try</span> {
    <span class="kw">const</span> <span class="var">decoded</span> = <span class="var">jwt</span>.<span class="fn">verify</span>(<span class="var">token</span>, <span class="var">SECRET_KEY</span>);
    <span class="kw">return</span> { isValid: <span class="kw">true</span>, decoded };
  } catch (<span class="var">err</span>) {
    <span class="kw">return</span> { isValid: <span class="kw">false</span>, error: <span class="var">err</span>.message };
  }
}`,
    filename: 'jwt-auth.js',
    conceptImage: 'concept_jwt_anatomy.png',
    details: `
      <h4>🎯 Token-Based Authentication</h4>
      <p>Traditional web apps use session cookies stored in server RAM to track login state. This makes scaling horizontally (adding more servers) difficult because servers need to share session memory. JWTs are stateless: all user state is stored inside the token itself. The server only needs to verify the token signature using a secret key, making it incredibly scalable.</p>

      <h4>🗂️ Anatomy of a JWT</h4>
      <ul>
        <li><strong>Header:</strong> Specifies the hashing algorithm (e.g., HS256) and token type (JWT).</li>
        <li><strong>Payload:</strong> Contains user claims (e.g., userID, email, role) and expiration timestamp (exp).</li>
        <li><strong>Signature:</strong> Cryptographic hash created by joining the encoded header, payload, and your server secret.</li>
      </ul>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>Never store sensitive data (like passwords) inside the JWT payload. The payload is not encrypted — it is simply base64-encoded, meaning anyone who intercepts the token can read its contents. It is only signed to prevent tampering.</p>
      </div>
    `
  },
  {
    id: 'os-process',
    tab: 'OS & Process',
    title: 'Accessing OS & Process Info',
    theory: `Node.js provides the 'os' and global 'process' modules to interact with the underlying operating system and control the executing process. This is vital for managing memory, environment configuration, and execution paths.`,
    points: [
      'os.cpus() returns CPU specs and cores',
      'os.freemem() and os.totalmem() monitor system RAM',
      'process.env holds environment configurations',
      'process.argv reads command-line arguments',
    ],
    code: `<span class="kw">const</span> <span class="var">os</span> = <span class="fn">require</span>(<span class="str">'os'</span>);

<span class="cmt">// 1. System specs</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'OS Platform:'</span>, os.<span class="fn">platform</span>());
<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'CPU Cores:'</span>, os.<span class="fn">cpus</span>().length);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'Total RAM (GB):'</span>, (os.<span class="fn">totalmem</span>() / <span class="num">1024</span> / <span class="num">1024</span> / <span class="num">1024</span>).<span class="fn">toFixed</span>(<span class="num">2</span>));

<span class="cmt">// 2. Process monitoring</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'Process PID:'</span>, process.pid);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'Current Dir:'</span>, process.<span class="fn">cwd</span>());

<span class="cmt">// 3. Listening to termination event</span>
process.<span class="fn">on</span>(<span class="str">'SIGINT'</span>, () => {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'👋 SIGINT received. Shutting down server gracefully...'</span>);
  process.<span class="fn">exit</span>(<span class="num">0</span>);
});`,
    filename: 'os-process-demo.js',
    conceptImage: 'concept_nodejs_arch.png',
    details: `
      <h4>🎯 Monitoring Server Resources</h4>
      <p>In backend engineering, knowing the hardware limits of your host server is critical. The <code>os</code> module lets you write monitoring scripts that alert you if memory usage is too high or if the disk is full.</p>
      <p>The global <code>process</code> object represents the executing Node instance. It allows you to read command-line arguments, read environment variables, and listen to termination signals like <code>SIGTERM</code> or <code>SIGINT</code> to perform cleanups (like closing database connections) before exiting.</p>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>What is <code>process.nextTick()</code>? It is a method that schedules a callback to be executed in the event loop immediately after the current operation finishes, before any other I/O events or timers execute. It is used to run cleanup code immediately.</p>
      </div>
    `
  },
  {
    id: 'error-handling',
    tab: 'Error Handling',
    title: 'API Error Handling & Middleware',
    theory: `Professional applications require standardized error handling. In Express, you handle async errors using try/catch blocks and centralize error responses using a custom error-handling middleware.`,
    points: [
      'Use try/catch to capture operational errors',
      'Pass errors to next(err) to trigger Express error handler',
      'Error middleware takes 4 arguments: (err, req, res, next)',
      'Prevents exposing stack traces to end-users in production.',
    ],
    code: `<span class="kw">const</span> <span class="var">express</span> = <span class="fn">require</span>(<span class="str">'express'</span>);
<span class="kw">const</span> <span class="var">app</span> = <span class="fn">express</span>();

<span class="cmt">// 1. Route with error scenario</span>
<span class="var">app</span>.<span class="fn">get</span>(<span class="str">'/users/:id'</span>, <span class="kw">async</span> (<span class="var">req</span>, <span class="var">res</span>, <span class="var">next</span>) => {
  <span class="kw">try</span> {
    <span class="kw">const</span> <span class="var">user</span> = <span class="kw">await</span> db.<span class="fn">findUser</span>(<span class="var">req</span>.params.id);
    <span class="kw">if</span> (!<span class="var">user</span>) {
      <span class="kw">const</span> <span class="var">err</span> = <span class="kw">new</span> <span class="fn">Error</span>(<span class="str">'User not found'</span>);
      <span class="var">err</span>.status = <span class="num">404</span>;
      <span class="kw">throw</span> <span class="var">err</span>;
    }
    <span class="var">res</span>.<span class="fn">json</span>(<span class="var">user</span>);
  } <span class="kw">catch</span> (<span class="var">err</span>) {
    <span class="fn">next</span>(<span class="var">err</span>); <span class="cmt">// Forward to error handler</span>
  }
});

<span class="cmt">// 2. Centralized Error Middleware (Must have 4 params)</span>
<span class="var">app</span>.<span class="fn">use</span>((<span class="var">err</span>, <span class="var">req</span>, <span class="var">res</span>, <span class="var">next</span>) => {
  <span class="kw">const</span> <span class="var">status</span> = <span class="var">err</span>.status || <span class="num">500</span>;
  <span class="var">res</span>.<span class="fn">status</span>(<span class="var">status</span>).<span class="fn">json</span>({
    error: { message: <span class="var">err</span>.message || <span class="str">'Internal Server Error'</span> }
  });
});`,
    filename: 'error-handling.js',
    conceptImage: 'concept_express_middleware.png',
    details: `
      <h4>🎯 Operational vs Programmer Errors</h4>
      <p>Error handling requires separating errors into two categories:</p>
      <ul>
        <li><strong>Operational Errors:</strong> Known runtime errors that occur in a correct program (e.g., database timeout, invalid input, file not found). These should be caught and returned as clean HTTP status codes (4xx/5xx).</li>
        <li><strong>Programmer Errors:</strong> Bugs or design flaws (e.g., syntax error, reading property of undefined). The best way to recover from these is to log the error and restart the application using a process manager like PM2.</li>
      </ul>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>In Express 4, asynchronous errors in handlers are NOT caught automatically. If you forget to wrap your async code in try/catch and call <code>next(err)</code>, the request will hang forever. Express 5 resolves this, but in Express 4, you should use the <code>express-async-errors</code> package to auto-forward async errors.</p>
      </div>
    `
  },
  {
    id: 'websockets',
    tab: 'WebSockets',
    title: 'Real-Time Apps with WebSockets',
    theory: `WebSockets provide a persistent, full-duplex communication channel between client and server over a single TCP connection, enabling real-time features like chat or live feeds.`,
    points: [
      'WebSockets start as a standard HTTP request and upgrade to TCP',
      'Enables low-overhead, bidirectional messaging',
      'Socket.io is a popular library wrapper with fallback features',
      'Ideal for chats, multiplayer games, and live data feeds.',
    ],
    code: `<span class="kw">const</span> <span class="var">http</span> = <span class="fn">require</span>(<span class="str">'http'</span>);
<span class="kw">const</span> <span class="var">server</span> = http.<span class="fn">createServer</span>();
<span class="kw">const</span> { <span class="var">Server</span> } = <span class="fn">require</span>(<span class="str">"socket.io"</span>);
<span class="kw">const</span> <span class="var">io</span> = <span class="kw">new</span> <span class="fn">Server</span>(<span class="var">server</span>);

<span class="var">io</span>.<span class="fn">on</span>(<span class="str">'connection'</span>, (<span class="var">socket</span>) => {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'👥 User connected:'</span>, socket.id);

  <span class="var">socket</span>.<span class="fn">on</span>(<span class="str">'chatMessage'</span>, (<span class="var">msg</span>) => {
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'Message received:'</span>, <span class="var">msg</span>);
    <span class="var">io</span>.<span class="fn">emit</span>(<span class="str">'chatMessage'</span>, <span class="var">msg</span>); <span class="cmt">// Broadcast to all users</span>
  });

  <span class="var">socket</span>.<span class="fn">on</span>(<span class="str">'disconnect'</span>, () => {
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'👥 User disconnected'</span>);
  });
});

<span class="var">server</span>.<span class="fn">listen</span>(<span class="num">3000</span>);`,
    filename: 'socket-server.js',
    conceptImage: 'concept_websocket_vs_http.png',
    details: `
      <h4>🎯 HTTP Polling vs WebSockets</h4>
      <p>Traditional HTTP is unidirectional: the client requests, and the server responds. For real-time updates (like a chat app), clients historically used <em>long polling</em>, sending HTTP requests every few seconds. This causes massive server load. WebSockets upgrade the connection to a single long-lived TCP channel, allowing either side to push messages instantly with minimal header overhead.</p>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>Explain the difference between WebSockets and Socket.io. WebSockets is a browser/HTTP standard protocol. Socket.io is a library that wraps WebSockets, adding fallback mechanisms (like AJAX polling if sockets are blocked), auto-reconnect, and built-in "rooms" to segment clients.</p>
      </div>
    `
  },
  {
    id: 'testing',
    tab: 'Unit Testing',
    title: 'Unit Testing with Jest',
    theory: `Testing ensures your code works as expected. Jest is a popular JavaScript testing framework. We write unit tests to validate individual functions or HTTP routes.`,
    points: [
      'Write tests in files ending with .test.js or .spec.js',
      'Use test() or it() to define a test case',
      'Use expect() and matchers like toBe() or toEqual() to verify results',
      'Run with: jest or npm test.',
    ],
    code: `<span class="cmt">// math.js</span>
<span class="kw">const</span> <span class="fn">add</span> = (<span class="var">a</span>, <span class="var">b</span>) => <span class="var">a</span> + <span class="var">b</span>;
module.exports = { <span class="fn">add };

// ─────────────────────────────────────
// math.test.js – Writing a test case
const { add } = require('./math');

describe('Math Functions', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should return a number', () => {
    expect(typeof add(1, 1)).toBe('number');
  });
});`,
    filename: 'math.test.js',
    conceptImage: null,
    details: `
      <h4>🎯 Test-Driven Development (TDD)</h4>
      <p>Testing is a vital part of backend engineering. Jest runs tests in parallel, watches file changes, and generates complete HTML coverage reports. In TDD, developers write the tests *before* writing the actual implementation, forcing clear API design and reducing regression bugs.</p>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>Know the difference between <code>Unit Tests</code>, <code>Integration Tests</code>, and <code>End-to-End (E2E) Tests</code>. Unit tests test individual functions. Integration tests test how multiple parts (like a route and database schema) work together. E2E tests test the entire application flow from the UI down to the database.</p>
      </div>
    `
  },
  {
    id: 'cors-helmet',
    tab: 'CORS & Security',
    title: 'CORS & Security Headers',
    theory: `Securing your API is critical. We use Helmet middleware to configure secure HTTP response headers, and CORS middleware to control which client domains can access our server resources.`,
    points: [
      'CORS (Cross-Origin Resource Sharing) prevents unauthorized domain calls',
      'Helmet sets headers to prevent XSS and Clickjacking attacks',
      'Use cors() to specify whitelist origins',
      'Essential for securing public-facing REST APIs.',
    ],
    code: `<span class="kw">const</span> <span class="var">express</span> = <span class="fn">require</span>(<span class="str">'express'</span>);
<span class="kw">const</span> <span class="var">cors</span> = <span class="fn">require</span>(<span class="str">'cors'</span>);
<span class="kw">const</span> <span class="var">helmet</span> = <span class="fn">require</span>(<span class="str">'helmet'</span>);
<span class="kw">const</span> <span class="var">app</span> = <span class="fn">express</span>();

<span class="var">app</span>.<span class="fn">use</span>(<span class="fn">helmet</span>()); <span class="cmt">// Secures headers</span>

// Configure CORS whitelist origin
<span class="kw">const</span> <span class="var">corsOptions</span> = {
  origin: <span class="str">'https://nextsem.com'</span>,
  optionsSuccessStatus: <span class="num">200</span>
};
<span class="var">app</span>.<span class="fn">use</span>(<span class="fn">cors</span>(<span class="var">corsOptions</span>));

<span class="var">app</span>.<span class="fn">get</span>(<span class="str">'/secure-data'</span>, (<span class="var">req</span>, <span class="var">res</span>) => {
  <span class="var">res</span>.<span class="fn">json</span>({ data: <span class="str">'Highly classified!'</span> });
});`,
    filename: 'security.js',
    conceptImage: null,
    details: `
      <h4>🎯 Web App Security Basics</h4>
      <p>When an API is hosted, it is vulnerable to malicious attacks. Helmet sets secure headers automatically:</p>
      <ul>
        <li><code>X-Content-Type-Options:</code> Prevents browsers from MIME-sniffing responses.</li>
        <li><code>Content-Security-Policy (CSP):</code> Limits resources the browser can load, stopping XSS.</li>
        <li><code>X-Frame-Options:</code> Prevents Clickjacking by disabling framing on other domains.</li>
      </ul>
      <p>CORS is a browser security mechanism that blocks scripts on domain A from reading data from domain B unless domain B explicitly authorizes it via headers.</p>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>CORS is a <strong>client-side</strong> browser check. A backend script (like a Python curl request) bypasses CORS completely because it is not executed inside a browser window. CORS is meant to protect web app users, not server resources.</p>
      </div>
    `
  },
  {
    id: 'env-config',
    tab: 'Config & Env',
    title: 'Environment Configurations',
    theory: `Environment variables keep credentials secure and separate code from config. We use dotenv to load variables from a .env file into process.env.`,
    points: [
      'Store sensitive tokens, passwords, and port configurations in .env',
      'Never commit the .env file to git repository',
      'Use require("dotenv").config() to load variables at startup',
      'Allows easy switching between production, staging, and dev configurations.',
    ],
    code: `<span class="cmt">// .env – Configuration File (Not committed to Git)</span>
PORT=8080
DB_URI=mongodb://localhost:27017/nextsemdb
API_KEY=xyz987654321

// ─────────────────────────────────────
// server.js – Loading configs
<span class="fn">require</span>(<span class="str">'dotenv'</span>).<span class="fn">config</span>();

<span class="kw">const</span> <span class="var">port</span> = process.env.PORT || <span class="num">3000</span>;
<span class="kw">const</span> <span class="var">dbUrl</span> = process.env.DB_URI;

<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`Connecting to DB at: \${dbUrl}\`</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`Server port set to: \${port}\`</span>);`,
    filename: 'env-config.js',
    conceptImage: null,
    details: `
      <h4>🎯 Separating Configurations from Codebase</h4>
      <p>One of the major guidelines of modern cloud deployment is storing configuration parameters directly in the execution environment, not hardcoded in the codebase. Hardcoding database passwords or API keys in code poses massive security leaks if the code is published to GitHub or shared with other teams.</p>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>Always create a dummy <code>.env.example</code> file in your repository. This file holds the required environment keys without the sensitive values, helping new developers know exactly what variables are required to spin up the local project.</p>
      </div>
    `
  },
  {
    id: 'file-upload',
    tab: 'File Uploads',
    title: 'File Uploads with Multer',
    theory: `Uploading files is a core backend feature. We use Multer, a node middleware for multipart/form-data, to validate, rename, and save incoming user files to storage.`,
    points: [
      'Multer parses forms with enctype="multipart/form-data"',
      'multer.diskStorage() customizes destination path and filenames',
      'upload.single() handles single file field uploads',
      'Essential for handling user profile pictures and document uploads.',
    ],
    code: `<span class="kw">const</span> <span class="var">express</span> = <span class="fn">require</span>(<span class="str">'express'</span>);
<span class="kw">const</span> <span class="var">multer</span> = <span class="fn">require</span>(<span class="str">'multer'</span>);
<span class="kw">const</span> <span class="var">app</span> = <span class="fn">express</span>();

// 1. Configure storage options
<span class="kw">const</span> <span class="var">storage</span> = <span class="var">multer</span>.<span class="fn">diskStorage</span>({
  destination: (<span class="var">req</span>, <span class="var">file</span>, <span class="var">cb</span>) => cb(<span class="kw">null</span>, <span class="str">'uploads/'</span>),
  filename: (<span class="var">req</span>, <span class="var">file</span>, <span class="var">cb</span>) => cb(<span class="kw">null</span>, Date.<span class="fn">now</span>() + <span class="str">'-'</span> + <span class="var">file</span>.originalname)
});
<span class="kw">const</span> <span class="var">upload</span> = <span class="fn">multer</span>({ storage: <span class="var">storage</span> });

// 2. Route handling single upload
<span class="var">app</span>.<span class="fn">post</span>(<span class="str">'/upload'</span>, <span class="var">upload</span>.<span class="fn">single</span>(<span class="str">'profile'</span>), (<span class="var">req</span>, <span class="var">res</span>) => {
  <span class="var">res</span>.<span class="fn">json</span>({
    msg: <span class="str">'File uploaded successfully!'</span>,
    fileInfo: <span class="var">req</span>.file
  });
});`,
    filename: 'upload-demo.js',
    conceptImage: null,
    details: `
      <h4>🎯 Multipart Form-Data Parsing</h4>
      <p>Standard Express body parsers (like <code>express.json()</code> or <code>express.urlencoded()</code>) cannot parse raw binary files uploaded from a form. <code>multer</code> extends Express by integrating a multipart form parser, storing the file metadata (path, size, mimetype) on <code>req.file</code> and binary payload directly on disk or in memory buffer.</p>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>Never store user-uploaded files directly on your application server in production. If the server scales or restarts, files can be permanently lost. Instead, stream files directly to cloud storage (like AWS S3 or Firebase Cloud Storage) and save the URL links in your database.</p>
      </div>
    `
  },
  {
    id: 'redis',
    tab: 'Redis Cache',
    title: 'Caching with Redis',
    theory: `Caching reduces database query load. We use Redis, an in-memory key-value database, to store query results and serve subsequent client requests in milliseconds.`,
    points: [
      'In-memory key-value database – extremely low latency',
      'redis.get() and redis.set() store temporary JSON data',
      'Set Expiry time (TTL) to invalidate outdated cached data',
      'Improves API performance and reduces main database load.',
    ],
    code: `<span class="kw">const</span> <span class="var">redis</span> = <span class="fn">require</span>(<span class="str">'redis'</span>);
<span class="kw">const</span> <span class="var">client</span> = redis.<span class="fn">createClient</span>();

<span class="kw">async function</span> <span class="fn">getUserData</span>(<span class="var">userId</span>) {
  // 1. Check Cache first
  <span class="kw">const</span> <span class="var">cachedUser</span> = <span class="kw">await</span> client.<span class="fn">get</span>(<span class="str">\`user:\${userId}\`</span>);
  <span class="kw">if</span> (<span class="var">cachedUser</span>) {
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">'⚡ Serving from Cache!'</span>);
    <span class="kw">return</span> JSON.<span class="fn">parse</span>(<span class="var">cachedUser</span>);
  }

  // 2. Cache Miss: Fetch from DB
  <span class="kw">const</span> <span class="var">user</span> = <span class="kw">await</span> db.<span class="fn">queryUser</span>(<span class="var">userId</span>);
  // 3. Store in Cache with 60s expiration (TTL)
  <span class="kw">await</span> client.<span class="fn">set</span>(<span class="str">\`user:\${userId}\`</span>, JSON.<span class="fn">stringify</span>(<span class="var">user</span>), { EX: <span class="num">60</span> });
  <span class="kw">return</span> <span class="var">user</span>;
}`,
    filename: 'redis-cache.js',
    conceptImage: 'concept_redis_cache.png',
    details: `
      <h4>🎯 In-Memory Key-Value Caching</h4>
      <p>Fetching data from traditional databases (like MySQL/MongoDB) involves reading data from disk and processing complex search logic. This takes time. Redis is entirely memory-based, operating in RAM and accessing keys in less than 2 milliseconds. By storing popular query results in Redis, you bypass primary database roundtrips, allowing servers to handle 10x more client traffic.</p>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>Always specify a TTL (Time-To-Live) on keys stored in Redis. If cached keys never expire, users will read stale data if database values change. Expiring cache ensures database and cache synchronization over time.</p>
      </div>
    `
  },
  {
    id: 'clustering',
    tab: 'Clustering',
    title: 'Scaling with Clustering',
    theory: `Node.js runs on a single CPU thread. We use the cluster module to spin up worker instances matching the core count of our server CPU, multiplying application processing power.`,
    points: [
      'Spins up instances to balance execution loads across cores',
      'The primary process forks worker processes',
      'All workers share the same network port',
      'Ideal for heavy processing API deployments.',
    ],
    code: `<span class="kw">const</span> <span class="var">cluster</span> = <span class="fn">require</span>(<span class="str">'cluster'</span>);
<span class="kw">const</span> <span class="var">http</span> = <span class="fn">require</span>(<span class="str">'http'</span>);
<span class="kw">const</span> <span class="var">numCPUs</span> = <span class="fn">require</span>(<span class="str">'os'</span>).<span class="fn">cpus</span>().length;

<span class="kw">if</span> (cluster.isPrimary) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`Primary PID \${process.pid} is running...\`</span>);
  // Fork workers matching CPU core count
  <span class="kw">for</span> (<span class="kw">let</span> <span class="var">i</span> = <span class="num">0</span>; <span class="var">i</span> < <span class="var">numCPUs</span>; <span class="var">i</span>++) {
    cluster.<span class="fn">fork</span>();
  }
} <span class="kw">else</span> {
  // Workers share the same port!
  http.<span class="fn">createServer</span>((<span class="var">req</span>, <span class="var">res</span>) => {
    <span class="var">res</span>.<span class="fn">writeHead</span>(<span class="num">200</span>);
    <span class="var">res</span>.<span class="fn">end</span>(<span class="str">'Hello from Worker CPU!'</span>);
  }).<span class="fn">listen</span>(<span class="num">8000</span>);
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`Worker PID \${process.pid} started.\`</span>);
}`,
    filename: 'cluster-demo.js',
    conceptImage: 'concept_nodejs_arch.png',
    details: `
      <h4>🎯 Vertical Scaling via Clustering</h4>
      <p>Node.js runs in a single process. By default, it runs on one CPU core. If your host machine has 8 cores, 7 cores will sit idle during high traffic. The <code>cluster</code> module duplicates your app process across all cores, launching a built-in load balancer that routes incoming network connections to available workers in round-robin fashion, maximizing server resources.</p>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>In modern production environments (like AWS or Docker), developers often rely on process managers like <strong>PM2</strong> in <code>cluster mode</code>, or container orchestrators like Kubernetes, rather than manually writing clustering code in their app files.</p>
      </div>
    `
  },
  {
    id: 'graphql',
    tab: 'GraphQL API',
    title: 'APIs with GraphQL',
    theory: `GraphQL is an alternative query language for APIs. Instead of standard REST paths, GraphQL uses schemas and resolvers to let clients query exactly what fields they need in a single request.`,
    points: [
      'Bypasses over-fetching and under-fetching REST issues',
      'Client defines JSON-shaped query variables for inputs',
      'Schema defines types, Queries (read), and Mutations (write)',
      'Provides a single API endpoint for all resource queries.',
    ],
    code: `<span class="kw">const</span> { <span class="var">graphql</span>, <span class="var">buildSchema</span> } = <span class="fn">require</span>(<span class="str">'graphql'</span>);

// 1. Define GraphQL schema
<span class="kw">const</span> <span class="var">schema</span> = <span class="fn">buildSchema</span>(\`
  type Query {
    hello: String
    user(id: Int!): User
  }
  type User {
    id: Int
    name: String
  }
\`);

// 2. Define Resolvers
<span class="kw">const</span> <span class="var">rootResolver</span> = {
  hello: () => <span class="str">'Hello from GraphQL! 🔮'</span>,
  user: ({ <span class="var">id</span> }) => ({ id: <span class="var">id</span>, name: <span class="str">'John Doe'</span> })
};`,
    filename: 'graphql-server.js',
    conceptImage: null,
    details: `
      <h4>🎯 Bypassing REST Limitations</h4>
      <p>REST APIs require multiple network calls to fetch related data (e.g., getting a user, then their posts, then the comments on those posts). This is <em>under-fetching</em>. Alternatively, GET requests retrieve complete database rows containing fields the client doesn't need. This is <em>over-fetching</em>. GraphQL resolves both by providing a single endpoint where clients request specific fields in a single query transaction.</p>

      <div class="sc-tip-box">
        <strong>💡 Interview Pro-Tip</strong>
        <p>GraphQL is not a database replacement. It is a query parsing layer that sits in front of your database or existing REST APIs. Resolvers are simply functions that execute to fetch data from whatever database source is required.</p>
      </div>
    `
  }
];
