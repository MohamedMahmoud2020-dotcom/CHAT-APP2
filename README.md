# 💬 Realtime Chat App - MERN Stack

A full-stack real-time chat application built with **MongoDB**, **Express**, **React**, **Node.js**, and **Socket.IO**. Users can sign up, log in, chat in real-time, and update profile pictures via Cloudinary.

---

## 🚀 Features

- 🔐 **Authentication** (Sign Up / Log In)
- 💬 **Real-time messaging** using Socket.IO
- 🖼️ **Profile picture upload** with Cloudinary
- 📦 **MongoDB** database for message persistence
- 🍪 **JWT & HttpOnly cookies** for secure auth
- ⚛️ **React + TailwindCSS + DaisyUI** frontend
- 🔄 Auto **re-fetching messages** on updates
- 🧠 Global state via Zustand (or Redux optional)

---

## 📁 Tech Stack

**Frontend:**  
React, Tailwind CSS, DaisyUI, React Router, Axios

**Backend:**  
Node.js, Express.js, MongoDB, Mongoose, Socket.IO, Cloudinary

**Auth & Real-time:**  
JWT (HttpOnly cookies), WebSocket via Socket.IO

---

## 🛠️ Getting Started

### 📦 Install Dependencies

```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

### ⚙️ Create .env Files

####🔧 Backend .env
```env
PORT=5001
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLIENT_URL=http://localhost:5173
```
### 🔧 Frontend .env
```env
VITE_API_BASE_URL=http://localhost:5001/api
```

###▶️ Run the App
####Open two terminals:

####Terminal 1: Frontend
```bash
cd frontend
npm run dev
```
####Terminal 2: Backend
```bash
cd backend
npm run dev
```

## 👨‍💻 Author
Made with ❤️ by Mohamed Mahmoud

GitHub: MohamedMahmoud2020-dotcom

LinkedIn: https://www.linkedin.com/in/mohamed-mahmoud-169a061b2/

