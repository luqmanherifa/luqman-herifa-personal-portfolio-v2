import { Link } from "react-router-dom";
import WorksInterfaceData from "../../data/works-interface.json";
import TitleWorks from "../Elements/Title/TitleWorks";
import Image from "../Elements/Works/Image";
import Name from "../Elements/Works/Name";
import Url from "../Elements/Works/Url";
import { useState, useEffect } from "react";

const WorksInterface = () => {
  const [showAll, setShowAll] = useState(false);
  const [renderAll, setRenderAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setRenderAll(true);
    } else {
      const timeout = setTimeout(() => {
        setRenderAll(false);
      }, 800);

      return () => clearTimeout(timeout);
    }
  }, [showAll]);

  const displayedData = renderAll
    ? WorksInterfaceData
    : WorksInterfaceData.slice(0, 2);

  return (
    <div>
      <div className="mx-auto my-7 max-w-5xl rounded-[2rem] border border-slate-700 py-12 dark:border-blue-400 lg:max-w-xl md:max-w-lg sm:my-6 sm:max-w-xs sm:rounded-3xl sm:py-8">
        <TitleWorks
          classname="bg-blue-400/10 text-blue-400 dark:bg-blue-800"
          title="Interface Design"
        />
        <div className="flex justify-center">
          <div
            className={`flex max-w-5xl flex-wrap justify-center gap-7 overflow-hidden transition-all duration-700 ease-in-out sm:gap-5 ${
              showAll ? "max-h-[3000px]" : "max-h-[420px] sm:max-h-[760px]"
            }`}
          >
            {displayedData.map((workInterface) => (
              <div key={workInterface.id}>
                <Link to={`/interface/${workInterface.slug}`}>
                  <Image image={workInterface.image} />
                </Link>
                <div className="max-w-md sm:max-w-[16rem]">
                  <Name
                    classname={workInterface.css}
                    name={workInterface.name}
                  />
                  <div className="flex justify-end sm:block">
                    <Url
                      link={workInterface.link}
                      live={workInterface.live}
                      platform="Figma"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-7 flex justify-center">
          <button
            className="rounded-lg bg-blue-700 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-blue-800 dark:border dark:border-blue-400 dark:bg-blue-900 dark:text-white dark:hover:bg-blue-700"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorksInterface;
