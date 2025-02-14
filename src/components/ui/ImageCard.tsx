"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { imagesURL } from "@/data/images";

const imageURL =
  "https://res.cloudinary.com/dsq0czzcy/image/upload/v1739534976/feb-fourteen";

export const ImageCard = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % imageURL.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + imageURL.length) % imageURL.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Cambia cada 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      {/* Contenedor de imágenes */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {imagesURL.map((image) => (
          <Image
            src={`${imageURL}${image.src}`}
            alt={image.alt}
            width={image.width}
            height={image.height}
            key={image.src}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Botón Anterior */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ❮
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};
