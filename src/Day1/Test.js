import './App.css';
import React, { useState } from "react";

function Test() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("Welcome to my website");

  const handleClick = () => {
    if (name.trim() === "") {
      setMessage("Please enter your name.");
    } else {
      setMessage(`Thanks for visiting, ${name}!`);
    }
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>{message}</h1>
      <input
        name="name"
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <br /><br />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Test;
