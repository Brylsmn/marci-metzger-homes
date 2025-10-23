import { useInfiniteScroll } from "../utils/useInfiniteScroll";

export const Result = () => {
  const { duplicatedItems } = useInfiniteScroll();

  return (
    <div className="w-full bg-(--color-bg) min-h-[70vh] py-10 lg:py-16">
      <h1 className="text-(--color-dark-blue) font-inria-serif-bold text-3xl lg:text-4xl lg:pb-4 text-center mb-10">
        HOW WE DELIVER RESULTS
      </h1>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-(--color-bg)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-(--color-bg)] to-transparent z-10" />
        <div className="flex animate-scroll-continuous">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="shrink-0 px-6 flex flex-col items-center text-center w-104 md:w-120 lg:w-lg"
            >
              <div className="w-full h-64 lg:h-72 overflow-hidden rounded-2xl shadow-lg mb-6">
                <img
                  src={item.image}
                  alt={item.header}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h2 className="text-(--color-dark-blue) font-inria-serif-bold text-xl lg:text-2xl mb-3">
                {item.header}
              </h2>
              <p className="text-(--color-text) font-inria-sans-regular text-base leading-relaxed px-2">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
