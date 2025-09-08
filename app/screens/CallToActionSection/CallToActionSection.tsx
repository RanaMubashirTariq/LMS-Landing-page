import React from "react";
import { Button } from "../../components/ui/button";

export default function CallToActionSection  ()  {
  return (
    <section className="flex flex-col w-full items-end px-[120px] py-20 relative bg-white max-[1300px]:px-20 max-[1100px]:px-[50px] max-[767px]:px-[25px] max-[1100px]:py-15 max-[1000px]:py-10">
      <div className="flex items-center justify-center gap-24 px-[72px] max-[1100px]:px-10 py-12 max-[500px]:py-5 max-[500px]:px-5 relative self-stretch w-full bg-[#f4ffe6] rounded-[16px] overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-6 relative flex-1 grow">
          <div className="flex flex-col items-center justify-center gap-2 relative self-stretch w-full">
            <h2 className="relative w-[606px] max-[1100px]:w-[450px] max-[767px]:w-[100%]   text-[#050912] text-[64px] max-[1100px]:text-[48px] max-[767px]:text-[32px] max-[500px]:text-[28px]  text-center tracking-[-0.2px] leading-[120%] font-Plus_Jakarta_Sans font-semibold">
              Start Your Productive Journey
            </h2>

            <p className="relative w-[606px] max-[800px]:w-[550px]   max-[767px]:w-[100%] font-regular font-Plus_Jakarta_Sans text-[#050912] text-sm text-center tracking-[-0.2px] leading-[180%] max-[767]:leading-[150%]">
              &quot;Prodify has changed the way I work! The focus mode and
              reminders have boosted my productivity significantly.&quot;
            </p>
          </div>

          <Button className="cursor-pointer flex w-[185px] max-[767px]:w-[150px] max-[767px]:h-[45px] items-center justify-center gap-2.5 px-8 py-[18px] max-[767px]:px-3 max-[767px]:py-4 relative bg-[#050912] rounded-[31px] h-auto hover:bg-[#050912]/90">
            <span className="relative  font-bold  text-white text-[16px] max-[767px]:text-[14px] max-[500px]:text-[12px] text-center tracking-[-0.2px] leading-[24px] whitespace-nowrap font-Plus_Jakarta_Sans">
              Download now
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
