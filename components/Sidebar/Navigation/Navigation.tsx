"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBowlFood } from "react-icons/fa6";
import { RiSettings4Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
const Navigation = () => {
  const itemsStyles =
    "p-4 rounded-l-xl flex justify-start items-center gap-2 duration-300";
  const path = usePathname();
  const [activeItem, setActiveItem] = useState(path);
  useEffect(() => {
    setActiveItem(path);
  }, [path]);

  const sidebarList = [
    {
      icon: <BiSolidDashboard className="text-3xl" />,
      title: "Dashboard",
      link: "/dashboard",
    },
    // {
    //   icon: <FaBowlFood className="text-3xl" />,
    //   title: "Ingredients",
    //   link: "/ingredients",
    // },
    // {
    //   icon: <FaBowlFood className="text-3xl" />,
    //   title: "Meals",
    //   link: "/meals",
    // },
    {
      icon: <RiSettings4Fill className="text-3xl" />,
      title: "Settings",
      link: "/settings",
    },
  ];
  return (
    <ul className="flex flex-col gap-2 [&>li]:cursor-pointer w-full justify-center pl-4  max-[1600px]:pl-0">
      {sidebarList.map((item) => (
        <Link href={item.link} key={item.title}>
          <li
            className={
              activeItem === item.link || activeItem === item.title
                ? `${itemsStyles} bg-[#f8f8ff] text-[#8a4af2]`
                : `${itemsStyles} bg-transparent text-[#dacafb]`
            }
            onClick={() => setActiveItem(item.title)}
          >
            {item.icon}
            <span className="font-bold max-[1600px]:hidden group-hover:max-[1600px]:block">
              {item.title}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Navigation;
