import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Card, CardContent } from "../../components/ui/card";

const testimonialsData = [
  {
    id: 1,
    text: "The gamification features keep me motivated to finish my tasks on time. I love seeing my progress and earning rewards—it's made productivity fun!",
    name: "Alex P",
    role: "Software Developer",
    avatar: "/avatar-option-7.png",
  },
  {
    id: 2,
    text: "The gamification features keep me motivated to finish my tasks on time. I love seeing my progress and earning rewards—it's made productivity fun!",
    name: "Alex P",
    role: "Software Developer",
    avatar: "/avatar-option-7.png",
  },
  {
    id: 3,
    text: "The gamification features keep me motivated to finish my tasks on time. I love seeing my progress and earning rewards—it's made productivity fun!",
    name: "Alex P",
    role: "Software Developer",
    avatar: "/avatar-option-7.png",
  },
  {
    id: 4,
    text: "The gamification features keep me motivated to finish my tasks on time. I love seeing my progress and earning rewards—it's made productivity fun!",
    name: "Alex P",
    role: "Software Developer",
    avatar: "/avatar-option-7.png",
  },
  {
    id: 5,
    text: "The gamification features keep me motivated to finish my tasks on time. I love seeing my progress and earning rewards—it's made productivity fun!",
    name: "John Carter",
    role: "Traveler",
    avatar: "/avatar-option-7.png",
  },
  {
    id: 6,
    text: "The gamification features keep me motivated to finish my tasks on time. I love seeing my progress and earning rewards—it's made productivity fun!",
    name: "Alex P",
    role: "Software Developer",
    avatar: "/avatar-option-7.png",
  },
  {
    id: 7,
    text: "The gamification features keep me motivated to finish my tasks on time. I love seeing my progress and earning rewards—it's made productivity fun!",
    name: "Alex",
    role: "Software Developer E",
    avatar: "/avatar-option-7.png",
  },
  {
    id: 8,
    text: "The gamification features keep me motivated to finish my tasks on time. I love seeing my progress and earning rewards—it's made productivity fun!",
    name: "Alex Pel",
    role: "Software Developer",
    avatar: "/avatar-option-7.png",
  },
  {
    id: 9,
    text: "The gamification features keep me motivated to finish my tasks on time. I love seeing my progress and earning rewards—it's made productivity fun!",
    name: "Alex P",
    role: "Software Developer",
    avatar: "/avatar-option-7.png",
  },
];

export default function TestimonialsSection  () {
  const renderCard = (testimonial: typeof testimonialsData[number]) => (
    <Card
      key={`${testimonial.id}-${testimonial.name}`}
      className="w-[386px] max-[1000px]:w-[300px] bg-[#f6f6f6] border-none rounded-2xl shrink-0"
    >
      <CardContent className="p-6 flex flex-col gap-8 max-[500px]:gap-4">
        <img
          className="w-[49.92px] h-[39.04px] max-[1000px]:w-[35px] max-[1000px]:h-[30px] max-[500px]:w-6 max-[500px]:h-6"
          alt="Quote"
          src="/-.png"
        />

        <p className="font-regular  text-[#050912] text-base max-[767px]:text-sm tracking-[-0.2px] leading-[120%] font-Plus_Jakarta_Sans">
          {testimonial.text}
        </p>

        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12 max-[767px]:w-10 max-[767px]:h-10">
            <AvatarImage
              src={testimonial.avatar}
              alt={testimonial.name}
            />
            <AvatarFallback>
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1.5 max-[767px]:gap-0">
            <div className="font-semibold  text-[#050912] text-[16px] max-[767px]:text-sm tracking-[-0.2px] leading-[160%] font-Plus_Jakarta_Sans">
              {testimonial.name}
            </div>

            <div className="text-base max-[767px]:text-sm tracking-[-0.2px] leading-[120%] font-Plus_Jakarta_Sans text-[#B0B0B0]">
              {testimonial.role}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
	return (
		<section className="w-full items-center gap-[72px] max-[767px]:gap-10  py-20 max-[1000px]:py-10 flex flex-col relative">
			<h2 className="max-w-[715px] max-[1000px]:max-w-[500px] font-Plus_Jakarta_Sans font-semibold text-black text-5xl max-[1000px]:text-[36px] max-[767px]:text-[28px] max-[767px]:px-[25px] text-center tracking-[0] leading-[normal] ">
				Word of praise from others about our presence.
			</h2>

			<div className="w-full flex flex-col gap-12 max-[767px]:gap-8">
				<div className="marquee">
					<div className="marquee__track">
						{[...testimonialsData, ...testimonialsData].map((t, idx) => (
							<div key={`${t.id}-${idx}`}>{renderCard(t)}</div>
						))}
					</div>
				</div>

				<div className="marquee">
					<div className="marquee__track" style={{ animationDirection: 'reverse', animationDuration: '34s' }}>
						{[...testimonialsData, ...testimonialsData].map((t, idx) => (
							<div key={`r-${t.id}-${idx}`}>{renderCard(t)}</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
