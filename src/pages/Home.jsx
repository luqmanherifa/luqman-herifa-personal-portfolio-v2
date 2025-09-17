import { useEffect } from "react";
import Hero from "./Hero";
import Works from "./Works";
import Social from "./Social";
import Journal from "./Journal";

const Home = () => {
  useEffect(() => {
    document.title = "Luqman Blueprints";
  }, []);

  return (
    <div>
      <Hero />
      <Works />
      <Journal />
      <Social />
    </div>
  );
};

export default Home;
