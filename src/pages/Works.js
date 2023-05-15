import { useEffect } from "react";
import WorksWeb from "../components/Fragments/WorksWeb.js";
import WorksMobile from "../components/Fragments/WorksMobile.js";
import WorksInterface from "../components/Fragments/WorksInterface.js";
import WorksOther from "../components/Fragments/WorksOther.js";
import { motion } from "framer-motion";
import Title from "../components/Elements/Title.js";

function Works() {
  useEffect(() => {
    document.title = "Luqman Herifa Works";
  }, []);

  return (
    <section className="pb-20">
      <div>
        <div className="mx-auto max-w-3xl pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
          <Title classname="bg-indigo-400/10 text-indigo-400 dark:bg-indigo-400/20" title="Works"></Title>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ x: [-150, 0], opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 dark:text-slate-600"
          >
            Here are some of my works.
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <WorksWeb />
          <WorksMobile />
          <WorksInterface />
          <WorksOther />
        </motion.div>
      </div>
    </section>
  );
}

export default Works;
