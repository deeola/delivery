import { useTranslation } from "react-i18next";
import { Available } from "../../../assets/images";
import "./Advisors.css";

export function Advisors() {
  const { t } = useTranslation();
  return (
    <div className="containers">

        <div className="advisors-container">
          
          <div className="advisorsLeft">
            <h5 className="advisorsHeading">{t("home.advisors.heading")}</h5>
            <h2 className="willBe">{t("home.advisors.subheading")}</h2>
            <p className="advisorPara">{t("home.advisors.paragraph")}</p>
          </div>

          <div className="advisorsRight">
            <img className="advisorImage" src={Available} alt="advisor available image" />
          </div>

        </div>
     

    </div>
  );
}

export default Advisors;
