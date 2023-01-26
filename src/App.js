import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Socials from "./pages/Socials";
import NotFound from "./pages/NotFound";
import icon from "./images/icon.png";

function App() {
  return (
    <div className="app">
      <section>
        <div className="h-20 text-white flex items-center justify-between mx-auto max-w-6xl">
          <div className="flex gap-3 items-center">
            <img src={icon} alt="icon" className="w-8" />
            <p className="font-bold text-lg">Luqman Herifa</p>
          </div>
          <nav className="flex gap-8 font-semibold text-sm">
            <Link to="/" className="hover:text-slate-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-cyan-500">
              About
            </Link>
            <Link to="/works" className="hover:text-indigo-500">
              Works
            </Link>
            <Link to="/socials" className="hover:text-pink-500">
              Socials
            </Link>
          </nav>
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        <Route path="socials" element={<Socials />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
