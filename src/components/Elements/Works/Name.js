const Name = (props) => {
  const { name, classname } = props;
  return <div className={`mt-2 rounded-lg py-2 px-3 text-sm font-bold line-clamp-1 ${classname}`}>{name}</div>;
};

export default Name;
