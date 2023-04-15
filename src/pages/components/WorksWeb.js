import { useState, useEffect } from "react";
import WorksWeb from "../../data/works-web.json";

export default function WorksWebCp() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
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
                  <div key={workWeb.id}>
                    <div className="group relative max-w-md overflow-hidden rounded-2xl transition-all duration-500 hover:scale-95 sm:max-w-[16rem] sm:rounded-lg">
                      <a href={workWeb.link} target="_blank" rel="noreferrer">
                        <img
                          src={workWeb.image}
                          alt=""
                          className="cursor-pointer transition-all duration-500 group-hover:rotate-6 group-hover:scale-125"
                        />
                      </a>
                    </div>
                    <div className="max-w-md sm:max-w-[16rem]">
                      <div className={workWeb.nd_css}>{workWeb.name}</div>
                      <div className={workWeb.nd_css}>{workWeb.desc}</div>
                      <div className="flex justify-between sm:block">
                        <div className="flex gap-2">
                          <div className={workWeb.tech_css}>{workWeb.tech_1}</div>
                          <div className={workWeb.tech_css}>{workWeb.tech_2}</div>
                          <div className={workWeb.tech_css}>{workWeb.tech_3}</div>
                        </div>
                        <div className="flex gap-2">
                          <a href={workWeb.link} target="_blank" rel="noreferrer">
                            <div className="mt-2 rounded-lg bg-zinc-400/10 py-2 px-3 text-sm text-zinc-200 hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-600 dark:hover:bg-zinc-300">
                              GitHub
                            </div>
                          </a>
                          <a href={workWeb.live} target="_blank" rel="noreferrer">
                            <div className="mt-2 rounded-lg bg-zinc-400/10 py-2 px-3 text-sm text-zinc-200 hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-600 dark:hover:bg-zinc-300">
                              Live
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
