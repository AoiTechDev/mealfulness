import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import chatbot from "@/assets/chatbot.svg";
import nutrition from "@/assets/nutrition.webp";
import prepare from "@/assets/prepare.jpg";
import calendar from "@/assets/calendar.jpg";
import stats from "@/assets/stats.webp";
import Image from "next/image";
const Features = () => {
  return (
    <BentoGrid className="max-w-6xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2 " : ""}
        />
      ))}
    </BentoGrid>
  );
};

export default Features;
const SvgHeader = ({src}: any) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl "> 
    <Image src={src} alt="ai" className=" object-scale-down"/>
  </div>
);
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Meal Calendar Management",
    description:
      "Effortlessly track your daily meals by adding them to your personalized calendar for easy reference and analysis.",
    header: <SvgHeader src={calendar}/>,
  },
  {
    title: "Nutrition Lookup",
    description:
      "Access a vast database of nutrition information through our API, empowering you to make informed dietary choices.",
    header: <SvgHeader src={nutrition}/>,
  },
  {
    title: "Custom Meal Preparation",
    description:
      "Craft your own meals with ease and save them for future use, making meal planning simpler and more efficient.",
    header: <SvgHeader src={prepare}/>,
  },
  {
    title: "Weekly Nutrition Overview",
    description:
      "Visualize your weekly nutrition intake with interactive charts, enabling you to monitor your dietary habits and progress over time.",
    header: <SvgHeader src={stats}/>,
  },
  {
    title: "AI Meal Assistance",
    description:
      "Receive personalized meal suggestions and assistance from our AI, streamlining your meal planning process and ensuring optimal nutrition.",
    header: <SvgHeader src={chatbot}/>,
  },
];