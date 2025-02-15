import React, { useState } from "react";
import axios from "axios";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { name, age };
      await axios.post("http://localhost:9000/createUser", newUser);
      alert("User Created Successfully!");
      setName("");
      setAge("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
