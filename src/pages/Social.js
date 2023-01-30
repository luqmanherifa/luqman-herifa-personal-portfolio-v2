import { useEffect } from "react";
import DataSocial from "../data/social.json";

export default function Social() {
  useEffect(function () {
    document.title = "Social";
  }, []);

  return (
    <section className="pb-20 sm:pb-10">
      <div className="max-w-6xl mx-auto flex justify-center pt-9 sm:pt-9 sm:max-w-xs md:max-w-lg lg:max-w-xl xl:max-w-4xl">
        <div className="max-w-3xl">
          <h2 className="font-bold text-3xl mb-7 text-pink-400 bg-pink-400/10 rounded-full px-7 py-3 inline-block sm:flex sm:justify-center sm:text-2xl sm:py-2 dark:bg-pink-400/20">
            Social
          </h2>
          <div>
            <p className="text-slate-400 mb-7 dark:text-slate-600">
              I'm currently looking for new opportunities and experiences. If
              you have an offer, question, or just want to say halo, we can
              connect via social media and I'll try my best to get back to you!
            </p>
            <table className="text-slate-400 text-sm dark:text-slate-600">
              <thead>
                <tr className="border border-slate-700 dark:border-slate-400">
                  <th className="px-8 py-3 text-left sm:px-4">Social</th>
                  <th className="px-3 py-3 text-left w-96 sm:px-1">URL</th>
                </tr>
              </thead>
              <tbody>
                {DataSocial.map((social) => {
                  return (
                    <tr
                      key={social.id}
                      className="border border-slate-700 dark:border-slate-400"
                    >
                      <td className="px-8 py-3 sm:px-4">{social.social}</td>
                      <td className="px-3 py-3 text-sky-500 sm:px-1 hover:text-sky-300 dark:hover:text-sky-800">
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
    </section>
  );
}
