import { useState, useEffect } from "react";
import WorksMobile from "../../data/works-mobile.json";

export default function WorksMobileCp() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
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
  );
}
