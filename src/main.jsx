import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import CivilizationDetail from "./components/CivilizationDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <TaskContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<CivilizationDetail />} />

      </Routes>
    </BrowserRouter>
    </TaskContextProvider>
  </React.StrictMode>
);
