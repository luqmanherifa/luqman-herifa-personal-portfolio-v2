import { useEffect } from "react";
import WorksWebCp from "./components/WorksWeb.js";
import WorksMobileCp from "./components/WorksMobile.js";
import WorksInterfaceCp from "./components/WorksInterface.js";
import WorksOtherCp from "./components/WorksOther.js";

export default function Works() {
  useEffect(() => {
    document.title = "Luqman Herifa Works";
  }, []);

  return (
    <section className="pb-20 sm:pb-20">
      <div>
        <div className="mx-auto max-w-3xl pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
          <h2 className="mb-7 inline-block rounded-full bg-indigo-400/10 px-7 py-3 text-2xl font-bold text-indigo-400 dark:bg-indigo-400/20 sm:flex sm:justify-center sm:py-2 sm:text-2xl">
            Works
          </h2>
          <div>
            <p className="text-slate-400 dark:text-slate-600">Here are some of my works.</p>
          </div>
        </div>
        <WorksWebCp />
        <WorksMobileCp />
        <WorksInterfaceCp />
        <WorksOtherCp />
      </div>
      <div className="hidden bg-teal-400/10 bg-rose-400/10 bg-sky-400/10 bg-emerald-400/10 bg-slate-400/10 bg-slate-400/10 bg-amber-400/10 bg-green-400/10 text-teal-400 text-rose-400 text-gray-300 text-sky-400 text-emerald-400 text-amber-400 text-green-400 text-slate-300 line-clamp-3 line-clamp-2 dark:text-gray-500 dark:text-yellow-500 dark:text-slate-500 dark:text-slate-500 dark:text-amber-600"></div>
    </section>
  );
}
