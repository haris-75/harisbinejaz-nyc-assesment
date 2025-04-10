# 📰 NY Times Most Viewed Articles

A React application that displays the most viewed articles from the New York Times using their public API. Built with Vite, TailwindCSS, and tested with Vitest and Cypress.

---

## 🚀 Features

- 📰 Browse most viewed articles from the NYT API
- 📆 Filter articles by time period (1, 7, or 30 days)
- 🔍 View article details
- ⏳ Loading and error states
- 📱 Fully responsive UI with TailwindCSS
- ✅ Unit and E2E testing setup

---

## 🧱 Tech Stack

- **React** + **Vite**
- **TailwindCSS** for styling
- **Cypress** for end-to-end testing
- **Vitest** + **Testing Library** for unit/component tests

---

## 📁 Project Structure

```txt
src/
├── components/         # Reusable UI components
├── containers/         # Page-level containers
├── hooks/              # Custom React hooks
├── services/           # API integration logic
├── utils/              # Utility functions
├── App.jsx             # Root component
├── main.jsx            # App entry point
tests/                  # Vitest tests
cypress/                # Cypress E2E tests
```

## 🔑 Getting Started

#### 1. Clone the repository

```bash
git clone https://github.com/haris-75/harisbinejaz-nyc-assesment
cd harisbinejaz-nyc-assesment
```

#### 2. Install dependencies

```bash
 yarn
```

#### 3. Set up environment variables

Create a `.env` file in the root with your NYT API key:

```bash
VITE_NYC_TZ_KEY=your_nyt_api_key_here
```

Get your NYT API key from: https://developer.nytimes.com

## 💻 Run the App

Start the development server:

```bash
yarn dev
```

Then open http://localhost:3000 in your browser.

## 🧪 Running Tests

#### ✅ Unit / Component Tests (Vitest)

```bash
yarn test
```

#### 🚀 End-to-End Tests (Cypress)

To open the Cypress UI:

```bash
yarn cypress
```

All Cypress API calls are mocked.

## 🛠 Build for Production

```bash
yarn build
```

## 🧪 Testing Coverage

- `useArticles` hook is tested for API success, failure, and state transitions.

- Components are tested for rendering and interaction behavior.

- Cypress tests cover homepage behavior and article navigation (with mocked API).

## 🧰 Author & License

Built by [Haris Ejaz](https://github.com/haris-75)

Licensed under the MIT License.

> Let me know if you'd like me to tailor it for deployment (e.g. Netlify, Vercel), or generate a `LICENSE` file and badges too.
