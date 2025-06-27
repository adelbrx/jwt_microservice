# 🔐 JWT Microservice

A lightweight Node.js microservice for creating and verifying JSON Web Tokens (JWT), built with Express. Ideal for microservices architecture, headless apps, or custom authentication flows.

---

## 🚀 Features

- 📤 Sign JWT tokens with a payload and secret
- 🔐 Verify and decode JWT tokens
- 🌍 CORS enabled (Allow All)
- ⚡ Minimal and fast
- 🌱 Ready to deploy (Vercel, Netlify, Railway, etc.)

---

## 📁 Project Structure

├── controllers/
│ └── jwtController.js
├── middlewares/
│ └── validationRequest.js
├── routes/
│ └── jwtRoutes.js
├── services/
│ └── jwtService.js
├── index.js
├── package.json
└── README.md

---

## 🛠️ Installation

```bash
git clone https://github.com/your-username/jwt-microservice.git
cd jwt-microservice
npm install
```

---

## 🧪 Running Locally

```bash
node index.js
#or
nodemon index.js
#or
npm run start
#or
npm run server
```

Server will be available at:

- http://localhost:3000
  or here in render :
- https://jwt-microservice-b6vq.onrender.com

# 📬 JWT Microservice

This is a lightweight Node.js microservice for signing and verifying JSON Web Tokens (JWTs). It exposes two HTTP endpoints:

- `POST /jwt/sign` to create a signed token.
- `POST /jwt/decode` to decode a token.
- `POST /jwt/verify` to verify a token.

---

## 🚀 Endpoints

All endpoints accept and return **JSON**.

---

### 🔏 POST `/jwt/sign`

**Description**: Create and return a signed JWT token.

#### Request Body

```json
{
  "payload": {
    "userId": 1,
    "email": "user@example.com"
  },
  "secret": "your-secret-key"
}
```

### 🔏 POST `/jwt/decode`

**Description**: Decode signed JWT toekn and return an object.

#### Request Body

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 🔏 POST `/jwt/verify`

**Description**: Verify signed JWT token with a secret key.

#### Request Body

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "secret": "your-secret-key"
}
```
