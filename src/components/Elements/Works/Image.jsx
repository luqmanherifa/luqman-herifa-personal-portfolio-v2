const Image = (props) => {
  const { image } = props;
  return (
    <div>
      <figure className="group relative max-w-md overflow-hidden rounded-2xl transition-all duration-500 hover:scale-95 sm:max-w-[16rem] sm:rounded-lg">
        <img
          src={image}
          alt=""
          className="cursor-pointer transition-all duration-500 group-hover:rotate-6 group-hover:scale-125"
        />
      </figure>
    </div>
  );
};

export default Image;
