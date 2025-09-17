import { motion } from "framer-motion";
import { useEffect } from "react";
import Title from "../components/Elements/Title/Title";

const Journal = () => {
  useEffect(() => {
    document.title = "Luqman Journal";
  }, []);

  return (
    <section className="pb-10 sm:pb-5">
      <div>
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
          <Title
            classname="bg-yellow-400/10 text-yellow-400 dark:bg-slate-100"
            title="Journal"
          ></Title>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ x: [-150, 0], opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center text-base text-slate-400 dark:text-blue-600"
          >
            The hidden archive — what wasn’t written.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <div>
            <div className="mx-auto my-7 max-w-5xl lg:max-w-xl md:max-w-lg sm:my-6 sm:max-w-xs sm:rounded-3xl sm:py-0">
              <div className="flex justify-center">
                <div className="flex max-w-5xl flex-wrap justify-center gap-7 overflow-hidden transition-all duration-700 ease-in-out sm:gap-5">
                  <figure className="group relative max-w-xl overflow-hidden rounded-2xl transition-all duration-500 hover:scale-95 sm:h-auto sm:max-w-xs sm:rounded-lg">
                    <a
                      href="https://whatwasntwritten.com"
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <img
                        src="/works/whatwasntwritten.gif"
                        alt=""
                        className="h-auto cursor-pointer rounded-2xl transition duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-125
              dark:grayscale dark:hue-rotate-[180deg] dark:filter
          "
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
            <a
              href="https://whatwasntwritten.com"
              target="_blank"
              rel="noreferrer"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ x: [-150, 0], opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center text-base text-blue-400 hover:text-blue-500 hover:underline dark:text-blue-600 dark:hover:text-blue-800"
              >
                whatwasntwritten.com
              </motion.p>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journal;
