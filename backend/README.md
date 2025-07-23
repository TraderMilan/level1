# 🧠 Tweets App – Backend (NestJS)

This is the backend part of a minimalist Twitter clone built with **NestJS** and **MongoDB**.

---

## ✅ Requirements

- Node.js >= 18
- MongoDB 

---

## ⚙️ Installation

```bash
# 1. Install dependencies
npm install

# 2. Create your environment file
cp .env.example .env
```

---

## 🚀 Quick Start

```bash
npm run start:dev
```

## 🔐 Environment Variables

These environment variables must be defined in your `.env` file:

| Variable       | Description                             | Example                                |
|----------------|-----------------------------------------|----------------------------------------|
| `MONGODB_URI`  | MongoDB connection string               | `mongodb://localhost:27017/tweets-app` |
| `PORT`         | Port to run the NestJS backend on       | `3000`                                 |
| `JWT_SECRET`   | Secret key used to sign JWT tokens      | `your_jwt_secret_here`                 |

➡️ Use the provided [`.env.example`](./.env.example) file as a reference.

