import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Social from "./pages/Social";
import NotFound from "./pages/NotFound";
import icon from "./images/icon.png";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  useEffect(() => {}, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="app min-h-screen bg-slate-900 dark:bg-white">
      <section className="sm:border-b sm:border-slate-700 md:border-b md:border-slate-700 lg:border-b lg:border-slate-700 dark:border-slate-400">
        <div className="h-20 text-white flex items-center justify-between mx-auto max-w-6xl sm:h-16 sm:max-w-xs md:max-w-lg lg:max-w-xl xl:max-w-4xl">
          <div>
            <a
              href="https://luqmanherifa.site"
              className="flex gap-3 items-center"
            >
              <img src={icon} alt="icon" className="w-8 sm:w-7" />
              {/* <p className="font-semibold text-lg sm:hidden dark:text-slate-600">
                Luqman Herifa
              </p> */}
            </a>
          </div>
          <nav className="flex gap-8 font-medium text-sm sm:text-xs dark:text-slate-700 sm:font-normal md:font-normal lg:font-normal sm:gap-3 md:gap-4 lg:gap-5">
            <Link
              to="/"
              className="hover:text-slate-300 dark:hover:text-slate-400"
            >
              Home
            </Link>
            <Link to="/about" className="hover:text-cyan-500">
              About
            </Link>
            <Link to="/works" className="hover:text-indigo-500">
              Works
            </Link>
            <Link to="/social" className="hover:text-pink-500">
              Social
            </Link>
            <div className="flex items-center">
              <button
                className="bg-white hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-400 rounded-full p-1"
                onClick={handleThemeSwitch}
              ></button>
            </div>
          </nav>
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        <Route path="social" element={<Social />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
