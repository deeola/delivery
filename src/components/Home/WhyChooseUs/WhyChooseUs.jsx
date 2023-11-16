import { useTranslation } from "react-i18next";
import { BusinessChart, Invest, Retire, Prof } from "../../../assets/images";
import WhyCard from "./WhyCard";
import './WhyChooseUs.css'
import { H2, H5 } from "../../Shared/Heading";

export function WhyChooseUs() {
  const { t } = useTranslation();
  return (
    <div id="whyChooseUs">
      <div className="containers">
        <div className="whychooseus-container">
          <div className="whychooseus-header">
            <H5 centered text={t("home.whyChoose.heading")} />
            <H2 centered text={t("home.whyChoose.subheading")}/>
            {/* <h2 className="empower">{t("home.whyChoose.subheading")}</h2> */}
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
