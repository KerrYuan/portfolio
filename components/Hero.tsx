import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import nextConfig from "@/next.config";
import Image from "next/image";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/TypewriterEffect";

const Hero = () => {
  return (
    <div className="min-h-screen pt-36 pb-20">
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
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 my-20 grid grid-cols-1 justify-center gap-x-4 md:grid-cols-4 md:gap-x-9 lg:grid-cols-12">
        {/* Left Part*/}
        <div className="order-2 flex w-full flex-col items-center justify-center border-2 border-amber-500 md:order-1 md:col-span-3 lg:col-span-8">
          {/*<h2 className="max-w-80 text-center text-xs tracking-widest text-blue-100 uppercase">*/}
          {/*  Dynamic Web Magic with Next.js some tech stack of this website*/}
          {/*</h2>*/}
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="I'm Kerr , I'm here."
            duration={3}
            filter={true}
          />
          <TypewriterEffect
            words={[
              {
                text: " I'm Kerr, I'm here.",
                className:
                  "text-center text-[40px] md:text-5xl lg:text-6xl tracking-wide",
              },
            ]}
            cursorClassName="bg-amber-400"
          />

          <p className="mb-4 text-center text-sm text-black md:text-lg md:tracking-wider lg:text-2xl dark:text-blue-50">
            some introduction summary... some introduction summary...some
            introduction summary...some introduction summary...some introduction
            summary...some introduction summary...
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        {/* Right Image */}
        <div
          className={
            "col-span-1 flex justify-center border-2 border-amber-500 md:order-2 md:pb-24 lg:col-span-4"
          }
        >
          <Image
            src={`${nextConfig.assetPrefix}/kerrCoding.png`}
            alt={"A image of Kerr"}
            width={300}
            height={300}
            className={"object-contain"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
