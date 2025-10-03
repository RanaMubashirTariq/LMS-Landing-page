'use client'
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState<string>("");
  const pathname = usePathname();

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "About Us", href: "#about" },
    { label: "Download", href: "#download" },
    { label: "Blog", href: "#blog" },
    { label: "Support", href: "#support" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let activeSection = "";
      for (const item of navigationItems) {
        if (item.href.startsWith("#")) {
          const section = document.querySelector(item.href);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              activeSection = item.href;
              break;
            }
          }
        }
      }
      setCurrentHash(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActiveLink = (href: string) => {
    if (href.startsWith("#")) {
      return currentHash === href;
    }
    return pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-[120px] py-6 max-[1300px]:px-20 max-[1100px]:px-[50px] max-[767px]:px-6 bg-[#f4ffe6] border-b border-[#0000001a]">
      <img className="w-[107px] h-[32.03px] object-contain max-[767px]:w-[80px]" alt="Layer" src="/logo-1.png" />

      {/* Desktop Navigation */}
      <div className="hidden min-[1024px]:flex items-center gap-8">
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={
              isActiveLink(item.href)
                ? "font-Plus_Jakarta_Sans font-semibold text-black text-lg max-[1500px]:text-base tracking-[0] leading-[normal]"
                : "font-Plus_Jakarta_Sans font-regular text-[#6d6d6d] text-lg max-[1500px]:text-base tracking-[0] leading-[normal] hover:text-black transition-colors"
            }
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Desktop Button */}
      <Button className="cursor-pointer hidden min-[1024px]:block w-[140px] max-[1500px]:w-[112px] h-[52px] px-6 py-4 bg-black text-white rounded-[100px] border border-solid hover:bg-gray-800">
        <span className="font-Plus_Jakarta_Sans font-semibold text-lg max-[1500px]:text-base tracking-[0] leading-[100%] text-white">
          Sign-up
        </span>
      </Button>

      {/* Mobile Menu Button */}
      <button
        className="min-[1024px]:hidden flex flex-col gap-1 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu: Backdrop + Slide-in Panel */}
      {/* Backdrop */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`min-[1024px]:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />
      {/* Panel */}
      <div
        className={`min-[1024px]:hidden fixed top-0 right-0 w-[240px] h-full bg-[#f4ffe6] p-6 shadow-lg z-50 transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          aria-label="Close menu"
          className="absolute top-5 right-5 text-2xl leading-none"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <div className="pt-[80px] flex flex-col gap-6">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={
                isActiveLink(item.href)
                  ? "font-Plus_Jakarta_Sans font-semibold text-black text-sm tracking-[0] leading-[normal]"
                  : "font-Plus_Jakarta_Sans font-regular text-[#6d6d6d] text-sm tracking-[0] leading-[normal] hover:text-black transition-colors"
              }
            >
              {item.label}
            </Link>
          ))}
          <Button className="cursor-pointer w-full h-[52px] px-6 py-4 bg-black text-white rounded-[100px] border border-solid hover:bg-gray-800 mt-2">
            <span className="font-Plus_Jakarta_Sans font-semibold text-sm tracking-[0] leading-[100%] text-white">
              Sign-up
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
