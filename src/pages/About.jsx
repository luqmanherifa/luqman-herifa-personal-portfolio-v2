import { useEffect } from "react";
import { motion } from "framer-motion";
import Title from "../components/Elements/Title/Title";

const About = () => {
  useEffect(() => {
    document.title = "Luqman About";
  }, []);

  return (
    <section className="pb-20">
      <div className="mx-auto flex max-w-6xl justify-center pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
        <div className="max-w-3xl">
          <Title
            classname="bg-cyan-400/10 text-cyan-400 dark:bg-cyan-400/20"
            title="About"
          ></Title>
          <div className="flex lg:block md:block sm:block">
            <motion.figure
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="group relative mr-7 h-[215px] max-w-[200px] overflow-hidden rounded-2xl transition-all duration-500 hover:scale-95 lg:mb-7 lg:h-auto lg:max-w-[100px] lg:rounded-lg md:mb-7 md:h-auto md:max-w-[100px] md:rounded-lg sm:mx-auto sm:mb-7 sm:h-auto sm:max-w-[100px] sm:rounded-lg"
            >
              <img
                src="/profile.png"
                alt="about"
                className="cursor-pointer transition-all duration-500 group-hover:scale-125"
              />
            </motion.figure>
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ x: [250, 0], opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4 text-slate-400 dark:text-slate-600"
              >
                I'm Luqman, a Web Developer with 2+ years of experience, a
                graduate of STIKI Malang in Computer Science. I also have
                experience as an IT Support and Software Developer Intern. I am
                currently focused on enhancing my skills in web development and
                interface design. I am seeking an opportunity to utilize my
                expertise in web development.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ x: [250, 0], opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-slate-400 dark:text-slate-600"
              >
                I have skills and experience in web development using
                technologies such as NextJS, ReactJS, JavaScript, Tailwind CSS,
                Bootstrap, jQuery, HTML/CSS, Laravel, PHP, MySQL, GitHub, and VS
                Code; in mobile development using technologies such as Java, C#,
                Unity, and Android Studio; in interface design using
                technologies such as Figma, CorelDRAW, and Blender.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
