import WorksWebData from "../../data/works-web.json";
import TitleWorks from "../Elements/TitleWorks";
import Image from "../Elements/Works/Image";
import Name from "../Elements/Works/Name";
import Desc from "../Elements/Works/Desc";
import Tech from "../Elements/Works/Tech";
import Link from "../Elements/Works/Link";

function WorksWeb() {
  return (
    <div>
      <div className="mx-auto my-7 max-w-5xl rounded-[2rem] border border-slate-700 py-12 dark:border-slate-400 lg:max-w-xl md:max-w-lg sm:my-6 sm:max-w-xs sm:rounded-3xl sm:py-8">
        <TitleWorks classname="bg-yellow-400/10 text-yellow-400 dark:bg-yellow-400/20" title="Web Development"></TitleWorks>
        <div className="flex justify-center">
          <div className="flex max-w-5xl flex-wrap justify-center gap-7 sm:gap-5">
            {WorksWebData.map((workWeb) => {
              return (
                <div key={workWeb.id}>
                  <Image link={workWeb.link} image={workWeb.image}></Image>
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
                      <Link link={workWeb.link} live={workWeb.live}></Link>
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
}

export default WorksWeb;
