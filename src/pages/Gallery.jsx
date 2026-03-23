import React, { useEffect } from 'react';

import img1 from '../assets/Journey-Moments/1712130826322.jpeg';
import img2 from '../assets/Journey-Moments/1721198371468.jpeg';
import img3 from '../assets/Journey-Moments/1724674020616.jpeg';
import img4 from '../assets/Journey-Moments/1733233778038.jpeg';
import img5 from '../assets/Journey-Moments/1744006837657.jpeg';
import img6 from '../assets/Journey-Moments/1744742185433.jpeg';
import img7 from '../assets/Journey-Moments/1745060598039.jpeg';
import img8 from '../assets/Journey-Moments/1769832302764.jpeg';
import img9 from '../assets/Journey-Moments/1770095192180.jpeg';
import img10 from '../assets/Journey-Moments/1770388188925.jpeg';
import img11 from '../assets/Journey-Moments/1771668710733.jpeg';
import img12 from '../assets/Journey-Moments/1771748394607.jpeg';
import img13 from '../assets/Journey-Moments/1771748395191.jpeg';

export default function Gallery() {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13
  ];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getSpanClass = (index) => {
    // Bento grid layout logic
    if (index === 0) return "md:col-span-2 md:row-span-2";
    if (index === 3) return "md:col-span-2 md:row-span-1";
    if (index === 6) return "md:col-span-2 md:row-span-2";
    if (index === 10) return "md:col-span-2 md:row-span-1";
    return "col-span-1 row-span-1";
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-bone via-creme to-creme font-sans pt-32 lg:pt-48 pb-24 px-0 md:px-6 lg:px-12 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-5%] left-[-10%] w-96 h-96 bg-clay/5 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-5%] w-[30rem] h-[30rem] bg-navy/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header section - with more visibility */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24 px-6 md:px-0">
          <h1 className="text-5xl lg:text-7xl font-black text-navy tracking-tighter mb-4 mt-10 uppercase">
            Journey <span className="text-clay italic font-light lowercase">Moments</span>
          </h1>
          <p className="text-oak/80 text-lg lg:text-xl leading-relaxed font-light">
            A visual reflection of the path traveled. Captured moments of insight, leadership, and connection across the globe.
          </p>
        </div>

        {/* Bento Grid Gallery - Mobile (single column, cornerless) Desktop (bento grid) */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[250px] gap-0 md:gap-4 lg:gap-6">
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className={`relative rounded-none md:rounded-xl overflow-hidden shadow-none md:shadow-md hover:shadow-2xl transition-all duration-500 group ${getSpanClass(index)}`}
            >
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src={imgSrc}
                alt={`Journey moment ${index + 1}`}
                className="w-full h-auto md:h-full object-contain md:object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
