import TextRotator from "./TextRotator";
import { portfolioConfig } from "@/config/portfolio.config";

const HeroTexts = () => {
  // Get the name parts
  const nameParts = portfolioConfig.name.split(" ");
  const firstName = nameParts[0];
  const middleName = nameParts.length > 2 ? nameParts[1] : "";
  const lastName = nameParts.length > 2 ? nameParts[2] : nameParts[1];

  return (
    <>
      <h3 className="font-poppins text-3xl max-sm:text-xl text-white">My Name is</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl ">
        {firstName} {middleName} <br /> {lastName} .
      </h1>
      <TextRotator />
    </>
  );
};
export default HeroTexts;
