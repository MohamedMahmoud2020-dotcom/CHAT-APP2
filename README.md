# 💬 Realtime Chat App - MERN Stack

A full-stack real-time chat application built with **MongoDB**, **Express**, **React**, **Node.js**, and **Socket.IO**. Users can sign up, log in, send messages in real-time, and update their profile pictures using Cloudinary.

---

## 🚀 Features

- 🔐 Authentication (Sign Up / Log In)
- 💬 Real-time messaging using Socket.IO
- 🖼️ Profile picture upload via Cloudinary
- 📦 MongoDB database integration
- 🍪 Cookie-based auth with secure token handling
- ⚛️ React front-end with Tailwind CSS and DaisyUI
- 🔄 Auto re-fetch of messages when sending/receiving
- 🧠 User context state management (Zustand or Redux)

---

## 📁 Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI, React Router, Axios
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, Cloudinary, Socket.IO
- **Auth:** JWT + HttpOnly cookies
- **Real-time:** WebSocket via Socket.IO

---

## 🛠️ Getting Started

### 📦 Install dependencies

#frontend
cd frontend
npm install

#backend
cd backend
npm install



## ⚙️ Create .env files
#Backend .env:
PORT=5001
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

#Frontend .env:
VITE_API_BASE_URL=http://localhost:5173

### ▶️ Run the app
-in one terminal
-cd frontend
-npm run dev

-in another terminal
-cd backend
-npm run dev

### 📂 Folder Structure
#frontend/
  ├── components/
  ├── pages/
  ├── store/
  ├── App.jsx
  └── main.jsx

#backend/
  ├── controllers/
  ├── routes/
  ├── models/
  ├── middlewares/
  └── index.js
