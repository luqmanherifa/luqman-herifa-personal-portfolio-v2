import React, { useEffect, useState } from "react";
import jsonData from "../data/works-web.json";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const DetailWeb = () => {
  const [data, setData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    setData(jsonData);
  }, []);

  const selectedObject = data ? data.find((obj) => obj.slug === slug) : null;

  useEffect(() => {
    if (selectedObject) {
      document.title = selectedObject.name + " - Luqman Works";
    }
  }, [selectedObject]);

  return (
    <motion.section
      className="pb-20"
      initial={{ opacity: 0 }}
      animate={{ x: [-150, 0], opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <div className="mx-auto flex max-w-6xl justify-center pt-9 xl:max-w-4xl lg:max-w-xl md:max-w-lg sm:max-w-xs sm:pt-9">
        <div className="max-w-3xl sm:max-w-xs">
          {selectedObject && (
            <div>
              <div className="mb-3 flex gap-3 text-slate-100">
                <div className="rounded-xl border border-slate-500 bg-slate-600 py-1 px-3 text-base text-slate-300 dark:border-slate-400 dark:bg-slate-200 dark:text-slate-500">
                  {selectedObject.tech1}
                </div>
                <div className="rounded-xl border border-slate-500 bg-slate-600 py-1 px-3 text-base text-slate-300 dark:border-slate-400 dark:bg-slate-200 dark:text-slate-500">
                  {selectedObject.tech2}
                </div>
                <div className="rounded-xl border border-slate-500 bg-slate-600 py-1 px-3 text-base text-slate-300 line-clamp-1 dark:border-slate-400 dark:bg-slate-200 dark:text-slate-500">
                  {selectedObject.tech3}
                </div>
              </div>

              <div className="mt-2 mb-5 text-4xl font-bold leading-tight text-slate-100 dark:text-slate-900">
                <p>{selectedObject.name}</p>
              </div>

              <div className="mb-8 text-slate-400 dark:text-slate-500">
                <p className="text-xl">{selectedObject.desc}</p>
              </div>

              <div>
                <figure className="relative w-full overflow-hidden rounded-3xl sm:rounded-2xl">
                  <img src={selectedObject.image} alt="" />
                </figure>
              </div>

              <div className="mt-8 flex flex-col gap-1">
                <div className="flex gap-1 text-lg text-slate-400 dark:text-slate-500">
                  <div className="font-semibold text-slate-100 dark:text-slate-600">
                    GitHub:
                  </div>
                  <div className="line-clamp-1 hover:text-slate-200 dark:hover:text-slate-800">
                    <a
                      href={selectedObject.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {selectedObject.link}
                    </a>
                  </div>
                </div>
                <div className="flex gap-1 text-lg text-slate-400 dark:text-slate-500">
                  <div className="font-semibold text-slate-100 dark:text-slate-600">
                    Live:
                  </div>
                  <div className="line-clamp-1 hover:text-slate-200 dark:hover:text-slate-800">
                    <a
                      href={selectedObject.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {selectedObject.live}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default DetailWeb;
