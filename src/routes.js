import Home from "./pages/Home";
import Hero from "./pages/Hero";
import Works from "./pages/Works";
import Explorations from "./pages/Explorations";
import DetailWeb from "./pages/DetailWeb";
import DetailOther from "./pages/DetailOther";
import Social from "./pages/Social";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hero",
    element: <Hero />,
  },
  {
    path: "/works",
    element: <Works />,
  },
  {
    path: "/explorations",
    element: <Explorations />,
  },
  {
    path: "/projects/:slug",
    element: <DetailWeb />,
  },
  {
    path: "/explorations/:slug",
    element: <DetailOther />,
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
