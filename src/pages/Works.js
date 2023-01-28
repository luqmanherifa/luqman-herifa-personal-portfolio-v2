import { useEffect } from "react";
import WorksWeb from "../data/worksWeb.json";
import WorksMobile from "../data/worksMobile.json";
// import LuqmanHerifaV1 from "../images/luqmanherifav1.png";

export default function Works() {
  useEffect(function () {
    document.title = "Works";
  }, []);

  return (
    <section className="pb-28 sm:pb-10">
      <div>
        <div className="max-w-6xl mx-auto flex justify-center pt-9 sm:pt-9">
          <div className="max-w-3xl sm:max-w-xs">
            <h2 className="font-bold text-3xl mb-7 text-indigo-400 bg-indigo-400/10 rounded-full px-7 py-3 inline-block sm:flex sm:justify-center sm:text-2xl sm:py-2">
              Works
            </h2>
            <div>
              <p className="text-slate-400">
                Here are some of my works, from User Interface design, Android
                development, game development, web development, and more.
                (Coming Soon)
              </p>
            </div>
          </div>
        </div>
        <hr className="border-slate-700 my-7 max-w-5xl mx-auto" />
        <div>
          <div className="text-center">
            <h3 className="font-bold text-xl mb-7 text-yellow-400 bg-yellow-400/10 rounded-full px-5 py-2 inline-block">
              Web Development
            </h3>
          </div>
          <div className="flex justify-center">
            <div className="flex gap-7 flex-wrap justify-center max-w-5xl">
              {WorksWeb.map((workWeb) => {
                return (
                  <div
                    key={workWeb.id}
                    className="max-w-[31rem] overflow-hidden group relative rounded-2xl hover:scale-95 transition-all duration-500"
                  >
                    <a href={workWeb.link} target="_blank" rel="noreferrer">
                      <img
                        src={workWeb.image}
                        alt=""
                        className="cursor-pointer group-hover:scale-125 transition-all duration-500 group-hover:rotate-6"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr className="border-slate-700 my-7 max-w-5xl mx-auto" />
        <div>
          <div className="text-center">
            <h3 className="font-bold text-xl mb-7 text-teal-400 bg-teal-400/10 rounded-full px-5 py-2 inline-block">
              Mobile Development
            </h3>
          </div>
          <div className="flex justify-center">
            <div className="flex gap-7 flex-wrap justify-center max-w-5xl">
              {WorksMobile.map((workMobile) => {
                return (
                  <div
                    key={workMobile.id}
                    className="max-w-[31rem] overflow-hidden group relative rounded-2xl hover:scale-95 transition-all duration-500"
                  >
                    <a href={workMobile.link} target="_blank" rel="noreferrer">
                      <img
                        src={workMobile.image}
                        alt=""
                        className="cursor-pointer group-hover:scale-125 transition-all duration-500 group-hover:rotate-6"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr className="border-slate-700 my-7 max-w-5xl mx-auto" />
      </div>
    </section>
  );
}
