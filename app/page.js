import Image from "next/image";
import HeroSection from "./HeroSection/page";
import AboutMe from "./Component/AboutMe/page";
import WhatIDo from "./Component/WhatiDo/page";
import Projects from "./Component/Projects/page";
import ContactMe from "./Component/ContactMe/page";
import Skills from "./Component/Skills/page";
import SkillsSection from "./Component/Skills/page";

export default function Home() {
  return (
    <div>
      <main className="bg-gray-100">
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <WhatIDo></WhatIDo>
        {/* <Skills></Skills> */}
        <Projects></Projects>
        <SkillsSection></SkillsSection>
        <ContactMe></ContactMe>
      </main>
    </div>
  );
}
