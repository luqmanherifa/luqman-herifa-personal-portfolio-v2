import { useEffect } from "react";
import WorksWebCp from "./components/WorksWeb.js";
import WorksMobileCp from "./components/WorksMobile.js";
import WorksInterfaceCp from "./components/WorksInterface.js";
import WorksOtherCp from "./components/WorksOther.js";
import { motion } from "framer-motion";

function Works() {
  useEffect(() => {
    document.title = "Luqman Herifa Works";
  }, []);

  return (
    <section className="pb-20 sm:pb-20">
      <div>
        <div className="mx-auto max-w-3xl pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ x: [-150, 0], opacity: 1 }}
            transition={{ delay: 0 }}
            className="mb-7 inline-block rounded-full bg-indigo-400/10 px-7 py-3 text-2xl font-bold text-indigo-400 dark:bg-indigo-400/20 sm:flex sm:justify-center sm:py-2 sm:text-2xl"
          >
            Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ x: [-150, 0], opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 dark:text-slate-600"
          >
            Here are some of my works.
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ x: [-150, 0], opacity: 1 }} transition={{ delay: 0.2 }}>
          <WorksWebCp />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ x: [-150, 0], opacity: 1 }} transition={{ delay: 0.3 }}>
          <WorksMobileCp />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ x: [-150, 0], opacity: 1 }} transition={{ delay: 0.4 }}>
          <WorksInterfaceCp />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ x: [-150, 0], opacity: 1 }} transition={{ delay: 0.5 }}>
          <WorksOtherCp />
        </motion.div>
      </div>
      <div className="hidden bg-teal-400/10 bg-rose-400/10 bg-sky-400/10 bg-emerald-400/10 bg-slate-400/10 bg-slate-400/10 bg-amber-400/10 bg-green-400/10 text-teal-400 text-rose-400 text-gray-300 text-sky-400 text-emerald-400 text-amber-400 text-green-400 text-slate-300 line-clamp-3 line-clamp-2 dark:text-gray-500 dark:text-yellow-500 dark:text-slate-500 dark:text-slate-500 dark:text-amber-600"></div>
    </section>
  );
}

export default Works;
