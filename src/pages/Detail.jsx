import React, { useEffect, useState } from "react";
import jsonData from "../data/works-web.json";
import { useParams } from "react-router-dom";
import Image from "../components/Elements/Works/Image";
import Name from "../components/Elements/Works/Name";
import Desc from "../components/Elements/Works/Desc";
import { motion } from "framer-motion";

const Detail = () => {
  const [data, setData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    setData(jsonData);
  }, []);

  const selectedObject = data ? data.find((obj) => obj.slug === slug) : null;

  useEffect(() => {
    if (selectedObject) {
      document.title = "Under Construction! " + selectedObject.name;
    }
  }, [selectedObject]);

  return (
    <motion.div
      className="mx-auto flex max-w-6xl justify-center pb-20 pt-9"
      initial={{ opacity: 0 }}
      animate={{ x: [-150, 0], opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <div className="">
        <div className="mb-5 animate-bounce text-center text-xl font-medium text-white dark:text-black">
          This page is under construction!
        </div>
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
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Detail;
