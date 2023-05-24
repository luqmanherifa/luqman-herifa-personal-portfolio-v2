import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Social from "./pages/Social";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";

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
    <div className="app min-h-screen bg-slate-900 dark:bg-slate-50">
      <section className="dark:border-slate-400 lg:border-b lg:border-slate-700 md:border-b md:border-slate-700 sm:border-b sm:border-slate-700">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between text-slate-50 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:h-16 sm:max-w-xs">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0,
            }}
          >
            <a
              href="https://luqmanherifa.site"
              className="flex items-center gap-3"
            >
              <img src="/icon.png" alt="icon" className="w-8 sm:w-7" />
            </a>
          </motion.div>
          <nav className="flex gap-8 text-sm font-medium dark:text-slate-700 lg:gap-5 lg:font-normal md:gap-4 md:font-normal sm:gap-3 sm:text-xs sm:font-normal">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: [-20, 0], opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to="/"
                className="hover:text-slate-300 dark:hover:text-slate-400"
              >
                Home
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: [-20, 0], opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/about" className="hover:text-cyan-500">
                About
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: [-20, 0], opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/works" className="hover:text-indigo-500">
                Works
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: [-20, 0], opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/social" className="hover:text-pink-500">
                Social
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: [-20, 0], opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center"
            >
              <button
                className="rounded-full bg-slate-50 p-1 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-400"
                onClick={handleThemeSwitch}
              ></button>
            </motion.div>
          </nav>
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        <Route path="works/:slug" element={<Detail />} />
        <Route path="social" element={<Social />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
