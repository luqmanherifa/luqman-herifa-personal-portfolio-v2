import WorksWebData from "../../data/works-web.json";
import TitleWorks from "../Elements/Title/TitleWorks";
import Image from "../Elements/Works/Image";
import Name from "../Elements/Works/Name";
import Desc from "../Elements/Works/Desc";
import Tech from "../Elements/Works/Tech";
import Url from "../Elements/Works/Url";
import { Link } from "react-router-dom";
import { useState } from "react";

const WorksWeb = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayWebData = showAll ? WorksWebData : WorksWebData.slice(0, 4);

  return (
    <div>
      <div className="mx-auto my-7 max-w-5xl rounded-[2rem] border border-slate-700 py-12 dark:border-slate-400 lg:max-w-xl md:max-w-lg sm:my-6 sm:max-w-xs sm:rounded-3xl sm:py-8">
        <TitleWorks
          classname="bg-yellow-400/10 text-yellow-400 dark:bg-yellow-400/20"
          title="Web Development"
        ></TitleWorks>
        <div className="flex justify-center">
          <div className="flex max-w-5xl flex-wrap justify-center gap-7 sm:gap-5">
            {displayWebData.map((workWeb) => {
              return (
                <div key={workWeb.id}>
                  <Link to={`/works/${workWeb.slug}`}>
                    <Image image={workWeb.image}></Image>
                  </Link>
                  <div className="max-w-md sm:max-w-[16rem]">
                    <Name classname={workWeb.css} name={workWeb.name}></Name>
                    <Desc classname={workWeb.css} desc={workWeb.desc}></Desc>
                    <div className="flex justify-between sm:block">
                      <Tech
                        classname={workWeb.css}
                        classname3={workWeb.css}
                        tech1={workWeb.tech1}
                        tech2={workWeb.tech2}
                        tech3={workWeb.tech3}
                      ></Tech>
                      <Url link={workWeb.link} live={workWeb.live}></Url>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-7 flex justify-center">
          <button
            className="rounded-lg bg-blue-700 px-4 py-2 text-xs font-medium text-white hover:bg-blue-800"
            onClick={toggleShowAll}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorksWeb;
