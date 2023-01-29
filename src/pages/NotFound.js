import React from "react";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(function () {
    document.title = "Let's Move!";
  }, []);

  return (
    <section className="pb-28 flex justify-center sm:pb-10">
      <div className="pt-36 text-center sm:max-w-xs">
        <h1 className="text-white font-bold text-6xl tracking-tight dark:text-slate-600">
          Ups! Page Not Found :(
        </h1>
      </div>
    </section>
  );
}
