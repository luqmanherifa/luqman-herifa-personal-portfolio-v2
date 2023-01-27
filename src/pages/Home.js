import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    document.title = "Luqman Herifa";
  }, []);

  return (
    <section className="pb-28 sm:pb-10">
      <div className="max-w-6xl mx-auto py-28 bg-pattern bg-no-repeat bg-center sm:max-w-xs sm:py-10 sm:bg-none">
        <div>
          <h1 className="text-white mb-6 font-extrabold text-6xl text-center tracking-tight sm:text-5xl sm:text-left sm:font-bold sm:leading-[60px]">
            Halo, selamat datang di <br className="sm:hidden" />{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Luqman Herifa
            </span>{" "}
            Portfolio.
          </h1>
          <p className="text-slate-400 text-lg text-center sm:text-left">
            I'm a Junior Software Developer focused on building some things for{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
              front-end web
            </span>
            .
            <br className="sm:hidden" /> I just graduated from college and
            currently looking for new opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
