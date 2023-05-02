import { useEffect } from "react";
import Profile from "../images/profile.png";
import { motion } from "framer-motion";

function About() {
  useEffect(function () {
    document.title = "Luqman Herifa Profile";
  }, []);

  return (
    <section className="pb-20">
      <div className="mx-auto flex max-w-6xl justify-center pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ x: [-150, 0], opacity: 1 }}
            transition={{ delay: 0 }}
            className="mb-7 inline-block rounded-full bg-cyan-400/10 px-7 py-3 text-2xl font-bold text-cyan-400 dark:bg-cyan-400/20 sm:flex sm:justify-center sm:py-2 sm:text-2xl"
          >
            About Me
          </motion.h2>
          <div className="flex lg:block md:block sm:block">
            <motion.figure
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0 }}
              className="group relative mr-7 h-[200px] max-w-[200px] overflow-hidden rounded-2xl transition-all duration-500 hover:scale-95 lg:mb-7 lg:h-auto lg:max-w-[100px] lg:rounded-lg md:mb-7 md:h-auto md:max-w-[100px] md:rounded-lg sm:mx-auto sm:mb-7 sm:h-auto sm:max-w-[100px] sm:rounded-lg"
            >
              <img src={Profile} alt="about" className="cursor-pointer transition-all duration-500 group-hover:scale-125" />
            </motion.figure>
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ x: [-250, 0], opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4 text-slate-400 dark:text-slate-600"
              >
                I'm Luqman. I recently graduated with a degree in Computer Science from Sekolah Tinggi Informatika dan Komputer Indonesia
                Malang (STIKI Malang). I have 1+ years of experience as a web developer and user interface designer, 1+ years of work as an
                IT support, and 6 months of internship as a software developer. I am currently enhancing my skills in web development and
                user interface design.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ x: [-250, 0], opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-slate-400 dark:text-slate-600"
              >
                I have skills and experience in web development using technologies such as React, JavaScript, Tailwind CSS, Bootstrap,
                jQuery, HTML/CSS, Laravel, PHP, MySQL, GitHub, and VS Code; in mobile development using technologies such as Java, C#,
                Unity, and Android Studio; in user interface design using technologies such as Figma, CorelDRAW, and Blender.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
