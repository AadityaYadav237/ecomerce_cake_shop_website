import React from 'react';
import img from '../../assets/Cake_img_3.jpg';

function HeroSection() {
  return (
    <div>
      <img src={img} alt="" className="w-full h-auto" /> {/* Apply Tailwind CSS classes */}
    </div>
  );
}

export default HeroSection;
