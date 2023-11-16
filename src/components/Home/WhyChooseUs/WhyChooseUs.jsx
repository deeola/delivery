import { useTranslation } from "react-i18next";
import { BusinessChart, Invest, Retire, Prof } from "../../../assets/images";
import WhyCard from "./WhyCard";
import './WhyChooseUs.css'

export function WhyChooseUs() {
  const { t } = useTranslation();
  return (
    <div id="whyChooseUs">
      <div className="containers">
        <div className="whychooseus-container">
          <div className="whychooseus-header">
            <h5 className="whyChooseHeading">{t("home.whyChoose.heading")}</h5>
            <h2 className="empower">{t("home.whyChoose.subheading")}</h2>
          </div>

          <div className="whychooseus-cards">
            <WhyCard img={BusinessChart} alt="business chart" idx="0" />
            <WhyCard img={Invest} alt="investment portfolio analysis" idx="1" />
            <WhyCard img={Retire} alt="retirement planning" idx="2" />
            <WhyCard img={Prof} alt="professional advisors" idx="3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

WhyChooseUs.propTypes = {};

WhyChooseUs.defaultProps = {};
