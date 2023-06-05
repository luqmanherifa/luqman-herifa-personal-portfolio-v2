import { useEffect } from "react";
import WorksWeb from "../components/Fragments/WorksWeb.jsx";
import WorksMobile from "../components/Fragments/WorksMobile.jsx";
import WorksInterface from "../components/Fragments/WorksInterface.jsx";
import WorksOther from "../components/Fragments/WorksOther.jsx";
import { motion } from "framer-motion";
import Title from "../components/Elements/Title.jsx";

function Works() {
  useEffect(() => {
    document.title = "Luqman Herifa Works";
  }, []);

  return (
    <section className="pb-20">
      <div>
        <div className="mx-auto max-w-3xl pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
          <Title
            classname="bg-indigo-400/10 text-indigo-400 dark:bg-indigo-400/20"
            title="Works"
          ></Title>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ x: [-150, 0], opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 dark:text-slate-600"
          >
            Here are some of my works.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <WorksWeb />
          <WorksMobile />
          <WorksInterface />
          <WorksOther />
        </motion.div>
      </div>

      {/* <div className="hidden bg-teal-400/10 bg-rose-400/10 bg-sky-400/10 bg-emerald-400/10 bg-slate-400/10 bg-slate-400/10 bg-amber-400/10 bg-green-400/10 text-teal-400 text-rose-400 text-gray-300 text-sky-400 text-emerald-400 text-amber-400 text-green-400 text-slate-300 line-clamp-3 line-clamp-2 dark:text-gray-500 dark:text-yellow-500 dark:text-slate-500 dark:text-slate-500 dark:text-amber-600"></div> */}
    </section>
  );
}

export default Works;