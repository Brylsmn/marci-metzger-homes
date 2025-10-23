export const useInfiniteScroll = () => {

  const items = [
    {
      id: 1,
      image: "/assets/results/image-1.webp",
      header: "Top Residential Sales Last 5 Years",
      paragraph:
        "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
    },
    {
      id: 2,
      image: "/assets/results/image-2.webp",
      header: "Don't Just List it...",
      paragraph:
        "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
    },
    {
      id: 3,
      image: "/assets/results/image-3.webp",
      header: "Guide to Buyers",
      paragraph:
        "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
    },
  ];

  const duplicatedItems = [...items, ...items];

  return { duplicatedItems };
};
