import React from "react";

export default function UserProfileSection  () {
  const roles = [
    "Teacher",
    "Student",
    "CEO",
    "Trainer",
    "Product Manager",
    "Designer",
    "Engineer",
  ];

  return (
    <section className="flex flex-col w-full items-center gap-6 px-[100px] py-20 relative max-[1100px]:px-[50px] max-[1300px]:px-[80px] max-[767px]:px-[25px] max-[1000px]:py-10">
      <div className="flex items-end justify-between max-[800px]:flex-wrap max-[800px]:gap-4 relative self-stretch w-full">
        <h2 className="relative min-[1500px]:w-[600px] w-[507px] max-[800px]:w-[100%] font-Plus_Jakarta_Sans font-semibold text-left  text-[#050912] text-[56px] max-[1500px]:text-[48px] max-[1100px]:text-[44px] max-[1000px]:text-[36px] max-[767px]:text-[28px] text-center tracking-[-0.2px] leading-[120%]">
          Used by various roles in various companies
        </h2>

        <p className="relative min-[1500px]:w-[600px] w-[501px] max-[800px]:w-[100%] font-regular max-[800px]:text-left  text-[#6d6d6d]  font-Plus_Jakarta_Sans tracking-[-0.2px] leading-[180%]  text-lg max-[1500px]:text-base max-[1000px]:text-[12px] text-right">
          Empowering Professionals in Every Industry—From Managers to
          Creatives—Prodify Helps Teams Stay Organized, Improve Collaboration,
          and Reach Their Productivity Goals Faste
        </p>
      </div>

      <div className="marquee w-full min-[1500px]:max-w-[1300px] max-w-[1200px] px-0 py-12 max-[1000px]:py-10 max-[800px]:py-6 relative bg-[#f6f6f6] rounded-[16px]">
        <div className="marquee__track items-center py-2">
          {[...roles, ...roles].map((role, idx) => (
            <React.Fragment key={`${role}-${idx}`}>
              <span className="relative font-semibold text-[#888888] text-[40px] max-[1000px]:text-[30px] max-[767px]:text-[20px] text-center tracking-[-0.2px] leading-[120%] whitespace-nowrap font-Plus_Jakarta_Sans">
                {role}
              </span>
              {(idx % roles.length) !== roles.length - 1 && (
                <img src="/dot.png" className="w-4 h-4 object-contain mx-6 max-[767px]:mx-4" alt="" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
