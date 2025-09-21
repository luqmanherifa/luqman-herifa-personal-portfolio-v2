import Home from "./pages/Home";
import Hero from "./pages/Hero";
import Works from "./pages/Works";
import DetailWeb from "./pages/DetailWeb";
import DetailOther from "./pages/DetailOther";
import Journal from "./pages/Journal";
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
    path: "/works/:slug",
    element: <DetailWeb />,
  },
  {
    path: "/explorations/:slug",
    element: <DetailOther />,
  },
  {
    path: "/journal",
    element: <Journal />,
  },
  {
    path: "/socials",
    element: <Social />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
