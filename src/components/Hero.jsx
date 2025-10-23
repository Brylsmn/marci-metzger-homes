export const Hero = () => {
  return (
    <div className="flex flex-col bg-(--color-bg) py-8 md:flex-row md:items-center md:justify-center md:px-8 lg:p-24">
      <div className="mx-4 md:mx-0">
        <img 
          src="../assets/hero/marci-metzger.webp" 
          alt="marci-metzger-image" 
          className="w-full rounded-t-lg md:drop-shadow-2xl md:rounded-l-lg md:rounded-tr-none md:h-74 lg:max-w-md xl:h-100" 
        />
      </div>
      <div className="bg-white mx-4 rounded-b-lg drop-shadow-2xl md:mx-0 md:rounded-r-lg md:rounded-bl-none md:py-8 md:px-12 md:flex md:flex-col md:justify-center md:min-w-[400px] md:h-74 lg:min-w-[500px] xl:min-w-[700px] xl:h-100">
        <h1 className="text-center font-inria-serif-bold text-4xl color-blue py-10 md:py-6 md:text-start md:pb-14 xl:text-6xl">
          Marci Metzger
        </h1>
        <p className="text-center text-(--color-off-black) font-inria-sans-regular text-2xl md:text-start xl:text-4xl">
          REALTOR FOR NEARLY 3 DECADES!
        </p>
        <p className="text-center text-(--color-off-black) font-inria-sans-regular text-2xl pt-6 pb-10 md:pb-6 md:text-start xl:text-4xl">
          206-919-6886
        </p>
      </div>
    </div>
  );
};