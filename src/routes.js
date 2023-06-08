import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Detail from "./pages/Detail";
import Social from "./pages/Social";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/works",
    element: <Works />,
  },
  {
    path: "/works/:slug",
    element: <Detail />,
  },
  {
    path: "/social",
    element: <Social />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
