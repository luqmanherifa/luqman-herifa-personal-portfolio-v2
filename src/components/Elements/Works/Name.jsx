const Name = (props) => {
  const { name, classname } = props;
  return (
    <div
      className={`mt-2 rounded-lg py-2 px-3 text-base font-bold ${classname}`}
    >
      <p className="line-clamp-1">{name}</p>
    </div>
  );
};

export default Name;
