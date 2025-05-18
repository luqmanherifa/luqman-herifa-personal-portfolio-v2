import { motion } from "framer-motion";

const Title = (props) => {
  const { title, classname } = props;
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ x: [-150, 0], opacity: 1 }}
      transition={{ delay: 0 }}
      className={`mb-7 inline-block rounded-full px-6 py-2 text-xl font-semibold dark:border dark:border-blue-600 dark:text-blue-600 sm:flex sm:justify-center sm:py-2 sm:text-2xl ${classname}`}
    >
      {title}
    </motion.h2>
  );
};

export default Title;
