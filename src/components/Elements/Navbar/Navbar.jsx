import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSun,
  faMoon,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const navbarData = [
    {
      id: 1,
      text: "Home",
      page: "/",
      css: "hover:text-slate-300 dark:hover:text-blue-800",
      active: "text-slate-300 dark:text-blue-800",
      delay: "0.2",
    },
    {
      id: 2,
      text: "Works",
      page: "/works",
      css: "hover:text-blue-500 dark:hover:text-blue-800",
      active: "text-blue-500 dark:text-blue-800",
      delay: "0.3",
    },
    {
      id: 3,
      text: "Social",
      page: "/social",
      css: "hover:text-yellow-400 dark:hover:text-blue-800",
      active: "text-yellow-400 dark:text-blue-800",
      delay: "0.4",
    },
  ];

  return (
    <section className="dark:border-blue-600 lg:border-b lg:border-slate-700 md:border-b md:border-slate-700 sm:border-b sm:border-slate-700">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between text-slate-100 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:h-16 sm:max-w-xs">
        <Icon />
        <nav className="flex gap-8 text-sm font-medium dark:text-blue-600 lg:gap-5 lg:font-normal md:gap-4 md:font-normal sm:hidden sm:gap-3 sm:text-xs sm:font-normal">
          {navbarData.map((data) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: [-20, 0], opacity: 1 }}
                transition={{ delay: data.delay }}
                key={data.id}
              >
                <div>
                  <Link
                    to={`${data.page}`}
                    className={
                      location.pathname === data.page
                        ? `${data.css} ${data.active}`
                        : data.css
                    }
                  >
                    {data.text}
                  </Link>
                </div>
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: [-20, 0], opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center"
          >
            <button
              className="transition duration-500 ease-in-out"
              onClick={handleThemeSwitch}
            >
              {theme === "dark" ? (
                <FontAwesomeIcon
                  icon={faMoon}
                  className="w-5 transform text-base hover:text-blue-800"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faSun}
                  className="w-5 transform text-base hover:text-slate-300"
                />
              )}
            </button>
          </motion.div>
        </nav>
        <div className="hidden items-center sm:flex">
          <motion.button
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faTimes}
                className="flex text-2xl hover:text-slate-300 dark:text-blue-600 dark:hover:text-blue-800"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="flex text-xl hover:text-slate-300 dark:text-blue-600 dark:hover:text-blue-800"
              />
            )}
          </motion.button>
        </div>
      </div>
      <nav className="bg-slate-900 dark:bg-slate-100">
        {isMobileMenuOpen && (
          <div className="hidden sm:block">
            <div className="mx-auto max-w-xs">
              <div className="pb-5 text-slate-100 dark:text-blue-600">
                {navbarData.map((data) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ y: [-20, 0], opacity: 1 }}
                      transition={{ delay: data.delay }}
                      key={data.id}
                      className="mb-2"
                    >
                      <Link
                        to={`${data.page}`}
                        className={
                          location.pathname === data.page
                            ? `${data.css} ${data.active}`
                            : data.css
                        }
                      >
                        {data.text}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ y: [-20, 0], opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center"
                >
                  <button
                    className="transition duration-500 ease-in-out"
                    onClick={handleThemeSwitch}
                  >
                    {theme === "dark" ? (
                      <FontAwesomeIcon
                        icon={faMoon}
                        className="w-5 transform text-base hover:text-slate-400 dark:hover:text-blue-800"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faSun}
                        className="w-5 transform text-base hover:text-slate-300"
                      />
                    )}
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
