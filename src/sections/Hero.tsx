import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="inset-0 absolute [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] ">
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] animate-pulse hero-ring"></div>
        <div className="size-[820px] animate-pulse hero-ring"></div>
        <div className="size-[1020px] animate-pulse hero-ring"></div>
        <div className="size-[1220px] animate-pulse hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrdit
          OrditDuration="30s"
          shouldSpin
          spinDuration="10s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrdit
          OrditDuration="32s"
          shouldSpin
          spinDuration="12s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={-45}
          shouldOrdit
          OrditDuration="34s"
          shouldSpin
          spinDuration="14s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrdit
          OrditDuration="36s"
          shouldSpin
          spinDuration="16s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrdit
          OrditDuration="38s"
          shouldSpin
          spinDuration="18s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrdit
          OrditDuration="40s"
          shouldSpin
          spinDuration="20s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrdit
          OrditDuration="42s"
          shouldSpin
          spinDuration="22s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrdit
          OrditDuration="44s"
          shouldSpin
          spinDuration="24s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrdit
          OrditDuration="46s"
          shouldSpin
          spinDuration="26s"
        >
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrdit
          OrditDuration="48s"
          shouldSpin
          spinDuration="26s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative ">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping "></div>
            </div>
            <div className="text-sm font-semibold ">
              Availabe for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className=" md:text-5xl font-serif text-3xl text-center mt-8 tracking-wide">
            Building Exceptonal User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforimg designs into functional, high-performing
            web application, Let&apos;s discuss your next project
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold ">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span className="font-semibold ">👋</span>
            <span>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
