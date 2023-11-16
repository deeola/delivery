import { useTranslation } from "react-i18next";
import { GooglePlay, iPhone, AppStore } from "../../../assets/images";
import "./Hero.css";

export function Hero() {
  const { t } = useTranslation();

  return (
    <header className="hero">
      <div className="containers">
        <div className="hero-container">
          
          <div className="hero-left">
            <h1 className="heroH1">{t("home.hero.heading")}</h1>
            <h1 className="heroH1">{t("home.hero.heading-b")}</h1>
            <p className="heroPara">{t("home.hero.content")}</p>

            <div className="heroDownloadLinks">
              <div className="imageContainer">
                <img  src={GooglePlay} alt="Google Play" className="imageLeft" />
                <img src={AppStore} alt="App Store" className="imageLeft" />
              </div>
            </div>
          </div>

          <div className="heroImage">
            <img className="hero-img" src={iPhone} alt="iPhone showing homepage of financial plan" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
