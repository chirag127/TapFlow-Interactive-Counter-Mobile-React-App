# TapCounter Engagement Analytics React Native Expo App

---

![Build Status](https://img.shields.io/github/actions/workflow/status/chirag127/TapCounter-Engagement-Analytics-React-Native-Expo-App/ci.yml?style=flat-square&label=Build%20Status)
![Coverage](https://img.shields.io/codecov/c/gh/chirag127/TapCounter-Engagement-Analytics-React-Native-Expo-App?style=flat-square&label=Coverage)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow?style=flat-square&logo=javascript)
![Framework](https://img.shields.io/badge/Framework-React%20Native%20%7C%20Expo-20232A?style=flat-square&logo=react)
![Lint](https://img.shields.io/badge/Lint-Biome-1E1E1E?style=flat-square&logo=biome)
![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey?style=flat-square)
![Stars](https://img.shields.io/github/stars/chirag127/TapCounter-Engagement-Analytics-React-Native-Expo-App?style=flat-square)

[⭐️ Star this repo](https://github.com/chirag127/TapCounter-Engagement-Analytics-React-Native-Expo-App)

---

## 🎯 TL;DR
**TapCounter** provides instant tap‑tracking, real‑time analytics, and themeable visualizations for rapid prototyping of user‑engagement flows on iOS and Android.  It empowers product teams to experiment with interaction patterns without writing boilerplate code.

---

## 📐 Architecture Overview
mermaid
flowchart LR
    A[Expo CLI] --> B[React Native App]
    B --> C{Feature Modules}
    C --> D[Tap Tracker]
    C --> E[Analytics Engine]
    C --> F[Theme Manager]
    D --> G[Local Storage]
    E --> H[Remote Sync]
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#bbf,stroke:#333,stroke-width:2px


---

## 📖 Table of Contents
- [🚀 Quick Start](#-quick-start)
- [🛠️ Development Scripts](#-development-scripts)
- [🤖 AI Agent Directives](#-ai-agent-directives)
- [📜 License](#-license)

---

## 🚀 Quick Start
bash
# Clone the repository
git clone https://github.com/chirag127/TapCounter-Engagement-Analytics-React-Native-Expo-App.git
cd TapCounter-Engagement-Analytics-React-Native-Expo-App

# Install dependencies using Yarn (or npm)
yarn install   # or: npm install

# Run on a simulator or device
expo start


---

## 🛠️ Development Scripts
| Script | Description |
|--------|-------------|
| `dev` | Starts Expo in development mode |
| `test` | Runs unit tests with Vitest |
| `e2e` | Executes Playwright end‑to‑end suite |
| `lint` | Lints and formats code using Biome |
| `build` | Generates production bundle |

All scripts are defined in `package.json`.

---

## <details><summary>🤖 AI Agent Directives</summary>

### Tech Stack Definition
- **Language:** JavaScript (ES2023) with strict mode enabled.
- **Runtime:** Expo Go on iOS/Android.
- **Framework:** React Native (v0.74) + Expo SDK (v50).
- **Package Manager:** Yarn 4 (Berry) – fallback to npm.
- **Lint/Format:** Biome (`biome.json` at root).
- **Testing:** Vitest for unit, Playwright for e2e.
- **CI/CD:** GitHub Actions (`.github/workflows/ci.yml`).

### Architectural Patterns
- **Feature‑Sliced Design (FSD):** Each feature lives in `src/features/<feature-name>/` containing UI, state, and domain logic.
- **SOLID Principles:**
  - *Single Responsibility* – each module handles one concern.
  - *Open/Closed* – extensible via hooks and context providers.
  - *Liskov Substitution* – interchangeable UI components.
  - *Interface Segregation* – thin interfaces for services.
  - *Dependency Inversion* – high‑level modules depend on abstractions.
- **DRY & YAGNI:** Shared utilities live in `src/shared/`; no premature abstractions.

### Verification Commands
bash
# Lint & auto‑fix
yarn lint

# Run unit tests with coverage
yarn test --coverage

# Run end‑to‑end tests (requires Playwright browsers installed)
yarn e2e

# Full CI simulation locally
act -j ci


These commands align with the CI pipeline and guarantee code quality before merge.

</details>

---

## 📜 License
This project is licensed under the **Creative Commons Attribution‑NonCommercial 4.0 International (CC BY‑NC 4.0)**. See the `LICENSE` file for details.
