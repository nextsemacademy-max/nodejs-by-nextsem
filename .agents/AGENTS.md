# NextSem Developer Rules

## 1. Word Wrapping & Horizontal Scrolling
- **Requirement:** Ensure all code blocks (`pre`, `code`), paragraph blocks, article templates, and sandbox code segments use auto-wrapping.
- **Implementation:** Code blocks must use `white-space: pre-wrap;`, `word-wrap: break-word;`, `word-break: break-word;`, and `overflow-x: hidden;` globally on all screen sizes to prevent any horizontal scrollbars and auto-adjust text dynamically.
