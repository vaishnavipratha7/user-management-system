🚀 User Management System (MERN Stack) – Bootstrapped with Create React App
This is a full-stack MERN application for user management, built using React.js, Node.js, Express, and MongoDB. The project was bootstrapped using Create React App and was enhanced with additional functionalities, UI improvements, and a dark mode toggle.

🔹 Trainer Helped: The functionality part was implemented with guidance from my trainer.
🔹 Styled with Bootstrap: The UI was improved using Bootstrap for better responsiveness.

📌 Features
✅ Add Users – Create new users with name & age
✅ Update Users – Edit user details
✅ Delete Users – Remove users from MongoDB
✅ Fetch Users – Display user list from MongoDB
✅ Dark/Light Mode – Smooth theme switch
✅ Bootstrap Integration – Enhanced UI with Bootstrap

🖼️ UI Preview
Light Mode:


Dark Mode:


🛠️ Tech Stack
Frontend:
React.js (Hooks, Context API)
Bootstrap (Styling)
Axios (API Calls)
Create React App (CRA)
Backend:
Node.js + Express.js (REST API)
MongoDB + Mongoose (Database)
CORS (Cross-Origin Resource Sharing)


📂 Project Structure
my-app/
│-- server/
│   │-- models/
│   │   └── User.js
│   │-- controllers/
│   │   └── userController.js
│   │-- routes/
│   │   └── userRoutes.js
│   │-- server.js
│   │-- .env
│-- client/
│   │-- src/
│   │   ├── components/
│   │   │   ├── CreateUsers.jsx
│   │   │   ├── UserList.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ThemeContext.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── styles.css
│-- package.json
│-- README.md

⚙️ Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/vaishnavipratha7/user-management-system.git
cd user-management-system

2️⃣ Backend Setup (Node.js + Express + MongoDB)
   Step 1: Navigate to the backend directory
cd server

   Step 2: Install backend dependencies
npm install

   Step 3: Configure .env file inside server/
MONGO_URI=your-mongodb-connection-string
PORT=9000

Step 4: Start the backend server
npm start

✅ Runs the Express.js server on http://localhost:9000
✅ Connects to MongoDB Compass or Atlas

3️⃣ Frontend Setup (React.js + Bootstrap)
   Step 1: Navigate to the frontend directory
cd ../client

   Step 2: Install frontend dependencies
npm install

   Step 3: Start the React app
npm start

✅ Runs the React frontend on http://localhost:3000

🔗 API Routes (Backend - Express.js & MongoDB)
Method	Endpoint	Description
GET	/users	Fetch all users
POST	/createUser	Add a new user
DELETE	/users/:id	Delete a user
PUT	/users/:id	Update user details
GET	/users/:id	Fetch user by ID
📜 Backend Code (Express.js + MongoDB)
📝 server/routes/userRoutes.js

const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.get('/users', userController.getAllUsers);
router.post('/createUser', userController.createUser);
router.delete('/users/:id', userController.deleteUser);
router.put('/users/:id', userController.updateUser);
router.get('/users/:id', userController.getUsersById);

module.exports = router;
📝 server/controllers/userController.js
const User = require('../models/User');

// Fetch all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create new user
exports.createUser = async (req, res) => {
  try {
    const { name, age } = req.body;
    const newUser = new User({ name, age });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Update Failed' });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Deletion Failed' });
  }
};

// Fetch user by ID
exports.getUsersById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: 'User Not Found' });
  }
};

📌 Improvements & Future Enhancements
🔹 Edit/Delete Users directly in UI
🔹 Authentication (Login/Signup with JWT)
🔹 Deploy on Netlify (Frontend) & Render (Backend)
🔹 Pagination & Search Feature

💡 Lessons Learned
This project helped me understand:

React Context API for global theme state
Bootstrap for UI improvements
Express & MongoDB CRUD operations
Dark mode UI enhancements
Handling API calls with Axios


📢 Contributing
Feel free to fork this repo, open issues, and submit PRs!

📢 Want to connect?
📍 LinkedIn: (www.linkedin.com/in/vaishnavipratha7)
📍 GitHub: (https://github.com/vaishnavipratha7)


⭐ If you liked this project, give it a star on GitHub! 🌟
