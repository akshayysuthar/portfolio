import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotation,
  OrditDuration,
  spinDuration,
  shouldSpin,
  shouldOrdit,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  spinDuration?: string;
  OrditDuration?: string;
  shouldOrdit?: boolean;
  shouldSpin?: boolean;
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className={twMerge(shouldOrdit == true && "animate-spin")}
        style={{
          animationDuration: OrditDuration,
        }}
      >
        <div
          className=""
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(
              shouldSpin == true && " animate-spin",
              "inline-flex"
            )}
            style={{
              transform: `rotate(${rotation * -1}deg)`,
              animationDuration: spinDuration,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
