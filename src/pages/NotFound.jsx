import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Ups! Let's Move";
  }, []);

  return (
    <section className="flex min-h-screen justify-center pt-36 pb-36">
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
          className="text-6xl font-bold tracking-tight text-slate-100 dark:text-slate-600"
        >
          Ups! <br className="hidden lg:block md:block sm:block" />
          Page not found :(
        </motion.h1>
      </div>
    </section>
  );
};

export default NotFound;
