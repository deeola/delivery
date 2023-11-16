import { useTranslation } from "react-i18next";
import { H2, H5, HeadingText } from "../../Shared/Heading";
import { Text, TextHeading } from "../../Shared/Heading/Heading";
import "./HowItWorks.css";

export function HowItWorks() {
  const { t, i18n } = useTranslation();

  console.log(i18n.language)

  // styling for arabic

  const styles = {
    flexDirection: "unset",
    marginLeft: "30px"
  }

  const numberLine = {
  
    marginTop: "70px"
  }
  
  return (
    <div className="containers">
      <div className="how-container">
        <div className="howLeft">
          <H5 text={t("home.howItWorks.heading")}/>
          <H2 text={t("home.howItWorks.subheading")} />
          <HeadingText text={t("home.howItWorks.content")} />
        </div>

        <section className="howRight">
          {t("home.howItWorks.steps", { returnObjects: true }).map(
            (step, index) => (
              <div className="how-right-container" key={index}>
                <div className="numbered-point" style={i18n.language === 'ar' ? styles : {}}>
                  <div className="numbered-circle" >{index + 1}</div>
                  {index !== 2 && <div className="numbered-line" style={i18n.language === 'ar' ? numberLine : {}}></div>}
                </div>

                <div className="content">
                  <TextHeading text={step.title} />
                  <Text text={step.content} />
                </div>
              </div>
            )
          )}
        </section>
      </div>
    </div>
  );
}

export default HowItWorks;
