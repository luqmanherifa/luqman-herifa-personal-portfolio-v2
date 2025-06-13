const Name = (props) => {
  const { name, classname } = props;
  return (
    <div
      className={`mt-2 w-[28rem] rounded-lg py-2 px-3 text-sm font-medium sm:w-[16rem] ${classname}`}
    >
      <p className="line-clamp-1">{name}</p>
    </div>
  );
};

export default Name;
