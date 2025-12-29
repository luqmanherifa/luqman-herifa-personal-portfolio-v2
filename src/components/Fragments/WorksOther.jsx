import WorksOtherData from "../../data/works-other.json";
import Image from "../Elements/Works/Image";
import Name from "../Elements/Works/Name";
import Desc from "../Elements/Works/Desc";
import Tech from "../Elements/Works/Tech";
import Url from "../Elements/Works/Url";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const WorksOther = () => {
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

  const displayedData = renderAll ? WorksOtherData : WorksOtherData.slice(0, 6);

  return (
    <div>
      <div className="mx-auto my-7 max-w-5xl lg:max-w-xl md:max-w-lg sm:my-6 sm:max-w-xs sm:py-0">
        <div className="flex justify-center">
          <div
            className={`flex max-w-5xl flex-wrap justify-center gap-7 overflow-hidden transition-all duration-700 ease-in-out sm:gap-5 ${
              showAll
                ? "max-h-[4000px] sm:max-h-[5000px]"
                : "max-h-[1500px] dark:max-h-[1550px] sm:max-h-[2300px] dark:sm:max-h-[2350px]"
            }`}
          >
            {displayedData.map((workOther) => (
              <div key={workOther.id}>
                <Link to={`/explorations/${workOther.slug}`}>
                  <Image image={workOther.image} />
                </Link>
                <div className="max-w-md sm:max-w-[20rem]">
                  <Name classname={workOther.css} name={workOther.name} />
                  <Desc classname={workOther.css} desc={workOther.desc} />
                  <div className="flex justify-between">
                    <Tech
                      classname={workOther.css}
                      tech1={workOther.tech1}
                      tech2={workOther.tech2}
                    />
                    <Url link={workOther.link} live={workOther.live} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-7 flex justify-center">
          <button
            className="rounded-lg bg-blue-700 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-blue-800 dark:border dark:border-blue-400 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-700"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorksOther;
