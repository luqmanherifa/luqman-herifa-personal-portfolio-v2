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
      <a
        href="https://luqmanblueprints.site"
        className="flex items-center gap-3"
      >
        <img src="/icon.png" alt="icon" className="w-8 sm:w-7" />
      </a>
    </motion.div>
  );
};

export default Icon;
