# How to Run the Visualization Application

Follow these step-by-step instructions to configure, launch, and run the Data Lineage & Provenance Visualization project locally[cite: 1].

---

## 📋 1. Prerequisites

Ensure you have the following installed on your machine[cite: 1]:
* **Node.js** (v16.0.0 or higher recommended) — [Download Node.js](https://nodejs.org/)[cite: 1]
* **npm** (comes bundled with Node.js)[cite: 1]

---

## ⚡ 2. Terminal Navigation & Dependency Setup

1. Open **PowerShell**, **Command Prompt**, or your terminal[cite: 1].
2. Navigate to your project root folder[cite: 1]:

   ```powershell
   cd "c:\Users\josem\OneDrive - Universidade de Aveiro\JMM\Docs\Investigacao\OurCode\Provenance\Visualization"
   ```[cite: 1]

3. Install the required Node packages (**D3.js**, **D3-Sankey**, **DuckDB-WASM**)[cite: 1]:

   ```bash
   npm install
   ```[cite: 1]

---

## ⚙️ 3. Configure `package.json`

To ensure `npm run dev` starts the frontend server directly without calling Python scripts, open your `package.json` file and make sure the `"scripts"` section includes `"dev": "vite"`[cite: 1]:

```json
{
  "name": "visualization",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@duckdb/duckdb-wasm": "^1.33.1-dev57.0",
    "d3": "^7.9.0",
    "d3-sankey": "^0.12.3"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```[cite: 1]

---

## 🚀 4. Launch the Development Server

You can launch the web application using either of the following commands[cite: 1]:

* **Option A (Standard):**
  ```bash
  npm run dev
  ```[cite: 1]

* **Option B (Direct execution without updating package.json):**
  ```bash
  npx vite
  ```[cite: 1]

---

## 🌐 5. Open the Web Application

Once Vite starts, you will see output in your terminal[cite: 1]:

```text
  VITE v5.x.x  ready in 320 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```[cite: 1]

1. Open your browser (Chrome, Edge, or Firefox)[cite: 1].
2. Navigate to **`http://localhost:5173/`**[cite: 1].

---

## 🔍 6. Troubleshooting Common Issues

### Issue 1: Port `5173` is already in use
If another application is running on port 5173, Vite will automatically select the next available port (e.g., `5174`)[cite: 1]. Check your terminal output for the active URL[cite: 1]. To force port 5173, run[cite: 1]:
```bash
npx vite --port 5173
```[cite: 1]

### Issue 2: DuckDB-WASM fails to load
DuckDB-WASM relies on WebAssembly and Web Worker features that require an active HTTP server context[cite: 1]. Always open the project using `http://localhost:5173/` rather than double-clicking `index.html` directly from your file system[cite: 1].