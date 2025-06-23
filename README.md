[![Node.js Version](https://img.shields.io/badge/Node.js-v20.10.0-green.svg)](https://nodejs.org/)
[![npm Version](https://img.shields.io/badge/yarn-v3.6.4-blueviolet.svg)](https://v3.yarnpkg.com/getting-started/install)
[![React Native Version](https://img.shields.io/badge/react--native-v0.73.0-darkblue.svg)](https://reactnative.dev/)
[![React Version](https://img.shields.io/badge/react-v18.2.0-blue.svg)](https://react.dev/)

# Simon Says – React Native Game App

A mobile game based on the classic **Simon Says**, developed with React Native CLI, Redux Toolkit, and Realm for persistent state.

## 🎮 Overview

- Random color sequences that increase with every round
- High-score tracking with local and remote persistence
- Sortable results table
- Sound effects and modals
- Clean architecture with modern TypeScript best practices

---

## 💾 Persistence Strategy

> **Note:** The task did not specify how exactly the persistent storage should be implemented (e.g., whether to use an optimistic update strategy).

This implementation uses a simple sync mechanism:
- Data from the server is fetched and stored locally in Realm.
- When a new result is submitted, it is posted to the server, then synced to Realm on the next fetch.

```ts
// NOTE: In task not described how to implement persist storage or optimistic update,
// so this implementation just syncs data between API and Realm.
```

Alternative Option (Not implemented):

An optimistic update approach could be used, where:
1.	The app updates local state and Realm immediately.
2.	Then sends the update to the remote server.
3.	Handles any failure by retrying or reverting the change.

## Installation
Before you get started, make sure you have Node.js installed on your machine. Then, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install dependencies: `npm install`
4. For iOS, navigate to the iOS directory and run `cd ios & pod install`
5. Run `npm start`

## 📂 Project Structure

The project follows a feature-based modular structure:

```
src/
├── app/                  # App entry, navigation, global store setup
│   ├── App.tsx
│   ├── config/           # Root reducer/saga/store config
│   └── navigation/       # Root navigation stack
│
├── features/             # Feature-specific logic
│   ├── simonGame/        # Game logic (hooks, UI)
│   └── createResultForm/ # Form to submit game results
│
├── screens/              # App screens
│   ├── GameScreen/
│   └── ResultsScreen/
│
├── widgets/              # Reusable components composed from features/entities
│   ├── SimonSaysBoard/
│   ├── CreateResultModal/
│   └── ResultsTable/
│
├── shared/               # Shared UI components, config, and utilities
│   ├── ui/               # Inputs, buttons, text, etc.
│   ├── config/           # Theme, routes, environment vars
│   └── lib/              # Utilities and helpers
│
├── entities/             # State management and persistence for results
│   └── results/          # Reducers, actions, sagas, Realm schemas
```

Other files of note:
- `index.js`: App entry point
- `metro.config.js`, `babel.config.js`: RN configuration
- `.eslintrc.js`, `.prettierrc.js`: Code style configs
- `tsconfig.json`: TypeScript configuration
- `jest.config.js`: Testing config
- `tests/`: Unit tests

---

## 🧩 Tech Stack

- **React Native CLI** (no Expo)
- **TypeScript**
- **Redux Toolkit + Redux Saga**
- **React Navigation v6**
- **Realm** for local storage
- **Axios** for HTTP
- **Yup**, **Formik** for form handling
- **Sound-player** for UI feedback

---

## 🌐 API Integration

`.env` file example:
```.dotenv
API_URL=<url>
API_KEY=<key>

```

### Endpoints

Base URL: `https://simon.5f.wtf`

| Method | Endpoint       | Description               |
|--------|----------------|---------------------------|
| GET    | /results       | Get top results (≥10)     |
| POST   | /results       | Submit result (name/date/score) |
| GET    | /health        | Health check              |

📚 [Interactive API Docs](https://simon.5f.wtf/api-docs/)

---

## 📦 Dependencies

```json
{
  "@react-navigation/native": "^7.1.0",
  "@react-navigation/native-stack": "^7.3.16",
  "@realm/react": "^0.11.0",
  "@reduxjs/toolkit": "^2.8.2",
  "axios": "^1.10.0",
  "formik": "^2.4.6",
  "react": "^19.0.0",
  "react-is": "^19.0.0",
  "react-native": "^0.79.4",
  "react-native-reanimated": "^3.18.0",
  "react-native-safe-area-context": "^5.4.1",
  "react-native-screens": "^4.11.1",
  "react-native-sound-player": "^0.14.5",
  "react-redux": "^9.2.0",
  "realm": "^12.14.2",
  "redux": "^5.0.1",
  "redux-saga": "^1.3.0",
  "yup": "^1.6.1"
}
