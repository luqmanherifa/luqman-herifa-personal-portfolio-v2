import { useEffect } from "react";
import Profile from "../images/profile.png";

export default function About() {
  useEffect(function () {
    document.title = "About";
  }, []);

  return (
    <section className="sm:pb-10">
      <div className="mx-auto flex max-w-6xl justify-center pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
        <div className="max-w-3xl">
          <h2 className="mb-7 inline-block rounded-full bg-cyan-400/10 px-7 py-3 text-3xl font-bold text-cyan-400 dark:bg-cyan-400/20 sm:flex sm:justify-center sm:py-2 sm:text-2xl">
            About Me
          </h2>
          <div className="flex lg:block md:block sm:block">
            <div className="group relative mr-7 h-[211px] max-w-[200px] overflow-hidden rounded-2xl transition-all duration-500 hover:scale-95 lg:mb-7 lg:h-auto lg:max-w-[100px] lg:rounded-lg md:mb-7 md:h-auto md:max-w-[100px] md:rounded-lg sm:mx-auto sm:mb-7 sm:h-auto sm:max-w-[100px] sm:rounded-lg">
              <img src={Profile} alt="about" className="cursor-pointer transition-all duration-500 group-hover:scale-125" />
            </div>
            <div>
              <p className="mb-4 text-slate-400 dark:text-slate-600">
                Halo! I'm Luqman. I recently graduated with a degree in Computer Science from Sekolah Tinggi Informatika dan Komputer
                Indonesia Malang (STIKI Malang). I have 1.2 years of experience as an IT support and 6 months of internship as a mobile
                developer. I am currently enhancing my skills in web development and user interface design.
              </p>
              <p className="text-slate-400 dark:text-slate-600">
                I have skills and experience in front-end web development using technologies such as React, Tailwind CSS, JavaScript,
                HTML/CSS, daisyUI, Bootstrap, Visual Studio Code, and Git; in mobile development using technologies such as Java, C#, MySQL,
                Vuforia AR, Android Studio, and Unity; in user interface design using technologies such as Figma, CorelDRAW, and Blender.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
