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
            The life archive — what wasn’t written.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ x: [-150, 0], opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-4 flex items-center justify-center gap-1 text-center text-base italic text-white dark:text-blue-600"
          >
            {/* Opening Quote */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="h-5 w-5 fill-current text-white dark:text-blue-600"
            >
              <path d="M96 280C96 213.7 149.7 160 216 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L216 224C185.1 224 160 249.1 160 280L160 288L224 288C259.3 288 288 316.7 288 352L288 416C288 451.3 259.3 480 224 480L160 480C124.7 480 96 451.3 96 416L96 280zM352 280C352 213.7 405.7 160 472 160L480 160C497.7 160 512 174.3 512 192C512 209.7 497.7 224 480 224L472 224C441.1 224 416 249.1 416 280L416 288L480 288C515.3 288 544 316.7 544 352L544 416C544 451.3 515.3 480 480 480L416 480C380.7 480 352 451.3 352 416L352 280z" />
            </svg>

            <span>Writing travels beyond distance, time, and even death.</span>

            {/* Closing Quote */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="h-5 w-5 fill-current text-white dark:text-blue-600"
            >
              <path d="M544 360C544 426.3 490.3 480 424 480L416 480C398.3 480 384 465.7 384 448C384 430.3 398.3 416 416 416L424 416C454.9 416 480 390.9 480 360L480 352L416 352C380.7 352 352 323.3 352 288L352 224C352 188.7 380.7 160 416 160L480 160C515.3 160 544 188.7 544 224L544 360zM288 360C288 426.3 234.3 480 168 480L160 480C142.3 480 128 465.7 128 448C128 430.3 142.3 416 160 416L168 416C198.9 416 224 390.9 224 360L224 352L160 352C124.7 352 96 323.3 96 288L96 224C96 188.7 124.7 160 160 160L224 160C259.3 160 288 188.7 288 224L288 360z" />
            </svg>
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
                      <div className="pointer-events-none absolute inset-0 bg-blue-600 opacity-0 dark:opacity-40" />
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
