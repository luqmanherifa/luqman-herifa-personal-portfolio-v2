import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    document.title = "Luqman Herifa";
  }, []);

  return (
    <section className="pb-20 sm:pb-10">
      <div className="max-w-6xl mx-auto py-28 bg-pattern bg-no-repeat bg-center sm:py-10 sm:bg-none dark:bg-none sm:max-w-xs md:max-w-lg lg:max-w-xl xl:max-w-4xl">
        <div>
          <h1 className="text-white mb-6 font-extrabold text-6xl text-center tracking-tight sm:text-5xl sm:text-left sm:font-bold sm:leading-[60px] dark:text-slate-900">
            Halo, selamat datang di{" "}
            <br className="sm:hidden md:hidden lg:hidden" />{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Luqman Herifa
            </span>{" "}
            Portfolio.
          </h1>
          <p className="text-slate-400 text-lg text-center sm:text-left dark:text-slate-600">
            I'm Luqman Herifa, a junior software developer specializing in{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
              front-end web
            </span>{" "}
            and <br className="sm:hidden md:hidden lg:hidden" />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
              user interface
            </span>
            . I just graduated from college and currently looking for new
            opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
