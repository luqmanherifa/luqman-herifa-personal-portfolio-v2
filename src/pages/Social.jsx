import { useEffect } from "react";
import DataSocial from "../data/social.json";
import { motion } from "framer-motion";
import Title from "../components/Elements/Title/Title";

const Social = () => {
  useEffect(() => {
    document.title = "Luqman Social";
  }, []);

  return (
    <section className="pb-20 sm:pb-20">
      <div className="mx-auto flex max-w-6xl justify-center pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
        <div className="w-[48rem] max-w-3xl">
          <Title
            classname="bg-pink-400/10 text-pink-400 dark:bg-pink-400/20"
            title="Social"
          ></Title>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ x: [-150, 0], opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-7 text-base text-slate-400 dark:text-slate-600"
            >
              Let's connect via social media!
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ x: [-150, 0], opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-lg rounded-2xl border border-slate-700 dark:border-slate-400"
            >
              <table className="text-sm text-slate-400 dark:text-slate-600">
                <thead>
                  <tr className="dark:border-slate-400">
                    <th className="px-9 py-4 text-left sm:px-4">Social</th>
                    <th className="w-96 px-4 py-3 text-left sm:px-1">URL</th>
                  </tr>
                </thead>
                <tbody>
                  {DataSocial.map((social) => {
                    return (
                      <tr
                        key={social.id}
                        className="border-t border-slate-700 dark:border-slate-400"
                      >
                        <td className="px-9 py-4 sm:px-4">{social.social}</td>
                        <td className="px-3 py-4 text-sky-500 hover:text-sky-300 dark:hover:text-sky-800 sm:px-1">
                          <a href={social.url} target="_blank" rel="noreferrer">
                            {social.display}
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
