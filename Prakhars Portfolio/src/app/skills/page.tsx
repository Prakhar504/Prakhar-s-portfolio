import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const skillPage = () => {
  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden pt-30 mt-0 sm:pt-24 pt-15">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <LightbulbIcon className="w-4 h-4" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading><span className="text-[hsl(var(--accent))]">My Technical Experience/Skills.</span></Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl w-full text-white max-sm:text-lg">
            Currently I am a fresher and I have a solid understanding of <span className="text-[hsl(var(--accent))] font-bold">HTML5</span>,
            <span className="text-[hsl(var(--accent))] font-bold"> CSS3</span>, <span className="text-[hsl(var(--accent))] font-bold">JS</span>, <span className="text-[hsl(var(--accent))] font-bold">TS</span> and <span className="text-[hsl(var(--accent))] font-bold">React</span>, including responsive design principles. I
            specialize in building web applications and sites using <span className="text-[hsl(var(--accent))] font-bold">Javascript</span>,
            <span className="text-[hsl(var(--accent))] font-bold"> Typescript</span>, <span className="text-[hsl(var(--accent))] font-bold">React</span>, <span className="text-[hsl(var(--accent))] font-bold">Nextjs</span> & <span className="text-[hsl(var(--accent))] font-bold">Node</span>.
          </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.3} className="block w-full">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Programming Languages
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.programmingLanguages} />
          </div>
        </FramerWrapper>
        <FramerWrapper className="block w-full" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Framework/Libraries
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.frameworks} />
          </div>
        </FramerWrapper>
        <FramerWrapper className="block w-full" y={100} delay={0.34}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Tools & Technologies
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.tools} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;
