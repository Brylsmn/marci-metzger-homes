export const Services = () => {
  return (
    <div className="bg-(--color-off-white)  lg:pb-20">
      <h1 className="text-(--color-blue) font-inria-serif-bold text-3xl lg:text-4xl text-center py-10 lg:py-16">
        OUR SERVICES
      </h1>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-6 lg:px-8 xl:gap-8 xl:max-w-7xl xl:mx-auto">
        <div className="px-8 lg:px-0 lg:w-1/3 lg:max-w-sm mb-12 lg:mb-0">
          <img
            src="../assets/services/image-4.webp"
            alt="Real Estate"
            className="rounded-lg w-full h-64 object-cover shadow-lg"
          />
          <div className="relative -top-12 shadow-xl mx-6 lg:mx-4 p-4 bg-white rounded-lg">
            <h2 className="text-(--color-blue) text-center font-inria-serif-bold text-xl pb-4">
              Real Estate Done Right
            </h2>
            <p className="text-center lg:text-justify font-inria-sans-regular text-sm leading-relaxed">
              Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!
            </p>
          </div>
        </div>
        <div className="px-8 lg:px-0 lg:w-1/3 lg:max-w-sm mb-12 lg:mb-0">
          <img
            src="../assets/services/image-5.webp"
            alt="Commercial & Residential"
            className="rounded-lg w-full h-64 object-cover shadow-lg"
          />
          <div className="relative -top-12 shadow-xl mx-6 lg:mx-4 p-4 bg-white rounded-lg">
            <h2 className="text-(--color-blue) text-center font-inria-serif-bold text-xl pb-4">
              Commercial & Residential
            </h2>
            <p className="text-center lg:text-justify font-inria-sans-regular text-sm leading-relaxed">
              Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.
            </p>
          </div>
        </div>
        <div className="px-8 lg:px-0 lg:w-1/3 lg:max-w-sm mb-12 lg:mb-0">
          <img
            src="../assets/services/image-6.webp"
            alt="Expertise"
            className="rounded-lg w-full h-64 object-cover shadow-lg"
          />
          <div className="relative -top-12 shadow-xl mx-6 lg:mx-4 p-4 bg-white rounded-lg">
            <h2 className="text-(--color-blue) text-center font-inria-serif-bold text-xl pb-4">
              Rely on Expertise
            </h2>
            <p className="text-center lg:text-justify font-inria-sans-regular text-sm leading-relaxed">
              If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};