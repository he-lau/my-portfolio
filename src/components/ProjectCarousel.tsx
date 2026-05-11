"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
  images: string[];
  title: string;
}

export default function ProjectCarousel({ images, title }: Props) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="carousel">
      <div
        className="carousel__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={src} className="carousel__slide">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`${title} — vue ${i + 1}`} className="carousel__img" />
          </div>
        ))}
      </div>

      <div className="carousel__overlay" />

      {images.length > 1 && (
        <>
          <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Précédent"><FiChevronLeft size={20} /></button>
          <button className="carousel__btn carousel__btn--next" onClick={next} aria-label="Suivant"><FiChevronRight size={20} /></button>
          <div className="carousel__dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`carousel__dot${i === index ? " carousel__dot--active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Vue ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
