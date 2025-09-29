const Tech = (props) => {
  const { tech1, tech2, classname, classname3 = "hidden" } = props;
  return (
    <div className="flex gap-2">
      <div className={`mt-2 rounded-md py-1 px-3 text-xs ${classname}`}>
        {tech1}
      </div>
      <div className={`mt-2 rounded-md py-1 px-3 text-xs ${classname}`}>
        {tech2}
      </div>
    </div>
  );
};

export default Tech;
