import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Elements/Navbar/Navbar";
import routes from "./routes";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);
  return (
    <div className="app min-h-screen bg-slate-900 dark:bg-white">
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <div
        className="cursor-light pointer-events-none absolute h-96 w-96 rounded-full bg-slate-700"
        style={{ top: position.y - 2, left: position.x - 2 }}
      ></div>
    </div>
  );
};

export default App;
