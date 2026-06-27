// ==========================================================
// NextSem – notebook-lessons-data.js
// Configured steps, regex patterns, and hint logic for notebook lessons
// ==========================================================

window.notebookLessons = {
  "http-server": {
    title: "HTTP Server (Chef Metaphor)",
    buddyStartMsg: "Hi! I'm Bubu, your study buddy. Let's build a Node.js web server together! Load the 'http' module to start.",
    steps: [
      {
        number: 1,
        title: "Step 1: Gathering the Ingredients",
        illustration: "step_ingredients.png",
        narrative: "Imagine Node.js is a chef inside a high-speed toy factory. To build a web server, the chef needs to fetch the recipe module. In Node.js, we load core modules using the keyword <strong>require()</strong>. Let's load the <strong>'http'</strong> module and save it in a variable called <strong>http</strong>.",
        goalText: "Write the code to load the http module:",
        goalCode: "const http = require('http');",
        placeholder: "// Type require line here...",
        correctRegex: /^const\s+http\s*=\s*require\(\s*['"]http['"]\s*\)\s*;?$/,
        hintLogic: function(input) {
          if (!input.includes("require")) {
            return "Make sure you use the 'require' keyword to import modules!";
          } else if (!input.includes("http")) {
            return "Double check the spelling. You need to require the module named 'http' inside quotes.";
          } else if (!input.startsWith("const")) {
            return "Make sure you create the variable using 'const' so it doesn't accidentally get reassigned.";
          } else {
            return "Check the syntax! It should be exactly: const http = require('http');";
          }
        },
        successMsg: "Success! You required the HTTP module and saved it to the http variable. Chef is ready! Module 2 unlocked. 🚀"
      },
      {
        number: 2,
        title: "Step 2: Building the Server",
        illustration: "step_stove.png",
        narrative: "Perfect! Our chef now has the HTTP module. Next, we tell the HTTP module to prepare a server. We do this using the function <strong>http.createServer()</strong>. Let's create a server and store it inside a box called <strong>server</strong>.",
        goalText: "Type the code to create the server:",
        goalCode: "const server = http.createServer();",
        placeholder: "// Type server creation line here...",
        correctRegex: /^const\s+server\s*=\s*http\.createServer\(\s*\)\s*;?$/,
        hintLogic: function(input) {
          if (!input.includes("createServer")) {
            return "Use the 'createServer' method from your loaded 'http' module!";
          } else if (!input.includes("server")) {
            return "Store the result in a const variable called 'server'.";
          } else {
            return "Check spelling! Syntax should look like: const server = http.createServer();";
          }
        },
        successMsg: "Woohoo! You created the server! Chef is standing in the kitchen ready to bake web pages. Section 3 is open!"
      },
      {
        number: 3,
        title: "Step 3: Giving it an Ear (Listening)",
        illustration: "step_listening.png",
        narrative: "Almost there! The server is built, but it is currently sitting in absolute silence. It needs an 'ear' to listen for incoming requests from the internet. We do this by calling the <strong>server.listen()</strong> function, and telling it to monitor a numerical port like <strong>3000</strong>.",
        goalText: "Type the code to make your server listen on port 3000:",
        goalCode: "server.listen(3000);",
        placeholder: "// Type listen line here...",
        correctRegex: /^server\.listen\(\s*3000\s*\)\s*;?$/,
        hintLogic: function(input) {
          if (!input.includes("listen")) {
            return "Call the 'listen()' method on your 'server' object.";
          } else if (!input.includes("3000")) {
            return "Make sure to pass the number 3000 inside the parenthesis to listen on port 3000.";
          } else {
            return "Almost there! Syntax should be exactly: server.listen(3000);";
          }
        },
        successMsg: "UNBELIEVABLE! You did it! Your server is listening on port 3000. You are officially a backend engineer! 🎉"
      }
    ]
  },
  "fs-read": {
    title: "Reading Files (Recipe Book)",
    buddyStartMsg: "Hi! Let's help Bubu and Dudu read a recipe file synchronously. Load the 'fs' module to get started!",
    steps: [
      {
        number: 1,
        title: "Step 1: Fetching the Recipe Book",
        illustration: "fs_step_1_require.png",
        narrative: "Now our Bubu and Dudu want to read recipes from a local recipe book file. In Node.js, files are read using the built-in File System module named <strong>'fs'</strong>. Let's load the <strong>'fs'</strong> module using <strong>require()</strong> and store it in a variable called <strong>fs</strong>.",
        goalText: "Write the code to load the fs module:",
        goalCode: "const fs = require('fs');",
        placeholder: "// Load the 'fs' module...",
        correctRegex: /^const\s+fs\s*=\s*require\(\s*['"]fs['"]\s*\)\s*;?$/,
        hintLogic: function(input) {
          if (!input.includes("require")) {
            return "Use the 'require()' keyword to import modules.";
          } else if (!input.includes("fs")) {
            return "Make sure you load the module named 'fs' in quotes.";
          } else if (!input.startsWith("const")) {
            return "Store the loaded module in a const variable called 'fs'.";
          } else {
            return "Check syntax! It should be exactly: const fs = require('fs');";
          }
        },
        successMsg: "Awesome! The recipe book module 'fs' is loaded. Let's fetch a recipe sheet next! 📚"
      },
      {
        number: 2,
        title: "Step 2: Scanning the Recipe Sheet",
        illustration: "fs_step_2_read.png",
        narrative: "Excellent! Now let's tell Bubu & Dudu to read a recipe file named <strong>'info.txt'</strong> synchronously, decoding it as <strong>'utf8'</strong> text. We use the function <strong>fs.readFileSync('info.txt', 'utf8')</strong> and store it in a variable called <strong>data</strong>.",
        goalText: "Read info.txt synchronously and store it in 'data':",
        goalCode: "const data = fs.readFileSync('info.txt', 'utf8');",
        placeholder: "// Read the file synchronously...",
        correctRegex: /^const\s+data\s*=\s*fs\.readFileSync\(\s*['"]info\.txt['"]\s*,\s*['"]utf8['"]\s*\)\s*;?$/,
        hintLogic: function(input) {
          if (!input.includes("readFileSync")) {
            return "Use the synchronous reading function 'fs.readFileSync()'.";
          } else if (!input.includes("info.txt")) {
            return "Pass the filename 'info.txt' as the first parameter.";
          } else if (!input.includes("utf8")) {
            return "Remember to specify the character encoding 'utf8' as the second parameter so it reads as plain text!";
          } else if (!input.startsWith("const data")) {
            return "Store the output in a const variable named 'data'.";
          } else {
            return "Double check syntax! It should look like: const data = fs.readFileSync('info.txt', 'utf8');";
          }
        },
        successMsg: "Fantastic! The file has been successfully read and loaded into the 'data' variable. Let's look at the recipe!"
      },
      {
        number: 3,
        title: "Step 3: Reading the Content Aloud",
        illustration: "lesson_fs.png",
        narrative: "You've read the file successfully! Now let's print the loaded recipe stored in the <strong>data</strong> variable to the terminal console so Bubu and Dudu can see it. We do this using <strong>console.log(data);</strong>.",
        goalText: "Log the content stored in data:",
        goalCode: "console.log(data);",
        placeholder: "// Print data to console...",
        correctRegex: /^console\.log\(\s*data\s*\)\s*;?$/,
        hintLogic: function(input) {
          if (!input.includes("console.log")) {
            return "Use 'console.log()' to print output.";
          } else if (!input.includes("data")) {
            return "Pass the 'data' variable inside the console.log parentheses.";
          } else {
            return "Check syntax! It should be exactly: console.log(data);";
          }
        },
        successMsg: "Delicious! You successfully read the file and logged it to the screen. Bubu and Dudu can now cook the meal! 🍽️"
      }
    ]
  },
  "custom-modules": {
    title: "Custom Modules (Sous Chef)",
    buddyStartMsg: "Hi! Let's help Bubu and Dudu create and export a math module. Attach the add function first!",
    steps: [
      {
        number: 1,
        title: "Step 1: Mixing the Math Helper",
        illustration: "lesson_modules.png",
        narrative: "Bubu and Dudu are acting as chef and sous chef. The sous chef wants to share a custom math recipe with the main chef. In Node.js, we export custom helper functions by attaching them to the global <strong>exports</strong> object. Let's export an <strong>add</strong> arrow function: <strong>exports.add = (a, b) => a + b;</strong>.",
        goalText: "Export the add function on exports:",
        goalCode: "exports.add = (a, b) => a + b;",
        placeholder: "// Export the add function...",
        correctRegex: /^exports\.add\s*=\s*\(\s*a\s*,\s*b\s*\)\s*=>\s*a\s*\+\s*b\s*;?$/,
        hintLogic: function(input) {
          if (!input.includes("exports.add")) {
            return "Attach the function to the exports object as 'exports.add'.";
          } else if (!input.includes("=>")) {
            return "Write it as an arrow function: (a, b) => a + b";
          } else {
            return "Check syntax! It should look exactly like: exports.add = (a, b) => a + b;";
          }
        },
        successMsg: "Splendid! The math module now exports the 'add' function. Let's load this module in our main app script next!"
      },
      {
        number: 2,
        title: "Step 2: Passing the Math Helper",
        illustration: "lesson_modules.png",
        narrative: "Great! Now let's tell Bubu to load our local custom math module <strong>'./math'</strong>. For local files, we pass the relative path (starting with <strong>'./'</strong>) into the <strong>require()</strong> function. Let's load the module and store it inside a variable called <strong>math</strong>.",
        goalText: "Load local math module and store in math:",
        goalCode: "const math = require('./math');",
        placeholder: "// Require local math module...",
        correctRegex: /^const\s+math\s*=\s*require\(\s*['"]\.\/math['"]\s*\)\s*;?$/,
        hintLogic: function(input) {
          if (!input.includes("require")) {
            return "Use the 'require' keyword to load modules.";
          } else if (!input.includes("./math")) {
            return "Make sure to write the local path './math' in quotes inside the require parentheses.";
          } else if (!input.startsWith("const math")) {
            return "Store the imported module in a const variable called 'math'.";
          } else {
            return "Double check spelling! Syntax should look like: const math = require('./math');";
          }
        },
        successMsg: "Superb! The custom math module is successfully loaded. Now let's use it to calculate some recipe ratios!"
      },
      {
        number: 3,
        title: "Step 3: Serving the Combined Result",
        illustration: "lesson_modules.png",
        narrative: "We have the math module loaded. Now, let's call the exported <strong>math.add()</strong> helper to add <strong>5</strong> and <strong>10</strong>, printing the result to the console. We do this inside a <strong>console.log()</strong> statement.",
        goalText: "Log the result of math.add(5, 10):",
        goalCode: "console.log(math.add(5, 10));",
        placeholder: "// Add 5 and 10 and print result...",
        correctRegex: /^console\.log\(\s*math\.add\(\s*5\s*,\s*10\s*\)\s*\)\s*;?$/,
        hintLogic: function(input) {
          if (!input.includes("console.log")) {
            return "Wrap the entire calculation in 'console.log()'.";
          } else if (!input.includes("math.add")) {
            return "Call the 'add()' method on your 'math' object.";
          } else if (!input.includes("5") || !input.includes("10")) {
            return "Pass the numbers 5 and 10 as parameters.";
          } else {
            return "Check spelling and matching parentheses! Syntax should be exactly: console.log(math.add(5, 10));";
          }
        },
        successMsg: "Fantastic! You exported a helper function, imported it locally, and called it successfully! You've mastered Custom Modules! 🌟"
      }
    ]
  }
};
