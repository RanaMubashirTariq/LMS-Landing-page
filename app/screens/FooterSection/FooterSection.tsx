import React from "react";
import Link from "next/link";

export default function FooterSection  ()  {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "About Us", href: "#about" },
    { label: "Download", href: "#download" },
    { label: "blog", href: "/blog" },
    { label: "Support", href: "/support" },
  ];

  const supportItems = ["FAQ", "Tutorial", "Help Center"];

  const legalItems = ["Term Of Service", "Privacy policy"];

  const socialIcons = [
    {
      src: "/Instagram-1.png",
      alt: "Social media icon",
    },
    {
      src: "/YouTube.png",
      alt: "Social media icon",
    },
    {
      src: "/GitHub.png",
      alt: "Social media icon",
    },
  ];

  return (
    <footer className="flex flex-col w-full items-center gap-10 pt-[100px] pb-0 px-[120px] relative bg-transparent max-[1300px]:px-[80px] max-[1100px]:px-[50px] max-[767px]:px-[25px] max-[1300px]:pt-[80px] bg-white">
      <div className="flex items-start justify-between max-[1050px]:flex-wrap gap-5 relative w-full">
        <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
          <div className="relative w-[307px] max-[767px]:w-[200px]  font-semibold  text-[#050912] text-[48px] max-[767px]:text-[32px] max-[500px]:text-[28px] tracking-[-0.2px] leading-[120%] font-Plus_Jakarta_Sans">
            All in one productivity software
          </div>
        </div>

        <div className="flex flex-col w-[100px] items-start gap-4 max-[767px]:gap-3 relative">
          <div className="relative   font-bold  text-[#050912] text-[24px] max-[767px]:text-[20px] tracking-[-0.2px] leading-[32px] whitespace-nowrap font-Plus_Jakarta_Sans">
            Menu
          </div>

          {menuItems.map((item, index) => (
            <Link
              key={`menu-${index}`}
              href={item.href}
              className="relative font-regular text-[#888888] text-base max-[767px]:text-sm tracking-[-0.2px] leading-[120%] whitespace-nowrap font-Plus_Jakarta_Sans hover:text-[#050912] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col w-[100px] items-start gap-4 max-[767px]:gap-3 relative">
          <div className="relative font-bold  text-[#050912] text-[24px] max-[767px]:text-[20px] tracking-[-0.2px] leading-[32px] whitespace-nowrap font-Plus_Jakarta_Sans">
            Support
          </div>

          {supportItems.map((item, index) => (
            <div
              key={`support-${index}`}
              className="relative font-regular  text-[#888888] text-base max-[767px]:text-sm tracking-[-0.2px] leading-[120%] whitespace-nowrap font-Plus_Jakarta_Sans cursor-pointer hover:text-[#050912] transition-colors"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="inline-flex flex-col items-start gap-4 max-[767px]:gap-3 relative flex-[0_0_auto]">
          <div className="relative font-bold  text-[#050912] text-[24px] max-[767px]:text-[20px]  tracking-[-0.2px] leading-[32px] whitespace-nowrap font-Plus_Jakarta_Sans">
            Legal
          </div>

          {legalItems.map((item, index) => (
            <div
              key={`legal-${index}`}
              className="relative font-regular  text-[#888888] text-base max-[767px]:text-sm  tracking-[-0.2px] leading-[120%] whitespace-nowrap font-Plus_Jakarta_Sans cursor-pointer hover:text-[#050912] transition-colors"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="w-[273px] gap-6 max-[767px]:gap-4 flex flex-col items-start relative">
          <div className="gap-4 w-full flex-[0_0_auto] flex flex-col items-start relative">
            <div className="relative w-full font-regular  text-[#888888] text-base max-[767px]:text-sm  tracking-[-0.2px] leading-[120%]  font-Plus_Jakarta_Sans ">
              2118 Thornridge Cir. Syracuse, Connecticut 35624
            </div>

            <div className="relative w-full font-regular  text-[#888888] text-base max-[767px]:text-sm  tracking-[-0.2px] leading-[120%]  font-Plus_Jakarta_Sans ">
              Hello@Prodify.com
            </div>

            <div className="relative w-full font-regular  text-[#888888] text-base max-[767px]:text-sm  tracking-[-0.2px] leading-[120%] font-Plus_Jakarta_Sans ">
              (208) 555-0112
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-[25px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              {socialIcons.map((icon, index) => (
                <div
                  key={`social-${index}`}
                  className="relative w-12 h-12 max-[500px]:w-10  max-[500px]:h-10 bg-[#f6f6f6] rounded-[100px] cursor-pointer hover:bg-[#e6e6e6] transition-colors"
                >
                  <img
                    className="absolute w-6 h-6 top-3 left-3 max-[500px]:w-4  max-[500px]:h-4 cursor-pointer"
                    alt={icon.alt}
                    src={icon.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <img
        className="relative w-full max-w-[1200px] h-[177px] max-[767px]:h-auto object-contain"
        alt="Prodify"
        src="/Prodify.png"
      />
    </footer>
  );
};
