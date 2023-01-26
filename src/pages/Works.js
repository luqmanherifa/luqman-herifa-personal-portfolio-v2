import { useEffect } from "react";
import Projects from "../data/projects.json";

export default function Works() {
  useEffect(function () {
    document.title = "Works";
  }, []);

  return (
    <section className="pb-28">
      <div className="max-w-6xl mx-auto flex justify-center pt-9">
        <div className="max-w-3xl">
          <h2 className="font-bold text-3xl mb-7 text-indigo-400 bg-indigo-400/10 rounded-full px-7 py-3 inline-block">
            Works
          </h2>
          <div>
            <p className="text-slate-400">
              Here are some of my works, from User Interface design, Android
              development, game development, web development, and more. (Coming
              Soon)
            </p>
          </div>
          <hr className="border-slate-700 my-7" />
          <div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-7 text-yellow-400 bg-yellow-400/10 rounded-full px-4 py-1 inline-block">
                Web Development
              </h3>
            </div>
            <div className="flex gap-7 flex-wrap justify-center">
              {Projects.map((project) => {
                return (
                  <div
                    key={project.id}
                    className="max-w-xs overflow-hidden group relative rounded-2xl hover:scale-95 transition-all duration-500"
                  >
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img
                        src={project.image}
                        alt=""
                        className="cursor-pointer group-hover:scale-125 transition-all duration-500 group-hover:rotate-12"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <hr className="border-slate-700 my-7" />
        </div>
      </div>
    </section>
  );
}
