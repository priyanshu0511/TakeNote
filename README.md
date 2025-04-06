# **TakeNote – A MERN Stack Note-Taking App**

TakeNote is a full-stack web application that allows users to securely create, view, edit, and delete personal notes. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), it provides a simple and clean interface with user authentication and private dashboards. Each user’s notes are accessible only to them after logging in.

---

## 🚀 Features

- **User Authentication**  
  Users can sign up and log in securely. Passwords are hashed using bcrypt and JWTs are used for session management.

- **Private Notes Dashboard**  
  Logged-in users see only their own notes. No one else has access to them.

- **CRUD Functionality**  
  Users can create, read, update, and delete their notes.

- **Clean UI with Tailwind CSS**  
  The frontend is styled using TailwindCSS, providing a responsive and minimal design.

- **Route Protection**  
  Certain pages like creating or viewing a note are accessible only when the user is logged in.

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT (JSON Web Tokens), bcrypt  
- **Deployment**:  
  - Frontend: [Vercel](https://vercel.com)  
  - Backend: [Render](https://render.com)

---

## 🌐 Live Links

- [https://take-note-isrj.vercel.app](https://take-note-isrj.vercel.app)  
---

## 🧾 Environment Variables

### On the backend

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=https://your-frontend-url.vercel.app
SECRET=your_jwt_secret
```
### On the Frontend

Create a `.env` file inside your React project root:

```env
VITE_REACT_APP_BACKEND_BASEURL=https://your-backend-url..com/ 
or http://localhost:5000 (For Testing)
```
##  How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/priyanshu0511/TakeNote.git
cd takenote
```
### 2. Start the backend

```base
cd backend
npm install
npm start
```

### 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

Note: Make sure MongoDB is running locally, or configure a cloud database like MongoDB Atlas.

## Author

Made with dedication by Priyanshu.
