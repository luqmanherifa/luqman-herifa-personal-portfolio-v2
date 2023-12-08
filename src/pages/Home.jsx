import { motion } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Luqman Blueprints";
  }, []);

  return (
    <section className="pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0 }}
        className="mx-auto max-w-6xl bg-bglinelight bg-center bg-no-repeat py-28 dark:bg-bglinedark xl:max-w-4xl lg:max-w-xl lg:bg-none lg:py-9 dark:lg:bg-none md:max-w-lg md:bg-none md:py-9 dark:md:bg-none sm:max-w-xs sm:bg-none sm:py-9 dark:sm:bg-none"
      >
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ y: [-100, 0], opacity: 1 }}
            transition={{ delay: 0 }}
            className="mb-6 text-center text-6xl font-bold tracking-tight text-slate-100 drop-shadow-sm dark:font-extrabold dark:text-blue-600 lg:text-5xl md:text-5xl sm:text-left sm:text-5xl sm:font-bold"
          >
            Halo! <br className="hidden sm:block" />
            Dive into
            <br className="sm:block" />
            <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text font-extrabold text-transparent dark:text-blue-600">
              Luqman Blueprints
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: [100, 0], opacity: 1 }}
            transition={{ delay: 0 }}
          >
            <p className="text-center text-lg text-slate-400 drop-shadow-sm dark:text-blue-600 sm:text-left">
              I am Luqman, a Full-stack Web Developer specializing in front-end
              web
              <br className="lg:hidden md:hidden sm:hidden" />
              and interface design. I am currently looking for new
              opportunities.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
