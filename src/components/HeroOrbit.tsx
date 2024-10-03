import React, { PropsWithChildren } from "react";

const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
      <div
        className="" //border border-red-500 size-[800px] animate-spin [animation-duration:30s]
        style={{
          transform: `rotate(${rotation}deg)`,
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div
          className="inline-flex" //border border-red-500  animate-spin [animation-duration:5s]
          style={{
            transform: `rotate(${rotation * -1}deg)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
