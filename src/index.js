import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);
