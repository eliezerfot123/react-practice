import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <TaskContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />

      </Routes>
    </BrowserRouter>
    </TaskContextProvider>
  </React.StrictMode>
);
