# TapCounter Engagement Analytics React Native Expo App

[![Build Status](https://github.com/chirag127/TapCounter-Engagement-Analytics-React-Native-Expo-App/actions/workflows/ci.yml/badge.svg?branch=main&style=flat-square)](https://github.com/chirag127/TapCounter-Engagement-Analytics-React-Native-Expo-App/actions)
[![Coverage](https://codecov.io/gh/chirag127/TapCounter-Engagement-Analytics-React-Native-Expo-App/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/chirag127/TapCounter-Engagement-Analytics-React-Native-Expo-App)
[![Tech Stack](https://img.shields.io/badge/Tech-JavaScript%20%7C%20React%20Native%20%7C%20Expo-ff69b4?style=flat-square)]()
[![Lint](https://img.shields.io/badge/Lint-Biome-4EAA25?style=flat-square)]()
[![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey?style=flat-square)](https://github.com/chirag127/TapCounter-Engagement-Analytics-React-Native-Expo-App/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/chirag127/TapCounter-Engagement-Analytics-React-Native-Expo-App?style=flat-square)](https://github.com/chirag127/TapCounter-Engagement-Analytics-React-Native-Expo-App)

> **Star ⭐ this repo** to stay updated with new features and improvements!

## 🎯 TL;DR

TapCounter empowers mobile developers and UX researchers to instantly capture, visualize, and analyze user tap interactions, delivering live counters, customizable themes, and exportable analytics for rapid prototyping.

## 📂 Project Structure


TapCounter-Engagement-Analytics-React-Native-Expo-App/
├─ .github/
│  └─ workflows/
│     └─ ci.yml
├─ src/
│  ├─ components/
│  │  └─ TapButton.tsx
│  ├─ screens/
│  │  └─ HomeScreen.tsx
│  ├─ utils/
│  │  └─ analytics.ts
│  └─ App.js
├─ assets/
│  ├─ icons/
│  └─ images/
├─ tests/
│  └─ unit/
│     └─ TapButton.test.js
├─ scripts/
│  └─ lint.js
├─ .gitignore
├─ app.json
├─ babel.config.js
├─ package.json
└─ README.md


## 📖 Table of Contents

- [TL;DR](#-tl-dr)
- [Project Structure](#-project-structure)
- [Installation](#installation)
- [Scripts](#scripts)
- [Development Standards](#development-standards)
- [AI Agent Directives](#-ai-agent-directives)
- [Contributing](#contributing)
- [License](#license)

## 🛠️ Installation

sh
git clone https://github.com/chirag127/TapCounter-Engagement-Analytics-React-Native-Expo-App.git
cd TapCounter-Engagement-Analytics-React-Native-Expo-App
npm install
npm run ios   # or npm run android


## 📜 Scripts

| Script | Description |
|--------|-------------|
| `npm run start` | Launch Expo development server |
| `npm run ios` | Run app on iOS simulator |
| `npm run android` | Run app on Android emulator |
| `npm run test` | Execute unit tests with Jest/Vitest |
| `npm run lint` | Run Biome linting and auto‑formatting |
| `npm run build` | Create production bundle (Expo export) |

## 🏗️ Development Standards

- **Code Quality:** Biome for linting and formatting (`npm run lint`).
- **Testing:** Jest (or Vitest) for unit tests (`npm run test`).
- **Continuous Integration:** GitHub Actions workflow runs lint, test, and builds on every push.
- **Architecture:** Feature‑sliced design – components grouped by feature, utilities separated, and UI strictly declarative.
- **Principles:** SOLID, DRY, YAGNI, and Type‑Safety (via JSDoc/PropTypes).

## 🤖 AI Agent Directives

<details>
<summary>Show Agent Directives</summary>

**Tech Stack Definition**
- **Language:** JavaScript (ES2022)
- **Framework:** React Native (Expo SDK 51)
- **State Management:** React Context + Hooks
- **Analytics:** Custom utility sending events to local storage / remote endpoint

**Architectural Patterns**
- **Feature‑Sliced Design (FSD):** UI, state, and utilities are isolated per feature.
- **SOLID Principles:**
  - *Single Responsibility*: Each component handles a single UI concern.
  - *Open/Closed*: Extensible themes via config objects.
- **DRY & YAGNI:** Shared styles extracted to `assets/styles/`, no premature abstractions.

**Verification Commands**
sh
# Lint & format
npm run lint

# Unit tests
npm run test

# CI verification (locally)
npm run ci   # Executes lint, test, and build sequentially


**Self‑Healing Hooks**
- On lint failures, Biome auto‑fixes (`npm run lint -- --fix`).
- On test failures, CI annotates failures for rapid rollback.

</details>

## 🤝 Contributing

Please read [CONTRIBUTING.md](https://github.com/chirag127/TapCounter-Engagement-Analytics-React-Native-Expo-App/blob/main/CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the **Creative Commons Attribution‑NonCommercial 4.0 International (CC BY‑NC 4.0)**. See the [LICENSE](https://github.com/chirag127/TapCounter-Engagement-Analytics-React-Native-Expo-App/blob/main/LICENSE) file for details.

---

*Built with ❤️ by the Apex Technical Authority team.*