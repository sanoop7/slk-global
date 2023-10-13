import React from "react";
import "./Button.css"; // Import a CSS file for styling

function Button({ name, onClick }) {
  return (
    <button className="custom-button" onClick={onClick}>
      {name} <span>&rarr;</span>
    </button>
  );
}

export default Button;
