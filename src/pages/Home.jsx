import { motion } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Luqman Portfolio";
  }, []);

  return (
    <section className="pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0 }}
        className="mx-auto max-w-6xl bg-bgcolors bg-center bg-no-repeat py-28 xl:max-w-4xl lg:max-w-xl lg:bg-none lg:py-9 md:max-w-lg md:bg-none md:py-9 sm:max-w-xs sm:bg-none sm:py-9"
      >
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ y: [-100, 0], opacity: 1 }}
            transition={{ delay: 0 }}
            className="mb-6 text-center text-7xl font-bold tracking-tight text-slate-100 dark:font-extrabold dark:text-slate-900 lg:text-5xl md:text-5xl sm:text-left sm:text-5xl sm:font-bold"
          >
            Halo! Welcome to
            <br className="sm:block" />
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 bg-clip-text font-extrabold text-transparent">
              Luqman Portfolio
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: [100, 0], opacity: 1 }}
            transition={{ delay: 0 }}
          >
            <p className="text-center text-lg text-slate-400 dark:text-slate-600 sm:text-left">
              I'm Luqman, a Full-stack Web Developer specializing in{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
                front-end web
              </span>{" "}
              <br className="lg:hidden md:hidden sm:hidden" />
              and{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
                interface design
              </span>
              . I'm currently looking for new opportunities.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>

    // <section className="pb-20">
    //   <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ delay: 0 }}
    //     className="mx-auto max-w-6xl bg-bgcolors bg-center bg-no-repeat py-28 xl:max-w-4xl lg:max-w-xl lg:bg-none lg:py-9 md:max-w-lg md:bg-none md:py-9 sm:max-w-xs sm:bg-none sm:py-9"
    //   >
    //     <div>
    //       <motion.h1
    //         initial={{ opacity: 0 }}
    //         animate={{ y: [-100, 0], opacity: 1 }}
    //         transition={{ delay: 0 }}
    //         className="mb-6 text-center text-6xl font-extrabold tracking-tight text-slate-100 dark:text-slate-900 sm:text-left sm:text-5xl sm:font-bold"
    //       >
    //         Halo,
    //         <br className="hidden sm:block" /> selamat datang di{" "}
    //         <br className="lg:hidden md:hidden sm:hidden" />{" "}
    //         <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
    //           Luqman Herifa
    //         </span>{" "}
    //         Portfolio.
    //       </motion.h1>
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ y: [100, 0], opacity: 1 }}
    //         transition={{ delay: 0 }}
    //       >
    //         <p className="text-center text-lg text-slate-400 dark:text-slate-600 sm:text-left">
    //           I'm Luqman Herifa, a junior software developer specializing in{" "}
    //           <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
    //             front-end web
    //           </span>{" "}
    //           and <br className="lg:hidden md:hidden sm:hidden" />
    //           <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
    //             interface design
    //           </span>
    //           . I just graduated from college and currently looking for new
    //           opportunities.
    //         </p>
    //       </motion.div>
    //     </div>
    //   </motion.div>
    // </section>
  );
};

export default Home;
