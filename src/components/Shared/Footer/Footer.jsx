import { useTranslation } from "react-i18next";
import "./Footer.css";

import {
  logo,
  appStore,
  playStore,
  fb,
  Twitter,
  Linkedin,
  Instagram,
} from "../../../assets/images";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <div className="containers">
        <div className="">


          <div className="logo-container">
            <img
              src={logo}
              alt="Logo"
              className="logoFooter"
              id="logo-footer"
            />
          </div>


          <div className="socials-container">
            <div className="row">
              <div className="col-sm-6 ">
                <div className="tag">{t("footer.socials")}</div>
              </div>

              <div className="col-sm-6 m-0 p-0">
                <div className="social-icons">
                  <a href="https://www.facebook.com" className="social-icon">
                    <img src={fb} alt="facebook icon" />
                  </a>
                  <a href="https://www.twitter.com" className="social-icon">
                    <img src={Twitter} alt="twitter icon" />
                  </a>
                  <a href="https://www.linkedin.com" className="social-icon">
                    <img src={Linkedin} alt="linkedin" />
                  </a>
                  <a href="https://www.instagram.com" className="social-icon">
                    <img src={Instagram} alt="instagram" />
                  </a>
                </div>
              </div>

            </div>
          </div>



          <div className="">
            <div className="row">
              <div className="col-sm-6 m-0 p-0 app-store">
                <img
                  src={appStore}
                  alt="appstore icon"
                  className="store-icon"
                />
              </div>
              <div className="col-sm-6 m-0 p-0 play-store">
                <div id="play-store">
                  <img
                    src={playStore}
                    alt="playstore icon"
                    className="store-icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="divider" />
        </div>



        <div className="footer-text">
          <div className="left-text col-sm-6">{t("footer.rights")}</div>
          <div className="right-text ">
            <a href="/terms">{t("footer.terms")}</a>
            <a href="/privacy">{t("footer.privacy")}</a>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
