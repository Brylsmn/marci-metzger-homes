import useCarousel from "../utils/useCarousel";

export const PhotoGallery = () => {
  const { images, current, nextSlide, prevSlide, setCurrent } = useCarousel(3000);

  return (
    <section className="bg-(--color-bg) py-10 px-4 h-[60vh] md:h-[74vh]">
      <h1 className="text-(--color-dark-blue) font-inria-serif-bold text-3xl text-center py-4 pb-12 lg:text-4xl">
        PHOTO GALLERY
      </h1>
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-lg bg-white">
          <div className="relative h-56 md:h-96">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-white" : "bg-white/40"
                  }`}
              />
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-0 left-0 z-20 flex items-center justify-center h-full px-4 group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 transition">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-0 right-0 z-20 flex items-center justify-center h-full px-4 group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 transition">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
