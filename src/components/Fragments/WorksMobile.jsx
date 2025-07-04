import WorksMobileData from "../../data/works-mobile.json";
import TitleWorks from "../Elements/Title/TitleWorks";
import Image from "../Elements/Works/Image";
import Name from "../Elements/Works/Name";
import Desc from "../Elements/Works/Desc";
import Tech from "../Elements/Works/Tech";
import Url from "../Elements/Works/Url";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const WorksMobile = () => {
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
    ? WorksMobileData
    : WorksMobileData.slice(0, 2);

  return (
    <div>
      <div className="mx-auto my-7 max-w-5xl rounded-[2rem] border border-slate-700 py-12 dark:border-blue-600 lg:max-w-xl md:max-w-lg sm:my-6 sm:max-w-xs sm:rounded-3xl sm:py-8">
        <TitleWorks
          classname="border border-green-400 text-green-400 dark:bg-slate-100"
          title="Mobile Development"
        />
        <div className="flex justify-center">
          <div
            className={`flex max-w-5xl flex-wrap justify-center gap-7 overflow-hidden transition-all duration-700 ease-in-out sm:gap-5 ${
              showAll ? "max-h-[3000px]" : "max-h-[500px] sm:max-h-[760px]"
            }`}
          >
            {displayedData.map((workMobile) => (
              <div key={workMobile.id}>
                <Link to={`/mobile/${workMobile.slug}`}>
                  <Image image={workMobile.image} />
                </Link>
                <div className="max-w-md sm:max-w-[16rem]">
                  <Name classname={workMobile.css} name={workMobile.name} />
                  <Desc classname={workMobile.css} desc={workMobile.desc} />
                  <div className="flex justify-between sm:block">
                    <Tech
                      classname={workMobile.css}
                      tech1={workMobile.tech1}
                      tech2={workMobile.tech2}
                      tech3={workMobile.tech3}
                    />
                    <Url link={workMobile.link} live={workMobile.live} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-7 flex justify-center">
          <button
            className="rounded-lg bg-blue-700 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-blue-800 dark:border dark:border-blue-600 dark:bg-blue-100 dark:text-blue-600 dark:hover:bg-blue-200"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorksMobile;
