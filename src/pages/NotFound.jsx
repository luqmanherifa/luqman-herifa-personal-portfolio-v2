import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404";
  }, []);

  return (
    <section className="flex min-h-screen justify-center py-40">
      <div className="text-center xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0,
          }}
          className="text-3xl font-medium tracking-tight text-slate-100 dark:text-blue-100"
        >
          You know where to find me.
        </motion.h1>
      </div>
    </section>
  );
};

export default NotFound;
