import { useEffect } from "react";
import DataSocials from "../data/socials.json";

export default function Socials() {
  useEffect(function () {
    document.title = "Socials";
  }, []);

  return (
    <section className="pb-28 sm:pb-10">
      <div className="max-w-6xl mx-auto flex justify-center pt-9 sm:max-w-xs sm:pt-9">
        <div className="max-w-3xl">
          <h2 className="font-bold text-3xl mb-7 text-pink-400 bg-pink-400/10 rounded-full px-7 py-3 inline-block sm:flex sm:justify-center sm:text-2xl sm:py-2">
            Socials
          </h2>
          <div>
            <p className="text-slate-400 mb-7">
              I'm currently looking for new opportunities and experiences. If
              you have an offer, question, or just want to say halo, we can
              connect via social media and I'll try my best to get back to you!
            </p>
            <table className="text-slate-400 border border-slate-700 text-sm">
              <thead>
                <tr className="border border-slate-700">
                  <th className="px-8 py-3 text-left sm:px-4">Social</th>
                  <th className="px-3 py-3 text-left w-96 sm:px-1">Link</th>
                </tr>
              </thead>
              <tbody>
                {DataSocials.map((social) => {
                  return (
                    <tr key={social.id} className="border border-slate-700">
                      <td className="px-8 py-3 sm:px-4">{social.social}</td>
                      <td className="px-3 py-3 text-sky-500 sm:px-1 hover:text-sky-300">
                        <a href={social.link} target="_blank" rel="noreferrer">
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
