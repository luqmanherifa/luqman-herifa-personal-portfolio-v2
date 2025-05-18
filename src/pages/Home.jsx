import { useEffect } from "react";
import Hero from "./Hero";
import Works from "./Works";
import Social from "./Social";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Luqman Blueprints";
  }, []);

  return (
    <div>
      <Hero />
      <Works />
      <Social />
      <Footer />
    </div>
  );
};

export default Home;
