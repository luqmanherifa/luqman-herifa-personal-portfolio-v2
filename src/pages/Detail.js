import React, { useEffect, useState } from "react";
import jsonData from "../data/works-web.json";
import { Link, useParams } from "react-router-dom";
import Image from "../components/Elements/Works/Image";
import Name from "../components/Elements/Works/Name";
import Desc from "../components/Elements/Works/Desc";
import Tech from "../components/Elements/Works/Tech";
import Url from "../components/Elements/Works/Url";

function Detail() {
  const [data, setData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    setData(jsonData);
  }, []);

  const selectedObject = data ? data.find((obj) => obj.slug === slug) : null;

  useEffect(() => {
    if (selectedObject) {
      document.title = selectedObject.name;
    }
  }, [selectedObject]);

  return (
    <div className="flex justify-center pt-9 pb-20">
      {selectedObject && (
        <div>
          <Image image={selectedObject.image}></Image>
          <div className="max-w-md sm:max-w-[16rem]">
            <Name
              classname={selectedObject.css}
              name={selectedObject.name}
            ></Name>
            <Desc
              classname={selectedObject.css}
              desc={selectedObject.desc}
            ></Desc>
            <div className="flex justify-between sm:block">
              <Tech
                classname={selectedObject.css}
                classname3={selectedObject.css}
                tech1={selectedObject.tech1}
                tech2={selectedObject.tech2}
                tech3={selectedObject.tech3}
              ></Tech>
              <Url link={selectedObject.link} live={selectedObject.live}></Url>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
