import WorksInterfaceData from "../../data/works-interface.json";
import TitleWorks from "../Elements/TitleWorks";
import Image from "../Elements/Works/Image";
import Name from "../Elements/Works/Name";
import Url from "../Elements/Works/Url";

const WorksInterface = () => {
  return (
    <div>
      <div className="mx-auto my-7 max-w-5xl rounded-[2rem] border border-slate-700 py-12 dark:border-slate-400 lg:max-w-xl md:max-w-lg sm:my-6 sm:max-w-xs sm:rounded-3xl sm:py-8">
        <TitleWorks
          classname="bg-blue-400/10 text-blue-400 dark:bg-blue-400/20"
          title="Interface Design"
        ></TitleWorks>
        <div className="flex justify-center">
          <div className="flex max-w-5xl flex-wrap justify-center gap-7 sm:gap-5">
            {WorksInterfaceData.map((workInterface) => {
              return (
                <div key={workInterface.id}>
                  <Image
                    link={workInterface.link}
                    image={workInterface.image}
                  ></Image>
                  <div className="max-w-md sm:max-w-[16rem]">
                    <div className="flex justify-between sm:block">
                      <Name
                        classname={workInterface.css}
                        name={workInterface.name}
                      ></Name>
                      <Url
                        link={workInterface.link}
                        live={workInterface.live}
                        platform="Figma"
                      ></Url>
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

export default WorksInterface;
