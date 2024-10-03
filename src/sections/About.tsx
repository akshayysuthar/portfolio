import Cards from "@/components/Cards";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItem from "@/components/ToolboxItem";

const hobbies = [
  {
    name: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    name: "Movies",
    emoji: "🎬",
    left: "10%",
    top: "35%",
  },
  {
    name: "Sleeping",
    emoji: "😴",
    left: "25%",
    top: "15%",
  },
  {
    name: "Planting",
    emoji: "🌱",
    left: "50%",
    top: "5%",
  },
  {
    name: "Workout",
    emoji: "💪",
    left: "35%",
    top: "40%",
  },

  {
    name: "Music",
    emoji: "🎵",
    left: "40%",
    top: "25%",
  },
];

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I do, and what inspire me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Cards className="h-[320px] md:col-span-2 lg:col-span-1 ">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image className="" src={bookImage} alt="Book Cover" />
              </div>
            </Cards>
            <Cards className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolsbox"
                description="Explore the technologies and tools I use to craft exceplional
                digital experiences."
                className=""
              />
              <ToolboxItem items={toolboxItems} className="" />
              <ToolboxItem
                items={toolboxItems}
                className="mt-6 "
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Cards>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Cards className="h-[320px] md:col-span-3 p-0 flex flex-col lg:col-span-2">
              <div className="relative flex-1 h-full w-full">
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the digital realm"
                  className="px-6 py-6"
                />
                <div className="relative h-full w-full">
                  {hobbies.map((item) => (
                    <div
                      className="inline-flex gap-2 items-center px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{
                        left: item.left,
                        top: item.top,
                      }}
                      key={item.name}
                    >
                      <span className="font-medium text-gray-950">
                        {item.name}
                      </span>
                      <span>{item.emoji}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Cards>

            <Cards className="h-[320px] md:col-span-2 p-0 relative lg:col-span-1">
              <Image
                alt="map image"
                className="h-full w-full object-cover object-left-top"
                src={mapImage}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:co-[] after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  alt="smiling memoji"
                  className="size-20"
                  src={smileMemoji}
                />
              </div>
            </Cards>
          </div>
        </div>
      </div>
    </div>
  );
};
