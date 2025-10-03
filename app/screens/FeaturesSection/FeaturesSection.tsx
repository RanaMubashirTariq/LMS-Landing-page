import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const todoTasks = [
  {
    title: "Create A Yearly Goal",
    date: "Thu, 14 Juny 2024",
    priority: "Urgent",
    priorityBg: "bg-[#ffe5e0]",
    priorityText: "text-[#c52b10]",
  },
  {
    title: "Find Freelance job",
    date: "Thu, 14 Juny 2024",
    priority: "Moderate",
    priorityBg: "bg-[#fdf2c8]",
    priorityText: "text-[#b0550d]",
  },
  {
    title: "Create Budget Plan",
    date: "Thu, 14 Juny 2024",
    priority: "Urgent",
    priorityBg: "bg-[#ffe5e0]",
    priorityText: "text-[#c52b10]",
  },
  {
    title: "Travel Plan",
    date: "Thu, 14 Juny 2024",
    priority: "Urgent",
    priorityBg: "bg-[#e6fec9]",
    priorityText: "text-[#2e5512]",
  },
];

const houseTasks = [
  {
    title: "Do Dishes",
    date: "Thu, 14 Juny 2024",
    priority: "Urgent",
    priorityBg: "bg-[#e6fec9]",
    priorityText: "text-[#2e5512]",
  },
  {
    title: "Monthly Grocery",
    date: "Thu, 14 Juny 2024",
    priority: "Urgent",
    priorityBg: "bg-[#e6fec9]",
    priorityText: "text-[#2e5512]",
  },
  {
    title: "Throw Trash",
    date: "Thu, 14 Juny 2024",
    priority: "Urgent",
    priorityBg: "bg-[#e6fec9]",
    priorityText: "text-[#2e5512]",
  },
  {
    title: "Plumb",
    date: "Thu, 14 Juny 2024",
    priority: "Urgent",
    priorityBg: "bg-[#e6fec9]",
    priorityText: "text-[#2e5512]",
  },
];

const timeSlots = [
  { time: "01.00", top: "top-0" },
  { time: "02.00", top: "top-[49px]" },
  { time: "03.00", top: "top-[99px]" },
  { time: "04.00", top: "top-[148px]" },
  { time: "05.00", top: "top-[197px]" },
  { time: "06.00", top: "top-[246px]" },
  { time: "07.00", top: "top-[296px]" },
  { time: "08.00", top: "top-[345px]" },
  { time: "09.00", top: "top-[394px]" },
  { time: "10.00", top: "top-[451px]" },
];

const lineImages = [
  { left: "left-[75px]" },
  { left: "left-16" },
  { left: "left-[54px]" },
  { left: "left-11" },
  { left: "left-[33px]" },
  { left: "left-[22px]" },
  { left: "left-3" },
  { left: "left-0" },
  { left: "left-[161px]" },
  { left: "left-[150px]" },
  { left: "left-[141px]" },
  { left: "left-[130px]" },
  { left: "left-[119px]" },
  { left: "left-[109px]" },
  { left: "left-[98px]" },
  { left: "left-[86px]" },
  { left: "left-[248px]" },
  { left: "left-[237px]" },
  { left: "left-[227px]" },
  { left: "left-[217px]" },
  { left: "left-[206px]" },
  { left: "left-[195px]" },
  { left: "left-[184px]" },
  { left: "left-[173px]" },
  { left: "left-[335px]" },
  { left: "left-[346px]" },
  { left: "left-[360px]" },
  { left: "left-[324px]" },
  { left: "left-[314px]" },
  { left: "left-[303px]" },
  { left: "left-[293px]" },
  { left: "left-[282px]" },
  { left: "left-[271px]" },
  { left: "left-[259px]" },
];

const focusTasks = [
  {
    title: "Cook Dinner",
    deadline: "today",
  },
  {
    title: "Cook Dinner",
    deadline: "today",
  },
];

export default function FeaturesSection() {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-5 px-[120px] max-[1300px]:px-20 max-[1100px]:px-[50px] max-[767px]:px-[25px] py-20 max-[1000px]:py-10 relative">
      <div className="flex items-center min-[1500px]:justify-center min-[1500px]:gap-15 gap-5 max-[767px]:flex-col relative self-stretch w-full flex-[0_0_auto]">
        <Card className="flex flex-col min-[1500px]:w-[650px] w-[590px] max-[767px]:w-[100%] h-[556px] max-[1000px]:h-[450px] max-[767px]:h-[250px] max-[500px]:h-[300px] max-[350px]:h-[330px]   items-start justify-between p-12 relative bg-[#f4ffe6] rounded-3xl border-0 max-[1300px]:p-8 max-[800px]:p-5">
          <CardContent className="p-0 flex flex-col h-full justify-between w-full">
            <h2 className="relative  font-semibold  text-black text-[56px] max-[1500px]:text-[48px] max-[1100px]:text-[44px] max-[1000px]:text-[36px] max-[767px]:text-[28px] tracking-[-0.2px] leading-[120%] font-Plus_Jakarta_Sans">
              All-in-One Productivity Solution
            </h2>

            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative  font-regular  text-black text-lg max-[1500px]:text-base tracking-[-0.2px] leading-[180%] font-Plus_Jakarta_Sans">
                From task management to reminders, calendar integration to focus
                mode, Prodify gives you the tools to boost your productivity and
                take control of your time.
              </p>

              <Button className="cursor-pointer flex w-[185px] max-[767px]:w-[150px] max-[767px]:h-[45px] items-center justify-center gap-2.5 px-8 py-[18px] relative flex-[0_0_auto] bg-[#050912] rounded-[31px] h-auto hover:bg-[#050912]/90">
                <span className="relative  font-bold  text-white text-lg max-[1500px]:text-base max-[767px]:text-sm text-center tracking-[-0.2px] leading-[24px] whitespace-nowrap font-Plus_Jakarta_Sans">
                  Download Now
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col min-[1500px]:w-[650px] w-[590px] max-[767px]:w-[100%] h-[556px] max-[1000px]:h-[450px] max-[767px]:h-[350px] items-center justify-between p-12 max-[1300px]:p-8 max-[800px]:p-5 relative bg-white rounded-3xl border border-solid border-[#e7e7e7]">
          <CardContent className="p-0 flex flex-col h-full justify-between items-center w-full">
            <img
              className="relative w-[355.11px] h-[304.23px] max-[1000px]:w-[300px] max-[1000px]:h-[250px] max-[767px]:h-[200px] max-[767px]:w-[250px]"
              alt="Illustration"
              src="/illustration.png"
            />

            <h3 className="relative  font-semibold  text-black text-[56px] max-[1500px]:text-[48px] max-[1100px]:text-[44px] max-[1000px]:text-[36px] max-[767px]:text-[28px]  tracking-[-0.2px] leading-[120%] font-Plus_Jakarta_Sans">
              Do more and stay productive
            </h3>
          </CardContent>
        </Card>
      </div>

      <div className="gap-5 self-stretch w-full flex-[0_0_auto] flex items-start min-[1500px]:justify-center relative max-[1100px]:flex-wrap max-[1100px]:justify-center">
        <Card className="flex-col min-[1500px]:w-[500px] w-[387px] max-[900px]:w-[100%] gap-8 p-6 bg-white rounded-3xl border border-solid border-[#e7e7e7] flex items-start relative">
          <CardContent className="p-0 w-full">
            <div className="min-[1500px]:w-[400px] w-[327.08px] max-[900px]:w-[100%] items-start gap-[13.15px] flex-[0_0_auto] rounded-lg overflow-hidden overflow-x-auto scrollbar-hide flex relative">
              <div className="w-[242.44px] gap-[6.57px] rounded-[9.86px] border-[0.82px] border-solid flex flex-col items-end relative border-[#d1d1d1]">
                <div className="flex flex-col items-center gap-[13.15px] p-[13.15px] relative self-stretch w-full flex-[0_0_auto] border-b-[0.82px] [border-bottom-style:solid] border-[#d1d1d1]">
                  <div className="flex flex-col items-start gap-[13.15px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center justify-between px-[3.29px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative  font-Plus_Jakarta_Sans font-bold text-[#050912] text-[15px] max-[1500px]:text-[13.1px] tracking-[-0.41px] leading-[15.8px] whitespace-nowrap">
                        Goal
                      </div>

                      <div className="relative font-Plus_Jakarta_Sans font-normal text-[#888888] text-[11px] max-[1500px]:text-[9.9px] text-center tracking-[-0.41px] leading-[11.8px] whitespace-nowrap">
                        20/40
                      </div>
                    </div>

                    <img
                      className="relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px]"
                      alt="Text input"
                      src="/text-input.png"
                    />
                  </div>
                </div>

                <div className="flex-col items-start gap-[6.57px] px-[13.15px] py-0 self-stretch w-full flex-[0_0_auto] flex relative">
                  {todoTasks.map((task, index) => (
                    <div
                      key={`todo-${index}`}
                      className="flex flex-col items-start gap-[3.29px] relative self-stretch w-full flex-[0_0_auto] rounded-[9.86px]"
                    >
                      <div className="flex items-center gap-[13.15px] p-[13.15px] relative self-stretch w-full flex-[0_0_auto] border-b-[0.82px] [border-bottom-style:solid] border-[#e7e7e7]">
                        <div className="flex items-center justify-between relative flex-1 grow">
                          <div className="inline-flex flex-col items-start gap-[3.29px] relative flex-[0_0_auto]">
                            <div className="relative  font-Plus_Jakarta_Sans font-semibold text-black text-[11px] max-[1500px]:text-[9.9px] tracking-[-0.41px] leading-[11.8px] whitespace-nowrap">
                              {task.title}
                            </div>

                            <div className="relative font-Plus_Jakarta_Sans font-normal text-[#b0b0b0] text-[11px] max-[1500px]:text-[9.9px] tracking-[-0.41px] leading-[11.8px] whitespace-nowrap">
                              {task.date}
                            </div>
                          </div>

                          <Badge
                            className={`gap-[8.22px] px-[6.57px] py-[3.29px] ${task.priorityBg} rounded-[1182.59px] inline-flex items-center justify-center relative flex-[0_0_auto] border-0 hover:${task.priorityBg}`}
                          >
                            <span
                              className={`mt-[-0.82px] ${task.priorityText} text-[11px] max-[1500px]:text-[9.9px] tracking-[-0.41px] leading-[11.8px] relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold whitespace-nowrap`}
                            >
                              {task.priority}
                            </span>
                          </Badge>
                        </div>

                        <img
                          className="relative w-[19.72px] h-[19.72px]"
                          alt="Icons"
                          src="/icon-1.png"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[242.44px] gap-[6.57px] rounded-[9.86px] border-[0.82px] border-solid flex flex-col items-end relative border-[#d1d1d1]">
                <div className="flex flex-col items-center gap-[13.15px] p-[13.15px] relative self-stretch w-full flex-[0_0_auto] border-b-[0.82px] [border-bottom-style:solid] border-[#d1d1d1]">
                  <div className="flex flex-col items-start gap-[13.15px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center justify-between px-[3.29px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="mt-[-0.82px] font-bold text-[#050912] text-[13.1px] tracking-[-0.41px] leading-[15.8px] relative font-Plus_Jakarta_Sans whitespace-nowrap">
                        House Chore
                      </div>

                      <div className="relative font-Plus_Jakarta_Sans font-normal text-[#888888] text-[11px] max-[1500px]:text-[9.9px] text-center tracking-[-0.41px] leading-[11.8px] whitespace-nowrap">
                        20/40
                      </div>
                    </div>

                    <img
                      className="relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px]"
                      alt="Text input"
                      src="/text-input.png"
                    />
                  </div>
                </div>

                <div className="flex-col items-start gap-[6.57px] px-[13.15px] py-0 self-stretch w-full flex-[0_0_auto] flex relative">
                  {houseTasks.map((task, index) => (
                    <div
                      key={`house-${index}`}
                      className="flex flex-col items-start gap-[3.29px] relative self-stretch w-full flex-[0_0_auto] rounded-[9.86px]"
                    >
                      <div className="flex items-center gap-[13.15px] p-[13.15px] relative self-stretch w-full flex-[0_0_auto] border-b-[0.82px] [border-bottom-style:solid] border-[#e7e7e7]">
                        <div className="flex items-center justify-between relative flex-1 grow">
                          <div className="inline-flex flex-col items-start gap-[3.29px] relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-0.82px] font-Plus_Jakarta_Sans  font-semibold text-black text-[11px] max-[1500px]:text-[9.9px] tracking-[-0.41px] leading-[11.8px] whitespace-nowrap">
                              {task.title}
                            </div>

                            <div className="relative w-fit font-Plus_Jakarta_Sans  font-normal text-[#b0b0b0] text-[11px] max-[1500px]:text-[9.9px] tracking-[-0.41px] leading-[11.8px] whitespace-nowrap">
                              {task.date}
                            </div>
                          </div>

                          <Badge
                            className={`gap-[8.22px] px-[6.57px] py-[3.29px] ${task.priorityBg} rounded-[1182.59px] inline-flex items-center justify-center relative flex-[0_0_auto] border-0 hover:${task.priorityBg}`}
                          >
                            <span
                              className={`mt-[-0.82px] ${task.priorityText} text-[11px] max-[1500px]:text-[9.9px] tracking-[-0.41px] leading-[11.8px] relative w-fit font-Plus_Jakarta_Sans  font-semibold whitespace-nowrap`}
                            >
                              {task.priority}
                            </span>
                          </Badge>
                        </div>

                        <img
                          className="relative w-[19.72px] h-[19.72px]"
                          alt="Icons"
                          src="/icon-1.png"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto] mt-6">
              <h3 className="relative  font-semibold  text-black text-[32px] max-[767px]:text-[24px] tracking-[-0.2px] leading-[120%] font-Plus_Jakarta_Sans ">
                To-do Lists
              </h3>

              <p className="relative  font-regular text-[#6d6d6d] text-lg max-[1500px]:text-base max-[767px]:text-[12px]  tracking-[-0.2px] leading-[180%] font-Plus_Jakarta_Sans ">
                Organize tasks with categories, priorities, and deadlines. Break
                down tasks with subtasks and track your progress with ease.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="min-[1500px]:w-[450px] w-[386px] max-[900px]:w-[100%] gap-6 flex flex-col h-[497px] items-start p-6 relative bg-white rounded-3xl border border-solid border-[#e7e7e7]">
          <CardContent className="p-0 w-full h-full flex flex-col ">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative   font-semibold  text-black text-[32px] max-[767px]:text-[24px]  tracking-[-0.2px] leading-[120%] font-Plus_Jakarta_Sans">
                Smart Calendar
              </h3>

              <p className="relative  font-regular  text-[#6d6d6d] text-[14px] max-[767px]:text-[12px]  tracking-[-0.2px] leading-[180%] font-Plus_Jakarta_Sans">
                Integrate with your favorite calendar apps and manage tasks
                alongside events. Stay on top of your schedule with color-coded
                views and smart reminders.
              </p>
            </div>

            <div className="relative self-stretch w-full max-[500px]:w-[100%] overflow-hidden overflow-x-auto scrollbar-hide h-[278px] overflow-hidden mt-6">
              <div className="flex w-[338px]  items-center justify-between relative top-[-74px]">
                <div className="relative w-[50.85px] h-[463.37px]">
                  {timeSlots.map((slot, index) => (
                    <div
                      key={`time-${index}`}
                      className={`${slot.top} left-0 absolute h-3 font-Plus_Jakarta_Sans font-normal text-black text-[10.2px] text-center tracking-[-0.42px] leading-[12.2px] whitespace-nowrap`}
                    >
                      {slot.time}
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center relative flex-[0_0_auto] ml-[-7.54px]">
                  <img
                    className="relative w-px h-[512.1px]"
                    alt="Separator"
                    src="/separator.png"
                  />

                  <div
                    className="relative w-[294.69px] h-[278px]"
                  />

                  <div className="flex w-[297px] items-center gap-[13.59px] pl-0 pr-[13.59px] py-0 absolute top-44 -left-px bg-white rounded-[0px_6.79px_6.79px_0px] border-[0.85px] border-solid border-[#f6f6f6]">
                    <div className="w-[3.4px] h-[109.55px] relative bg-[#050912]" />

                    <div className="flex-col items-start justify-center gap-[11.04px] flex-1 grow flex relative">
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col w-[113.8px] items-start gap-[4.25px] relative">
                          <div className="flex gap-[4.25px] self-stretch w-full flex-[0_0_auto] items-center relative">
                            <img
                              className="relative w-[13.59px] h-[13.59px]"
                              alt="Icons"
                              src="/icon-10.png"
                            />

                            <div className="relative w-fit mt-[-0.06px] font-Plus_Jakarta_Sans font-normal text-[#5d5d5d] text-[10.2px] tracking-[-0.42px] leading-[12.2px] whitespace-nowrap">
                              04.00 - 06.00
                            </div>
                          </div>

                          <div className="relative self-stretch font-Plus_Jakarta_Sans font-semibold text-[#050912] text-[13.6px] tracking-[-0.42px] leading-[16.3px]">
                            Monthly Groceries
                          </div>
                        </div>

                        <Badge className="gap-[8.49px] px-[6.79px] py-[3.4px] bg-[#ffe5e0] rounded-[1222.07px] inline-flex items-center justify-center relative flex-[0_0_auto] border-0 hover:bg-[#ffe5e0]">
                          <span className="mt-[-0.85px] text-[#c52b10] text-[10.2px] tracking-[-0.42px] leading-[12.2px] relative w-fit font-Plus_Jakarta_Sans font-semibold whitespace-nowrap">
                            Urgent
                          </span>
                        </Badge>
                      </div>

                      <p className="relative w-[186.83px] font-regular  text-[#5d5d5d] text-[10.19px] tracking-[-0.17px] leading-[15.29px] font-Plus_Jakarta_Sans">
                        Development of software for the protection of
                        information resources
                      </p>
                    </div>
                  </div>

                  <div className="absolute w-[296px] h-[90px] top-[87px] left-0 overflow-hidden">
                    <div className="relative w-[448px] h-[88px] left-[-75px]">
                      {lineImages.map((line, index) => (
                        <img
                          key={`line-${index}`}
                          className={`w-[88px] ${line.left} absolute h-[430px] top-0`}
                          alt="Line"
                          src="/line.png"
                        />
                      ))}

                      <div className="absolute w-[180px] h-[23px] top-[31px] left-[133px]">
                        <div className="inline-flex gap-[3.4px] pl-[6.79px] pr-[10.19px] py-[3.4px] bg-[#f6f6f6] rounded-[33.07px] overflow-hidden items-center relative">
                          <div className="w-[5.1px] h-[5.1px] rounded-[2.55px] relative bg-[#050912]" />

                          <div className="relative w-fit mt-[-0.97px] font-regular  text-[#050912] text-[10.19px] tracking-[-0.17px] leading-[15.29px] whitespace-nowrap font-Plus_Jakarta_Sans">
                            The next schedule is highly urgent
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-[297px] items-center gap-[13.59px] pl-0 pr-[10.19px] py-0 absolute top-[286px] -left-px bg-white rounded-[0px_6.79px_6.79px_0px] overflow-hidden border-[0.85px] border-solid border-[#f6f6f6]">
                    <div className="w-[3.4px] h-[40.76px] relative bg-[#050912]" />

                    <div className="flex items-center justify-between relative flex-1 grow">
                      <div className="relative w-fit font-semibold text-black text-[10.19px] tracking-[-0.17px] leading-[15.29px] whitespace-nowrap font-Plus_Jakarta_Sans">
                        Meet with mangcoding Team
                      </div>

                      <Badge className="gap-[8.49px] px-[6.79px] py-[3.4px] bg-[#fdf2c8] rounded-[1222.07px] inline-flex items-center justify-center relative flex-[0_0_auto] border-0 hover:bg-[#fdf2c8]">
                        <span
                          className="mt-[-0.85px] text-[#b0550d] text-[10.2px] tracking-[-0.42px] leading-[12.2px] relative w-fit font-Plus_Jakarta_Sans
                                  font-semibold whitespace-nowrap"
                        >
                          Moderate
                        </span>
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="min-[1500px]:w-[470px] w-[387px] max-[900px]:w-[100%] gap-8 flex flex-col h-[497px] items-start p-6 relative bg-white rounded-3xl border border-solid border-[#e7e7e7]">
          <CardContent className="p-0 w-full h-full flex flex-col gap-8">
            <div className="flex-col h-[307.93px] items-center justify-around gap-[132.02px] self-stretch w-full flex relative">
              <div className="flex-col h-[307.93px] items-center justify-between self-stretch w-full flex relative">
                <div className="relative w-[165.99px] h-[166.09px] bg-[url(/switch.svg)] bg-[100%_100%]">
                  <img
                    className=" w-[166px] h-[166px]"
                    alt="Rating"
                    src="/timer.png"
                  />
                </div>

                <div className="flex flex-col items-start gap-[13.63px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex gap-[8.52px] px-[13.63px] py-0 self-stretch w-full flex-[0_0_auto] items-center relative">
                    <div className="relative w-fit mt-[-0.85px] font-Plus_Jakarta_Sans font-normal text-black text-sm max-[1500px]:text-[11.9px] tracking-[-0.17px] leading-[17.0px] whitespace-nowrap">
                      Your Task
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-[6.81px] relative self-stretch w-full flex-[0_0_auto]">
                    {focusTasks.map((task, index) => (
                      <div
                        key={`focus-${index}`}
                        className="flex min-[1500px]:w-[290px] w-[245.94px] items-center gap-[13.63px] px-6 py-4 relative flex-[0_0_auto] rounded-[1231.87px] border-[0.85px] border-solid border-[#d1d1d1]"
                      >
                        <div className="flex items-center justify-between relative flex-1 grow mt-[-0.15px] mb-[-0.15px] ml-[-3.56px]">
                          <div className="mt-[-0.85px] font-semibold text-black text-[15px] max-[1500px]:text-[13.6px] tracking-[-0.43px] leading-[16.4px] relative w-fit font-Plus_Jakarta_Sans whitespace-nowrap">
                            {task.title}
                          </div>

                          <div className="inline-flex items-center gap-[0.85px] relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-0.85px] font-Plus_Jakarta_Sans font-normal text-[#d1d1d1] text-xs max-[1500px]:text-[10.2px] tracking-[-0.43px] leading-[12.3px] whitespace-nowrap">
                              Deadline is
                            </div>

                            <div className="relative w-fit mt-[-0.85px] font-Plus_Jakarta_Sans font-normal text-[#d1d1d1] text-sm max-[1500px]:text-[10.2px] tracking-[-0.43px] leading-[12.3px] whitespace-nowrap">
                              {task.deadline}
                            </div>
                          </div>
                        </div>

                        <img
                          className="relative w-[20.44px] h-[20.44px] mt-[-2.37px] mb-[-2.37px] mr-[-3.56px]"
                          alt="Icons"
                          src="/icons-18.png"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch  font-semibold text-black text-[32px] max-[767px]:text-[24px]  tracking-[-0.2px] leading-[120%] font-Plus_Jakarta_Sans">
                Focus Mode
              </h3>

              <p className="relative self-stretch font-regular  text-[#6d6d6d] text-lg max-[1500px]:text-base max-[767px]:text-[12px]  tracking-[-0.17px] leading-[180%] font-Plus_Jakarta_Sans">
                Use the Pomodoro timer to stay focused. Block distractions and
                track your productive time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
