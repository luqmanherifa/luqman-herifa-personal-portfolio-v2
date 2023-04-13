import { useState, useEffect } from "react";
import WorksWeb from "../data/works-web.json";
import WorksMobile from "../data/works-mobile.json";
import WorksInterface from "../data/works-interface.json";
import WorksOther from "../data/works-other.json";

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
        <div className="mx-auto max-w-3xl pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
          <h2 className="mb-7 inline-block rounded-full bg-indigo-400/10 px-7 py-3 text-2xl font-bold text-indigo-400 dark:bg-indigo-400/20 sm:flex sm:justify-center sm:py-2 sm:text-2xl">
            Works
          </h2>
          <div>
            <p className="text-slate-400 dark:text-slate-600">Here are some of my works.</p>
          </div>
        </div>
        <div>
          <div className="mx-auto my-7 max-w-5xl rounded-[2rem] border border-slate-700 py-12 dark:border-slate-400 lg:max-w-xl md:max-w-lg sm:my-6 sm:max-w-xs sm:rounded-3xl sm:py-6">
            <div className="text-center">
              <h3 className="mb-7 inline-block rounded-full bg-yellow-400/10 px-5 py-2 text-xl font-bold text-yellow-400 dark:bg-yellow-400/20 sm:mb-5 sm:text-base">
                Web Development
              </h3>
            </div>
            <div className="flex justify-center">
              {loading ? (
                <p className="flex animate-pulse-fast py-10 text-xl text-white dark:text-slate-900">
                  L<span className="animate-bounce-fast">o</span>
                  ading...
                </p>
              ) : (
                <div className="flex max-w-5xl flex-wrap justify-center gap-7 sm:gap-5">
                  {WorksWeb.map((workWeb) => {
                    return (
                      <div
                        key={workWeb.id}
                        className="group relative max-w-md overflow-hidden rounded-2xl transition-all duration-500 hover:scale-95 sm:max-w-[16rem] sm:rounded-lg"
                      >
                        <a href={workWeb.link} target="_blank" rel="noreferrer">
                          <img
                            src={workWeb.image}
                            alt=""
                            className="cursor-pointer transition-all duration-500 group-hover:rotate-6 group-hover:scale-125"
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
          <div className="mx-auto my-10 max-w-5xl rounded-[2rem] border border-slate-700 py-12 dark:border-slate-400 lg:max-w-xl md:max-w-lg sm:my-6 sm:max-w-xs sm:rounded-3xl sm:py-6">
            <div className="text-center">
              <h3 className="mb-7 inline-block rounded-full bg-lime-400/10 px-5 py-2 text-xl font-bold text-lime-400 dark:bg-lime-400/20 sm:mb-5 sm:text-base">
                Mobile Development
              </h3>
            </div>
            <div className="flex justify-center">
              {loading ? (
                <p className="flex animate-pulse-fast py-10 text-xl text-white dark:text-slate-900">
                  L<span className="animate-bounce-fast">o</span>
                  ading...
                </p>
              ) : (
                <div className="flex max-w-5xl flex-wrap justify-center gap-7 sm:gap-5">
                  {WorksMobile.map((workMobile) => {
                    return (
                      <div
                        key={workMobile.id}
                        className="group relative max-w-md overflow-hidden rounded-2xl transition-all duration-500 hover:scale-95 sm:max-w-[16rem] sm:rounded-lg"
                      >
                        <a href={workMobile.link} target="_blank" rel="noreferrer">
                          <img
                            src={workMobile.image}
                            alt=""
                            className="cursor-pointer transition-all duration-500 group-hover:rotate-6 group-hover:scale-125"
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
          <div className="mx-auto my-10 max-w-5xl rounded-[2rem] border border-slate-700 py-12 dark:border-slate-400 lg:max-w-xl md:max-w-lg sm:my-6 sm:max-w-xs sm:rounded-3xl sm:py-6">
            <div className="text-center">
              <h3 className="mb-7 inline-block rounded-full bg-blue-400/10 px-5 py-2 text-xl font-bold text-blue-400 dark:bg-blue-400/20 sm:mb-5 sm:text-base">
                User Interface Design
              </h3>
            </div>
            <div className="flex justify-center">
              {loading ? (
                <p className="flex animate-pulse-fast py-10 text-xl text-white dark:text-slate-900">
                  L<span className="animate-bounce-fast">o</span>
                  ading...
                </p>
              ) : (
                <div className="flex max-w-5xl flex-wrap justify-center gap-7 sm:gap-5">
                  {WorksInterface.map((workInterface) => {
                    return (
                      <div
                        key={workInterface.id}
                        className="group relative max-w-md overflow-hidden rounded-2xl transition-all duration-500 hover:scale-95 sm:max-w-[16rem] sm:rounded-lg"
                      >
                        <a href={workInterface.link} target="_blank" rel="noreferrer">
                          <img
                            src={workInterface.image}
                            alt=""
                            className="cursor-pointer transition-all duration-500 group-hover:rotate-6 group-hover:scale-125"
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
          <div className="mx-auto my-10 max-w-5xl rounded-[2rem] border border-slate-700 py-12 dark:border-slate-400 lg:max-w-xl md:max-w-lg sm:my-6 sm:max-w-xs sm:rounded-3xl sm:py-6">
            <div className="text-center">
              <h3 className="mb-7 inline-block rounded-full bg-gray-400/10 px-5 py-2 text-xl font-bold text-gray-400 dark:bg-gray-400/20 sm:mb-5 sm:text-base">
                Other Projects
              </h3>
            </div>
            <div className="flex justify-center">
              {loading ? (
                <p className="flex animate-pulse-fast py-10 text-xl text-white dark:text-slate-900">
                  L<span className="animate-bounce-fast">o</span>
                  ading...
                </p>
              ) : (
                <div className="flex max-w-5xl flex-wrap justify-center gap-7 sm:gap-5">
                  {WorksOther.map((workOther) => {
                    return (
                      <div
                        key={workOther.id}
                        className="group relative max-w-md overflow-hidden rounded-2xl transition-all duration-500 hover:scale-95 sm:max-w-[16rem] sm:rounded-lg"
                      >
                        <a href={workOther.link} target="_blank" rel="noreferrer">
                          <img
                            src={workOther.image}
                            alt=""
                            className="cursor-pointer transition-all duration-500 group-hover:rotate-6 group-hover:scale-125"
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
