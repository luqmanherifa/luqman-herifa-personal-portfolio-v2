import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";

function NotFound() {
  useEffect(function () {
    document.title = "Ups! Let's Move.";
  }, []);

  return (
    <section className="flex min-h-screen items-center justify-center pb-20">
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
          className="text-6xl font-bold tracking-tight text-slate-50 dark:text-slate-600"
        >
          Ups! Page not found :(
        </motion.h1>
      </div>
    </section>
  );
}

export default NotFound;
