import React, { PropsWithChildren } from "react";
import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

const Cards = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        " bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:pointer-events-none  after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-6",
        className
      )}
      // key={testimonial.name}
    >
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};

export default Cards;
