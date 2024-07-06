import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import "./index.css"; // Import the global CSS file
import App from "./App"; // Import the main App component

const rootElement = document.getElementById("root"); // Get the root element
const root = ReactDOM.createRoot(rootElement); // Create a root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
