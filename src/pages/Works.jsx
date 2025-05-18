import { useEffect } from "react";
import WorksWeb from "../components/Fragments/WorksWeb";
import WorksMobile from "../components/Fragments/WorksMobile";
import WorksInterface from "../components/Fragments/WorksInterface";
import WorksOther from "../components/Fragments/WorksOther";
import { motion } from "framer-motion";
import Title from "../components/Elements/Title/Title";

const Works = () => {
  useEffect(() => {
    document.title = "Luqman Works";
  }, []);

  return (
    <section className="pb-10">
      <div>
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
          <Title
            classname="bg-indigo-400/10 text-indigo-400 dark:bg-white"
            title="Works"
          ></Title>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ x: [-150, 0], opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-base text-slate-400 dark:text-blue-600"
          >
            Here’s a glimpse of what I’ve built — from fun side projects to
            real-world applications.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <WorksWeb />
          <WorksMobile />
          <WorksInterface />
          <WorksOther />
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
