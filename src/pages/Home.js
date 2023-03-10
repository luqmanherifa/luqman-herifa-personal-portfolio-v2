import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    document.title = "Luqman Herifa";
  }, []);

  return (
    <section className="sm:pb-10">
      <div className="mx-auto max-w-6xl bg-bgcolors bg-center bg-no-repeat py-28 xl:max-w-4xl lg:max-w-xl lg:bg-none md:max-w-lg md:bg-none sm:max-w-xs sm:bg-none sm:py-10">
        <div>
          <h1 className="mb-6 text-center text-6xl font-extrabold tracking-tight text-white dark:text-slate-900 sm:text-left sm:text-5xl sm:font-bold">
            Halo, selamat datang di <br className="lg:hidden md:hidden sm:hidden" />{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">Luqman Herifa</span>{" "}
            Portfolio.
          </h1>
          <p className="text-center text-lg text-slate-400 dark:text-slate-600 sm:text-left">
            I'm Luqman Herifa, a junior software developer specializing in{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">front-end web</span>{" "}
            and <br className="lg:hidden md:hidden sm:hidden" />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">user interface</span>.
            I just graduated from college and currently looking for new opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
