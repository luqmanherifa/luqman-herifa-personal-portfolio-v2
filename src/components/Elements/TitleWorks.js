import { motion } from "framer-motion";

const TitleWorks = (props) => {
  const { title, classname } = props;
  return (
    <div className="text-center">
      <h3 className={`mb-7 inline-block rounded-full px-5 py-2 text-xl font-bold sm:mb-5 sm:text-base ${classname}`}>{title}</h3>
    </div>
  );
};

export default TitleWorks;
