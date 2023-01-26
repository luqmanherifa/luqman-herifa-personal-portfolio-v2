import { useEffect } from "react";
import Contacts from "../data/contacts.json";

export default function Socials() {
  useEffect(function () {
    document.title = "Socials";
  }, []);

  return (
    <section className="pb-28">
      <div className="max-w-6xl mx-auto flex justify-center pt-9">
        <div className="max-w-3xl">
          <h2 className="font-bold text-3xl mb-7 text-pink-400 bg-pink-400/10 rounded-full px-7 py-3 inline-block">
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
                  <th className="px-8 py-3 text-left">Social</th>
                  <th className="px-3 py-3 text-left w-80">Link</th>
                </tr>
              </thead>
              <tbody>
                {Contacts.map((contact) => {
                  return (
                    <tr key={contact.id} className="border border-slate-700">
                      <td className="px-8 py-3 ">{contact.social}</td>
                      <td className="px-3 py-3 text-sky-500">
                        <a href={contact.link} target="_blank" rel="noreferrer">
                          {contact.display}
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
