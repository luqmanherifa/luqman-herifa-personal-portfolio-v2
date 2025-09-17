import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Elements/Navbar/Navbar";
import routes from "./routes";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="app min-h-screen bg-slate-900 dark:bg-slate-100">
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
