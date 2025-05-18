import WorksMobileData from "../../data/works-mobile.json";
import TitleWorks from "../Elements/Title/TitleWorks";
import Image from "../Elements/Works/Image";
import Name from "../Elements/Works/Name";
import Desc from "../Elements/Works/Desc";
import Tech from "../Elements/Works/Tech";
import Url from "../Elements/Works/Url";
import { Link } from "react-router-dom";

const WorksMobile = () => {
  return (
    <div>
      <div className="mx-auto my-7 max-w-5xl rounded-[2rem] border border-slate-700 py-12 dark:border-blue-600 lg:max-w-xl md:max-w-lg sm:my-6 sm:max-w-xs sm:rounded-3xl sm:py-8">
        <TitleWorks
          classname="bg-lime-400/10 text-lime-400 dark:bg-slate-100"
          title="Mobile Development"
        ></TitleWorks>
        <div className="flex justify-center">
          <div className="flex max-w-5xl flex-wrap justify-center gap-7 sm:gap-5">
            {WorksMobileData.map((workMobile) => {
              return (
                <div key={workMobile.id}>
                  <Link to={`/mobile/${workMobile.slug}`}>
                    <Image image={workMobile.image}></Image>
                  </Link>
                  <div className="max-w-md sm:max-w-[16rem]">
                    <Name
                      classname={workMobile.css}
                      name={workMobile.name}
                    ></Name>
                    <Desc
                      classname={workMobile.css}
                      desc={workMobile.desc}
                    ></Desc>
                    <div className="flex justify-between sm:block">
                      <Tech
                        classname={workMobile.css}
                        tech1={workMobile.tech1}
                        tech2={workMobile.tech2}
                        tech3={workMobile.tech3}
                      ></Tech>
                      <Url link={workMobile.link} live={workMobile.live}></Url>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksMobile;
