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
      <section className="dark:border-slate-400 lg:border-b lg:border-slate-700 md:border-b md:border-slate-700 sm:border-b sm:border-slate-700">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between text-white xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:h-16 sm:max-w-xs">
          <div>
            <a
              href="https://luqmanherifa.site"
              className="flex items-center gap-3"
            >
              <img src={icon} alt="icon" className="w-8 sm:w-7" />
              {/* <p className="font-semibold text-lg sm:hidden dark:text-slate-600">
                Luqman Herifa
              </p> */}
            </a>
          </div>
          <nav className="flex gap-8 text-sm font-medium dark:text-slate-700 lg:gap-5 lg:font-normal md:gap-4 md:font-normal sm:gap-3 sm:text-xs sm:font-normal">
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
                className="rounded-full bg-white p-1 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-400"
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
