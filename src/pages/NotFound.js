import React from "react";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(function () {
    document.title = "Let's Move!";
  }, []);

  return (
    <section className="pb-28">
      <h1 className="text-white font-bold text-6xl text-center tracking-tight pt-40">
        Ups! Page Not Found :(
      </h1>
    </section>
  );
}
