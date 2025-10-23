export const Footer = () => {
  return (
    <div className="bg-(--color-off-black) flex flex-col justify-evenly gap-10 p-16">
      <div className="flex flex-row justify-center gap-12">
        <img src="../assets/header/fb-svg.svg" alt="facebook-logo" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] invert"/>
        <img src="../assets/header/ig-svg.svg" alt="instagram-logo" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] invert"/>
        <img src="../assets/header/in-svg.svg" alt="linkedin-logo" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] invert"/>
        <img src="../assets/header/yelp-svg.svg" alt="yelp-logo" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] invert"/>
      </div>
      <div className="text-(--color-off-white) text-center font-inria-sans-regular">
        Copyright © 2023 Marci METZGER Homes - All Rights Reserved
      </div>
      <div className="border-t border-(--color-gray) w-30 block mx-auto" />
      <div className="text-(--color-off-white) text-center font-inria-sans-regular text-md">
        Powered by
      </div>
      <div className="flex justify-center ">
        <img src="../assets/footer/GoDaddy Airo®.svg" alt="GoDaddy-logo" className="w-[100px] md:w-[120px] lg:w-[140px] invert"/>
      </div>
    </div>
  );
};