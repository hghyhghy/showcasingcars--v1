
"use client";

import Image from "next/image";

import Custombutton from "./Custombutton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title -top-[3rem]  relative">
          Find, book, rent a car—quickly and super easily!
        </h1>

        <p className="hero__subtitle relative -top-[3rem]">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <Custombutton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full -mt-8"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay  " />
      </div>
    </div>
  );
};

export default Hero;
