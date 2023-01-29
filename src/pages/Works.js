import { useState, useEffect } from "react";
import WorksWeb from "../data/worksWeb.json";
import WorksMobile from "../data/worksMobile.json";
// import LuqmanHerifaV1 from "../images/luqmanherifav1.png";

export default function Works() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Works";

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section className="pb-20 sm:pb-10">
      <div>
        <div className="max-w-3xl mx-auto pt-9 sm:pt-9 sm:max-w-xs">
          <h2 className="font-bold text-3xl mb-7 text-indigo-400 bg-indigo-400/10 rounded-full px-7 py-3 inline-block sm:flex sm:justify-center sm:text-2xl sm:py-2 dark:bg-indigo-400/20">
            Works
          </h2>
          <div>
            <p className="text-slate-400 dark:text-slate-600">
              Here are some of my works.
            </p>
          </div>
        </div>
        <div>
          <div className="mx-auto border border-slate-700 max-w-5xl py-12 my-7 rounded-xl sm:max-w-xs sm:py-6 sm:my-6 dark:border-slate-400">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-7 text-yellow-400 bg-yellow-400/10 rounded-full px-5 py-2 inline-block sm:mb-5 dark:bg-yellow-400/20">
                Web Development
              </h3>
            </div>
            <div className="flex justify-center">
              {loading ? (
                <p className="text-white text-xl py-10 dark:text-slate-900 flex animate-pulse-fast">
                  L
                  <div className="animate-bounce-fast">
                    <p>o</p>
                  </div>
                  ading...
                </p>
              ) : (
                <div className="flex gap-7 flex-wrap justify-center max-w-5xl sm:gap-5">
                  {WorksWeb.map((workWeb) => {
                    return (
                      <div
                        key={workWeb.id}
                        className="max-w-md overflow-hidden group relative rounded-xl hover:scale-95 transition-all duration-500 sm:max-w-[16rem]"
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
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="mx-auto border border-slate-700 max-w-5xl py-10 my-10 rounded-xl sm:max-w-xs sm:py-6 sm:my-6 dark:border-slate-400">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-7 text-teal-400 bg-teal-400/10 rounded-full px-5 py-2 inline-block sm:mb-5 dark:bg-teal-400/20">
                Mobile Development
              </h3>
            </div>
            <div className="flex justify-center">
              {loading ? (
                <p className="text-white text-xl py-10 dark:text-slate-900 flex animate-pulse-fast">
                  L
                  <div className="animate-bounce-fast">
                    <p>o</p>
                  </div>
                  ading...
                </p>
              ) : (
                <div className="flex gap-7 flex-wrap justify-center max-w-5xl sm:gap-5">
                  {WorksMobile.map((workMobile) => {
                    return (
                      <div
                        key={workMobile.id}
                        className="max-w-md overflow-hidden group relative rounded-xl hover:scale-95 transition-all duration-500 sm:max-w-[16rem]"
                      >
                        <a
                          href={workMobile.link}
                          target="_blank"
                          rel="noreferrer"
                        >
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
