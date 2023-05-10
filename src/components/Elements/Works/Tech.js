const Tech = (props) => {
  const { tech1, tech2, tech3, classname, classname3 = "hidden" } = props;
  return (
    <div className="flex gap-2">
      <div className={`mt-2 rounded-lg py-2 px-3 text-sm ${classname}`}>{tech1}</div>
      <div className={`mt-2 rounded-lg py-2 px-3 text-sm ${classname}`}>{tech2}</div>
      <div className={`mt-2 rounded-lg py-2 px-3 text-sm ${classname3}`}>{tech3}</div>
    </div>
  );
};

export default Tech;
