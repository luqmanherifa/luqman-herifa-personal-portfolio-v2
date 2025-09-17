import { useEffect } from "react";
import Hero from "./Hero";
import Works from "./Works";
import Social from "./Social";
import Footer from "./Footer";
import Explorations from "./Explorations";

const Home = () => {
  useEffect(() => {
    document.title = "Luqman Blueprints";
  }, []);

  return (
    <div>
      <Hero />
      <Works />
      <Explorations />
      <Social />
      <Footer />
    </div>
  );
};

export default Home;
