import { useState, useEffect } from "react";

export default function useCarousel(interval = 3000) {
  const images = [
    "/assets/photo-gallery/pg-1.webp",
    "/assets/photo-gallery/pg-2.webp",
    "/assets/photo-gallery/pg-3.webp",
    "/assets/photo-gallery/pg-4.webp",
    "/assets/photo-gallery/pg-5.webp",
    "/assets/photo-gallery/pg-6.webp",
    "/assets/photo-gallery/pg-7.webp",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return { images, current, nextSlide, prevSlide, setCurrent };
}
