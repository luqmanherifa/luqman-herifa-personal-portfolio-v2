import { motion } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    document.title = "Luqman Blueprints";
  }, []);

  return (
    <section className="pb-10 sm:pb-5">
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
            className="mb-6 text-center text-6xl font-semibold tracking-tight text-slate-100 drop-shadow-sm dark:font-semibold dark:text-blue-600 lg:text-5xl md:text-5xl sm:text-left sm:text-5xl sm:font-semibold"
          >
            Dive <br className="hidden sm:inline" />
            deep into
            <br className="sm:block" />
            <span className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text font-semibold text-transparent dark:text-blue-600">
              Luqman Blueprints
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: [100, 0], opacity: 1 }}
            transition={{ delay: 0 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start"
          >
            <p className="w-[43rem] text-center text-lg text-slate-400 drop-shadow-sm dark:text-blue-600 sm:text-left">
              An engineer of thought between code and wonder.
              <span className="hidden sm:inline">&nbsp;</span>
              <br className="inline sm:hidden" />
              Quietly building things. You know where to find me.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
