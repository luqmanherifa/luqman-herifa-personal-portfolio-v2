import { useEffect } from "react";
import Profile from "../images/profile.png";

export default function About() {
  useEffect(function () {
    document.title = "About";
  }, []);

  return (
    <section className="pb-20 sm:pb-10">
      <div className="mx-auto flex max-w-6xl justify-center pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
        <div className="max-w-3xl">
          <h2 className="mb-7 inline-block rounded-full bg-cyan-400/10 px-7 py-3 text-3xl font-bold text-cyan-400 dark:bg-cyan-400/20 sm:flex sm:justify-center sm:py-2 sm:text-2xl">
            About Me
          </h2>
          <div className="flex lg:block md:block sm:block">
            <div className="group relative mr-7 max-w-[200px] overflow-hidden rounded-2xl transition-all duration-500 hover:scale-95 lg:mb-7 lg:max-w-[100px] lg:rounded-lg md:mb-7 md:max-w-[100px] md:rounded-lg sm:mx-auto sm:mb-7 sm:max-w-[100px] sm:rounded-lg">
              <img
                src={Profile}
                alt="about"
                className="cursor-pointer transition-all duration-500 group-hover:scale-125"
              />
            </div>
            <div>
              <p className="mb-4 text-slate-400 dark:text-slate-600">
                Halo, my name is Luqman. I just graduated from Computer Science
                Study Program at Sekolah Tinggi Informatika dan Komputer
                Indonesia Malang. I have an interest and hobby in computers and
                design.
              </p>
              <p className="text-slate-400 dark:text-slate-600">
                I've learned, practiced, and worked using some programming and
                design software and technologies such as NetBeans, Android
                Studio, Unity, VS Code, GitHub, Blender, CorelDRAW, Figma, Java,
                MySQL, HTML/CSS, PHP, CodeIgniter, C#, Vuforia AR, JavaScript,
                Bootstrap, and others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
