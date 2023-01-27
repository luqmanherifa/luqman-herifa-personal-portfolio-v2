import { useEffect } from "react";
import profile from "../images/profile.png";

export default function About() {
  useEffect(function () {
    document.title = "About";
  }, []);

  return (
    <section className="pb-28 sm:pb-10">
      <div className="max-w-6xl mx-auto flex justify-center pt-9 sm:max-w-xs sm:pt-9">
        <div className="max-w-3xl">
          <h2 className="font-bold text-3xl mb-7 text-cyan-400 bg-cyan-400/10 rounded-full px-7 py-3 inline-block sm:flex sm:justify-center">
            About Me
          </h2>
          <div className="flex sm:block">
            <div className="mr-7 overflow-hidden group relative max-w-[200px] rounded-2xl hover:scale-95 transition-all duration-500 sm:mx-auto sm:mb-7">
              <img
                src={profile}
                alt="about"
                className="cursor-pointer group-hover:scale-125 transition-all duration-500"
              />
            </div>
            <div>
              <p className="text-slate-400 mb-4">
                Halo, my name is Luqman. I just graduated from Computer Science
                Study Program at Sekolah Tinggi Informatika dan Komputer
                Indonesia Malang. I have an interest and hobby in computers and
                design.
              </p>
              <p className="text-slate-400">
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
