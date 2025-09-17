import { useEffect } from "react";
import Hero from "./Hero";
import Works from "./Works";
import Social from "./Social";

const Home = () => {
  useEffect(() => {
    document.title = "Luqman Blueprints";
  }, []);

  return (
    <div>
      <Hero />
      <Works />
      <Social />
    </div>
  );
};

export default Home;
