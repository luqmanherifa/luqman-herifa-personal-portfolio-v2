import { useEffect, useState } from "react";

const Image = ({ images = [] }) => {
  const safeImages = images.length ? images : ["/works/uc.png"];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    if (!hovered || safeImages.length <= 1) return;

    setActiveIndex((prev) => (prev === 0 ? 1 : prev));

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeImages.length);
    }, 900);

    return () => clearInterval(interval);
  }, [hovered, safeImages.length]);

  return (
    <figure
      className="group relative h-[336px] max-w-md overflow-hidden rounded-2xl transition-all duration-300 hover:scale-95 sm:h-auto sm:max-w-[20rem] sm:rounded-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setActiveIndex(0);
      }}
    >
      {imageLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-200 dark:bg-slate-700">
          <svg
            aria-hidden="true"
            className="h-8 w-8 animate-spin fill-blue-600 text-slate-200 dark:text-slate-600"
            viewBox="0 0 100 101"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539"
              fill="currentFill"
            />
          </svg>
        </div>
      )}

      <div className="relative h-full w-full overflow-hidden">
        {safeImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            onLoad={() => index === 0 && setImageLoading(false)}
            className={`
              duration-400 absolute inset-0 h-full w-full
              object-cover transition-all ease-out
              ${index === activeIndex ? "opacity-100" : "opacity-0"}
              group-hover:rotate-3 group-hover:scale-125
              ${imageLoading ? "opacity-0" : ""}
              dark:grayscale dark:hue-rotate-[180deg] dark:filter
            `}
          />
        ))}

        <div className="pointer-events-none absolute inset-0 bg-blue-600 opacity-0 dark:opacity-20" />
      </div>
    </figure>
  );
};

export default Image;
