const Desc = (props) => {
  const { desc, classname } = props;
  return (
    <div
      className={`mt-2 rounded-lg py-2 px-3 text-sm line-clamp-2 ${classname}`}
    >
      {desc}
    </div>
  );
};

export default Desc;
