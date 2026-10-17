# Playwright + MCP: AI-Assisted Test Automation POC

A proof-of-concept repository demonstrating modern, LLM-assisted end-to-end (E2E) test automation using Playwright and the Model Context Protocol (MCP). 

## 🚀 Tech Stack
- **Framework:** Playwright, TypeScript, Node.js
- **AI Integration:** `@modelcontextprotocol/sdk`, OpenAI API concepts

## 🏗️ Architecture & SDET Concepts Demonstrated
- **Accessibility-First Locators:** Utilizes strict ARIA roles (`getByRole`) instead of fragile CSS selectors to ensure test stability across UI updates.
- **LLM-Assisted Testing Preparation:** Integrated with the MCP server architecture, allowing an LLM agent to read the browser's live accessibility tree and DOM snapshot to dynamically locate elements and self-heal broken tests.
- **Asynchronous State Validation:** Demonstrates robust auto-waiting and asynchronous execution handling for dynamic web applications.

## 💻 Local Setup & Execution

**1. Install Dependencies**
```bash
npm install
