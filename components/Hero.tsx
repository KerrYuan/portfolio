import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pt-36 pb-20">
      {/* Spotlight */}
      <div>
        <Spotlight
          className="-top-40 -left-10 h-screen md:-top-20 md:-left-32"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50wh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50wh]" fill="blue " />
      </div>

      {/* Grid */}
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:100px_100px]",
            "[background-image:linear-gradient(to_right,#e4e4e730_2px,transparent_2px),linear-gradient(to_bottom,#e4e4e730_2px,transparent_2px)]",
            "dark:[background-image:linear-gradient(to_right,#26262680_2px,transparent_2px),linear-gradient(to_bottom,#26262680_2px,transparent_2px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </div>

      {/* Hero Main content */}
      <div className="relative z-10 my-20 flex justify-center">
        <div className="justify center flex max-w-[89vw] flex-col items-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs tracking-widest text-blue-100 uppercase">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
            duration={3}
            filter={true}
          />
          <p className="mb-4 text-center text-sm text-black md:text-lg md:tracking-wider lg:text-2xl dark:text-white">
            Hi, I&apos;m Kerr.
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
