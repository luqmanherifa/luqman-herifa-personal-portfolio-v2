import { motion } from "framer-motion";

const Icon = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0,
      }}
    >
      <a href="/" className="flex items-center gap-3">
        <div className="relative">
          <img
            src="/icon.png"
            alt="icon"
            className="w-7 dark:grayscale sm:w-6"
          />
          <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 dark:opacity-40" />
        </div>
      </a>
    </motion.div>
  );
};

export default Icon;
