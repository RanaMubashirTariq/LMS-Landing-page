import Image from "next/image";
import NavbarSection from "./screens/NavbarSection/NavbarSection";
import CallToActionSection from "./screens/CallToActionSection/CallToActionSection";
import FooterSection from "./screens/FooterSection/FooterSection";
import TestimonialsSection from "./screens/TestimonialsSection/TestimonialsSection";
import UserProfileSection from "./screens/UserProfileSection/UserProfileSection";
import FeaturesSection from "./screens/FeaturesSection/FeaturesSection";
import HeroSection from "./screens/HeroSection/HeroSection";

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-white">
            <div id="#">
            <NavbarSection/>
            <HeroSection/>
            </div>
            <div id="about">
            <UserProfileSection/>
            </div>
           <div id="features">
           <FeaturesSection/>
           </div>
           <div id="blog">
           <TestimonialsSection/>
           </div>
           <div id="download">
           <CallToActionSection/>
           </div>
           <div className="support">
           <FooterSection/>
           </div>
    </div>
  );
}
