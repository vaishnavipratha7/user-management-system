import React from "react";
import "./App.css";
import CreateUsers from "./Components/CreateUsers";
import UserList from "./Components/UserList";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <div className="container">
          <h2>👥 User Management System</h2>
          <CreateUsers />
          <UserList />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
