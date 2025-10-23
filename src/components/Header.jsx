
export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] lg:min-h-[90vh]">
      <h1 className="text-center font-inria-serif-regular text-white text-xl px-4 pb-8 lg:text-2xl 2xl:text-4xl">MARCI METZGER - THE RIDGE REALTY GROUP</h1>
      <h1 className="text-center font-inria-serif-bold text-white text-3xl lg:text-6xl 2xl:text-8xl">Pahrump Realtor</h1>

      <div className="flex flex-row pt-12 pb-12 gap-12">
        <img src="../assets/header/fb-svg.svg" alt="facebook-logo" className="w-5 h-5 lg:w-[30px] lg:h-[30px] 2xl:w-10 2xl:h-10 invert"/>
        <img src="../assets/header/ig-svg.svg" alt="instagram-logo" className="w-5 h-5 lg:w-[30px] lg:h-[30px] 2xl:w-10 2xl:h-10 invert"/>
        <img src="../assets/header/in-svg.svg" alt="linkedin-logo" className="w-5 h-5 lg:w-[30px] lg:h-[30px] 2xl:w-10 2xl:h-10 invert"/>
        <img src="../assets/header/yelp-svg.svg" alt="yelp-logo" className="w-5 h-5 lg:w-[30px] lg:h-[30px] 2xl:w-10 2xl:h-10 invert"/>
      </div>
    </div>
  )
}