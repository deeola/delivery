import {
    GooglePlay,
    downiPhone,
    AppStore,
  } from "../../../assets/images";
  import './Download.css';

  import { useTranslation } from "react-i18next";
import { H2 } from "../../Shared/Heading";

export default function Download(){
const { t } = useTranslation();
  return (
    <div className="containers" id="download">
    <div className="download-container">
      <div className="downLeft">
        <H2 text={t("home.download.heading")} download />
        {/* <h2 className="downHeading">{t("home.download.heading")}</h2> */}
        <div className="imageContainer-2 downlinks">
          <img src={GooglePlay} alt="Google Play" className="imageLeft downimage" />
          <img src={AppStore} alt="App Store" className="imageLeft downimage" />
        </div>
      </div>
      <div className="downRight">
        <img src={downiPhone} alt="iPhone" className="downIphoneImage" />
      </div>
    </div>
  </div>
  )
}

