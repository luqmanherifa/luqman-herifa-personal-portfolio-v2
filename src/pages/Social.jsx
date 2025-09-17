import { useEffect } from "react";
import DataSocial from "../data/social.json";
import { motion } from "framer-motion";
import Title from "../components/Elements/Title/Title";

const Social = () => {
  useEffect(() => {
    document.title = "Luqman Socials";
  }, []);

  return (
    <section className="pb-16 sm:pb-12">
      <div className="mx-auto flex max-w-6xl justify-center pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
        <div className="flex w-[48rem] max-w-2xl flex-col items-center justify-center">
          <Title
            classname="bg-yellow-400/10 text-yellow-400 dark:bg-slate-100"
            title="Socials"
          ></Title>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ x: [-150, 0], opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-7 text-center text-base text-slate-400 dark:text-blue-600"
          >
            I’m open to connect — feel free to reach out or just say hi through
            my socials.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ x: [-150, 0], opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl rounded-2xl border border-slate-700 dark:border-blue-600"
          >
            <table className="text-sm text-slate-400 dark:text-blue-600">
              <thead>
                <tr className="dark:border-blue-600">
                  <th className="px-9 py-5 text-left font-semibold sm:px-4">
                    Socials
                  </th>
                  <th className="w-96 px-4 py-5 text-left font-semibold sm:px-1">
                    URL
                  </th>
                </tr>
              </thead>
              <tbody>
                {DataSocial.map((social) => {
                  return (
                    <tr
                      key={social.id}
                      className="border-t border-slate-700 dark:border-blue-600"
                    >
                      <td className="px-9 py-5 sm:px-4">{social.social}</td>
                      <td className="px-3 py-5 text-blue-400 hover:text-blue-500 dark:text-blue-600 dark:hover:text-blue-800 sm:px-1">
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline"
                        >
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
    </section>
  );
};

export default Social;
