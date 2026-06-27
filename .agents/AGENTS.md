# NextSem Developer Rules

## 1. Word Wrapping & Horizontal Scrolling
- **Requirement:** Ensure all code blocks (`pre`, `code`), paragraph blocks, article templates, and sandbox code segments use auto-wrapping. **NEVER add horizontal scrolls on any page, wrapper, or component. If any horizontal scrolls/scrollbar properties are discovered or introduced, immediately remove them and auto-update the application.**
- **Implementation:** Code blocks and pages must use `white-space: pre-wrap;`, `word-wrap: break-word;`, `word-break: break-word;`, and `overflow-x: hidden !important;` globally on all screen sizes to prevent any horizontal scrollbars and auto-adjust text dynamically.

## 2. Google AdSense Script Integration
- **Requirement:** Every HTML page (existing, modified, or newly created in the future) must include the Google AdSense and AMP auto ads script tags in the `<head>` and the `<amp-auto-ads>` tag in the `<body>`.
- **Code Snippets:**
  - **In the `<head>` tag** (before `</head>`):
    ```html
    <!-- amp ads -->
    <script async custom-element="amp-auto-ads" src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"></script>
    <!-- end of amp ads -->
    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4242865347895866" crossorigin="anonymous"></script>
    <!-- end of ads -->
    ```
  - **In the `<body>` tag** (right after `<body>` starts):
    ```html
    <!-- amp ads -->
    <amp-auto-ads type="adsense" data-ad-client="ca-pub-4242865347895866"></amp-auto-ads>
    <!-- end of amp ads -->
    ```

## 3. Automated Firebase Deployment
- **Requirement:** Automatically run `firebase deploy` in the workspace directory after completing any code changes or file modifications so that the live website is always in sync with local updates.
