import Home from "./pages/Home";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Works from "./pages/Works";
import DetailWeb from "./pages/DetailWeb";
import DetailMobile from "./pages/DetailMobile";
import DetailInterface from "./pages/DetailInterface";
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
    path: "/about",
    element: <About />,
  },
  {
    path: "/works",
    element: <Works />,
  },
  {
    path: "/web/:slug",
    element: <DetailWeb />,
  },
  {
    path: "/mobile/:slug",
    element: <DetailMobile />,
  },
  {
    path: "/interface/:slug",
    element: <DetailInterface />,
  },
  {
    path: "/other/:slug",
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
