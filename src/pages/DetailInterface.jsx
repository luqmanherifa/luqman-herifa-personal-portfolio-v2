import React, { useEffect, useState } from "react";
import jsonData from "../data/works-interface.json";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const DetailInterface = () => {
  const [data, setData] = useState(null);
  const { slug } = useParams();
  const [imageLoading, setImageLoading] = useState(true);

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
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-700">
                      <svg
                        aria-hidden="true"
                        className="h-12 w-12 animate-spin fill-blue-600 text-slate-200 dark:text-slate-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  )}
                  <img
                    src={selectedObject.image}
                    alt=""
                    onLoad={() => setImageLoading(false)}
                    className={`transition-opacity duration-500 ${
                      imageLoading ? "opacity-0" : "opacity-100"
                    }`}
                  />
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
