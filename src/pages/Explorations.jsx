import { useEffect } from "react";
import WorksOther from "../components/Fragments/WorksOther";
import { motion } from "framer-motion";
import Title from "../components/Elements/Title/Title";

const Explorations = () => {
  useEffect(() => {
    document.title = "Luqman Explorations";
  }, []);

  return (
    <section className="pb-10 sm:pb-5">
      <div>
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
          <Title
            classname="bg-yellow-400/10 text-yellow-400 dark:bg-slate-100"
            title="Explorations"
          ></Title>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ x: [-150, 0], opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center text-base text-slate-400 dark:text-blue-600"
          >
            A space for my learning journey — messy, imperfect, and always a
            work in progress.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <WorksOther />
        </motion.div>
      </div>

      {/* <div className="hidden bg-red-400/10 text-red-300 dark:text-red-500 bg-orange-400/10 bg-teal-400/10 bg-rose-400/10 bg-sky-400/10 bg-emerald-400/10 bg-slate-400/10 bg-slate-400/10 bg-amber-400/10 bg-green-400/10 text-teal-400 text-rose-400 text-gray-300 text-sky-400 text-emerald-400 text-amber-400 text-orange-400 text-green-400 text-slate-300 line-clamp-3 line-clamp-2 dark:text-gray-500 dark:text-yellow-500 dark:text-blue-600 dark:text-amber-600 bg-sky-400/10 text-sky-300 dark:text-sky-500 bg-red-400/10 text-red-400 bg-orange-400/10 text-orange-400 dark:text-orange-500 bg-lime-400/10 text-lime-400 dark:text-lime-500 bg-indigo-400/10 text-indigo-400"></div> */}
    </section>
  );
};

export default Explorations;
