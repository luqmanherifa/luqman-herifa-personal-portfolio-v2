import React, { useEffect, useState } from "react";
import jsonData from "../data/works-interface.json";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const DetailInterface = () => {
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
              <div className="mt-2 mb-7 text-3xl font-semibold leading-tight text-slate-100 dark:text-blue-600">
                <p>{selectedObject.name}</p>
              </div>

              <div>
                <figure className="relative h-[576px] w-full overflow-hidden rounded-3xl sm:h-auto sm:rounded-2xl">
                  <img src={selectedObject.image} alt="" />
                </figure>
              </div>

              <div className="mt-7 flex flex-col gap-1.5">
                <div className="flex gap-1 text-base text-slate-400 dark:text-blue-600">
                  <div className="font-semibold text-slate-100 dark:text-blue-600">
                    Figma:
                  </div>
                  <div className="line-clamp-1 hover:text-slate-200 dark:hover:text-blue-800">
                    <a
                      href={selectedObject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      {selectedObject.link}
                    </a>
                  </div>
                </div>
                <div className="flex gap-1 text-base text-slate-400 dark:text-blue-600">
                  <div className="font-semibold text-slate-100 dark:text-blue-600">
                    Live:
                  </div>
                  <div className="line-clamp-1 hover:text-slate-200 dark:hover:text-blue-800">
                    <a
                      href={selectedObject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
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

export default DetailInterface;
