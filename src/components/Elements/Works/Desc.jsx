const Desc = (props) => {
  const { desc, classname } = props;
  return (
    <div className={`mt-2 w-[28rem] rounded-lg py-2 px-3 ${classname}`}>
      <p className="text-sm line-clamp-2">{desc}</p>
    </div>
  );
};

export default Desc;
