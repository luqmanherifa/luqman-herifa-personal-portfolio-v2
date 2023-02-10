import { useEffect } from "react";
import DataSocial from "../data/social.json";

export default function Social() {
  useEffect(function () {
    document.title = "Social";
  }, []);

  return (
    <section className="sm:pb-10">
      <div className="mx-auto flex max-w-6xl justify-center pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
        <div className="max-w-3xl">
          <h2 className="mb-7 inline-block rounded-full bg-pink-400/10 px-7 py-3 text-3xl font-bold text-pink-400 dark:bg-pink-400/20 sm:flex sm:justify-center sm:py-2 sm:text-2xl">
            Social
          </h2>
          <div>
            <p className="mb-7 text-slate-400 dark:text-slate-600">
              I'm currently looking for new opportunities and experiences. If you have an offer, question, or just want to say halo, we can
              connect via social media and I'll try my best to get back to you!
            </p>
            <div className="max-w-lg rounded-2xl border border-slate-700 dark:border-slate-400">
              <table className="text-sm text-slate-400 dark:text-slate-600">
                <thead>
                  <tr className="dark:border-slate-400">
                    <th className="px-9 py-3 text-left sm:px-4">Social</th>
                    <th className="w-96 px-4 py-3 text-left sm:px-1">URL</th>
                  </tr>
                </thead>
                <tbody>
                  {DataSocial.map((social) => {
                    return (
                      <tr key={social.id} className="border-t border-slate-700 dark:border-slate-400">
                        <td className="px-9 py-3 sm:px-4">{social.social}</td>
                        <td className="px-3 py-3 text-sky-500 hover:text-sky-300 dark:hover:text-sky-800 sm:px-1">
                          <a href={social.url} target="_blank" rel="noreferrer">
                            {social.display}
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
