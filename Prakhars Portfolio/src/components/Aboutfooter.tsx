import { Circle, Dna, Globe2, Languages } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const Aboutfooter = () => {
  const items = [
    {
      name: "Language",
      answer: portfolioConfig.about.personalInfo.language,
      icon: <Languages className="h-11 w-11" />,
    },
    {
      name: "Nationality",
      answer: portfolioConfig.about.personalInfo.nationality,
      icon: <Globe2 className="h-8 w-8" />,
    },
    {
      name: "Gender",
      answer: portfolioConfig.about.personalInfo.gender,
      icon: <Dna className="h-8 w-8" />,
    },
  ];

  return (
    <>
      {items.map((val, indx) => {
        return (
          <div className="p-1 w-fit relative" key={indx}>
            <h1 className="gap-2 text-3xl font-poppins font-semibold relative flex icon_underline max-sm:text-2xl text-[hsl(var(--accent))]">
              {val.icon}
              {val.name}
            </h1>
            <div className={`flex gap-2 justify-center items-center flex-row text-xl pt-3 max-lg:justify-start ${val.name === 'Language' || val.name === 'Nationality' || val.name === 'Gender' ? 'text-white' : 'text-[hsl(var(--accent))]'}`}>
              <Circle className="h-3 w-3" /> {val.answer}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Aboutfooter;
