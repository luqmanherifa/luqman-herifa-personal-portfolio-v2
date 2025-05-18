import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Elements/Navbar/Navbar";
import routes from "./routes";

const App = () => {
  return (
    <div className="app min-h-screen bg-slate-900 dark:bg-white">
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
