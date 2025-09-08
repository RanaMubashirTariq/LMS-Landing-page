'use client'
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";



const navigationItems = [
  {
    icon: "/icons.svg",
    label: "Home",
    active: true,
    bgColor: "bg-[#acf75f]",
    textColor: "text-[#2e5512]",
  },
  {
    icon: "/icons-3.svg",
    active: false,
    bgColor: "bg-[#3d3d3d]",
  },
  {
    icon: "/icons-2.svg",
    active: false,
    bgColor: "bg-[#3d3d3d]",
  },
  {
    icon: "/icons-8.svg",
    active: false,
    bgColor: "bg-[#3d3d3d]",
  },
  {
    icon: "/icons-13.svg",
    active: false,
    bgColor: "bg-white",
  },
];

const statsData = [
  {
    value: "2k+",
    label: "Active Users",
  },
  {
    value: "100k+",
    label: "Downloads",
  },
];

export default function HeroSection  ()  {
  return (
    <section className="w-full bg-[#f4ffe6] overflow-hidden">
      <div className="max-w-[1200px] mx-auto  pt-[123px] max-[1100px]:pt-[100px] max-[1000px]:pt-10  max-[1022px]:pb-[30px] relative">

      <div className="flex-1 flex flex-col items-center absolute top-[124px] max-[1000px]:top-[140px] max-[1300px]:ml-[100px] max-[1100px]:ml-0 ">
            <h1 className="w-full max-w-[1200px] font-bold  text-black text-[128px] max-[1300px]:text-[100px] max-[767px]:px-[25px] max-[1000px]:text-[80px] max-[800px]:text-[60px] max-[767px]:text-[40px] max-[500px]:text-[34px] max-[1000px]:px-[50px] max-[1300px]:max-w-[1000px] text-center tracking-[0] leading-[100%] font-Plus_Jakarta_Sans ">
              Boost Your Productivity. Simplify Your Day.
            </h1>
          </div>
       

        <div className="flex  flex-row max-[500px]:flex-col   items-center justify-between gap-8 relative mt-[140px] max-[800px]:mt-[200px] mx-auto px-[50px] max-[500px]:mt-[220px] max-[330px]:mt-[250px] max-[767px]:px-[25px] ">
          <div className="flex flex-col w-full max-w-[336px] items-start max-[500px]:items-center justify-center gap-4 mt-[300px] max-[1100px]:mt-[250px] max-[800px]:mt-[100px] max-[767px]:mt-0">
            <p className="font-regular max-[500px]:text-center text-[#6d6d6d] text-[14px] max-[767px]:text-[13px] tracking-[-0.2px] leading-[180%] font-Plus_Jakarta_Sans">
              Prodify helps you stay organized, meet your goals, and track your
              progress—everything you need to master your day.
            </p>

            <Button className="cursor-pointer h-auto bg-[#050912] hover:bg-[#050912]/90 rounded-[31px] px-8 py-[18px] max-[767px]:w-[150px] max-[767px]:h-[45px]">
              <span className="font-bold text-white text-[16px] max-[767px]:text-[14px] tracking-[-0.2px] leading-[24px] font-Plus_Jakarta_Sans">
                Download Now
              </span>
            </Button>
          </div>
 
                  <img src="/app-screen.png" className="w-[426px] h-[519px] max-[1100px]:w-[350px] max-[1100px]:h-[419px]  mr-[120px] max-[1100px]:mr-[60px] max-[1022px]:hidden" alt="" />


          <div className="flex items-center gap-10 mt-[300px] max-[1100px]:mt-[250px] max-[800px]:mt-[100px] max-[767px]:mt-0">
            {statsData.map((stat, index) => (
              <div key={index} className="flex flex-col items-start gap-[3px]">
                <div className="font-semibold  text-black text-[32px] max-[767px]:text-[26px] tracking-[-0.2px] leading-[120%] whitespace-nowrap font-Plus_Jakarta_Sans">
                  {stat.value}
                </div>

                <div className="font-regular  text-[#6d6d6d] text-[14px] max-[767px]:text-[13px] tracking-[-0.2px] leading-[180%] whitespace-nowrap font-Plus_Jakarta_Sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
