import React from "react";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(function () {
    document.title = "Let's Move!";
  }, []);

  return (
    <section className="flex justify-center sm:pb-10">
      <div className="pt-36 text-center xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs">
        <h1 className="text-6xl font-bold tracking-tight text-white dark:text-slate-600">Ups! Page Not Found :(</h1>
      </div>
    </section>
  );
}
