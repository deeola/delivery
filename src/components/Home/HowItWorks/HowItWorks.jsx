import { useTranslation } from "react-i18next";
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
          <h5 className="howHeading">{t("home.howItWorks.heading")}</h5>
          <h2 className="willBe">{t("home.howItWorks.subheading")}</h2>
          <p className="howPara">{t("home.howItWorks.content")}</p>
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
                  <h3>{step.title}</h3>
                  <p>{step.content}</p>
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
