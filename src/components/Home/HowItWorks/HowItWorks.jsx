import { useTranslation } from "react-i18next";
import { H2, H5, HeadingText } from "../../Shared/Heading";
import { Text, TextHeading } from "../../Shared/Heading/Heading";
import "./HowItWorks.css";
import HowItWorksCards from "./HowItWorksCards";

export function HowItWorks() {
  const { t, i18n } = useTranslation();



  // styling for arabic

  
  
  return (
    <div className="containers">
      <div className="how-container">
        <div className="howLeft">
          <H5 text={t("home.howItWorks.heading")}/>
          <H2 text={t("home.howItWorks.subheading")} />
          <HeadingText text={t("home.howItWorks.content")} />
        </div>

        <section className="howRight">
          <HowItWorksCards numberLines={t("home.howItWorks.steps1.number")} number={1} text={t("home.howItWorks.steps1.content")} textheading={t("home.howItWorks.steps1.title")} />
          <HowItWorksCards numberLines={t("home.howItWorks.steps2.number")}  number={2} text={t("home.howItWorks.steps2.content")} textheading={t("home.howItWorks.steps2.title")}/>
          <HowItWorksCards  numberLines={t("home.howItWorks.steps3.number")}  number={3} text={t("home.howItWorks.steps3.content")} textheading={t("home.howItWorks.steps3.title")}/>
          
        </section>
      </div>
    </div>
  );
}

export default HowItWorks;
