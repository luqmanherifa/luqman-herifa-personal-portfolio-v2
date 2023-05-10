const Image = (props) => {
  const { link, image } = props;
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <figure className="group relative max-w-md overflow-hidden rounded-2xl transition-all duration-500 hover:scale-95 sm:max-w-[16rem] sm:rounded-lg">
        <img src={image} alt="" className="cursor-pointer transition-all duration-500 group-hover:rotate-6 group-hover:scale-125" />
      </figure>
    </a>
  );
};

export default Image;