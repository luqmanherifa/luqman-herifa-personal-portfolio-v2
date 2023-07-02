import WorksOtherData from "../../data/works-other.json";
import TitleWorks from "../Elements/Title/TitleWorks";
import Image from "../Elements/Works/Image";
import Name from "../Elements/Works/Name";
import Desc from "../Elements/Works/Desc";
import Tech from "../Elements/Works/Tech";
import Url from "../Elements/Works/Url";
import { useState } from "react";

const WorksOther = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayData = showAll ? WorksOtherData : WorksOtherData.slice(0, 6);

  return (
    <div>
      <div className="mx-auto my-7 max-w-5xl rounded-[2rem] border border-slate-700 py-12 dark:border-slate-400 lg:max-w-xl md:max-w-lg sm:my-6 sm:max-w-xs sm:rounded-3xl sm:py-8">
        <TitleWorks
          classname="bg-gray-400/10 text-gray-300 dark:text-gray-500 dark:bg-gray-400/20"
          title="Other Projects"
        ></TitleWorks>
        <div className="flex justify-center">
          <div className="flex max-w-5xl flex-wrap justify-center gap-7 sm:gap-5">
            {displayData.map((workOther) => {
              return (
                <div key={workOther.id}>
                  <Image link={workOther.link} image={workOther.image}></Image>
                  <div className="max-w-md sm:max-w-[16rem]">
                    <Name
                      classname={workOther.css}
                      name={workOther.name}
                    ></Name>
                    <Desc
                      classname={workOther.css}
                      desc={workOther.desc}
                    ></Desc>
                    <div className="flex justify-between sm:block">
                      <Tech
                        classname={workOther.css}
                        tech1={workOther.tech1}
                        tech2={workOther.tech2}
                        tech3={workOther.tech3}
                      ></Tech>
                      <Url link={workOther.link} live={workOther.live}></Url>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-7 flex justify-center">
          <button
            className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
            onClick={toggleShowAll}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorksOther;
