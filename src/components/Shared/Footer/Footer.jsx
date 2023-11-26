import { useTranslation } from "react-i18next";
import "./Footer.css";

import {
  logo,
  arLogo,
  appStore,
  playStore,
  fb,
  Twitter,
  Linkedin,
  Instagram,
} from "../../../assets/images";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const arFont={
    fontFamily: 'Cairo'
}

  return (
    <footer className="footer-container">
      <div className="containers">
        <div className="">


          <div className="logo-container">
            <img
               src={i18n.language === "en" ? logo : arLogo}
              alt="Logo"
              className="logoFooter"
              id="logo-footer"
            />
          </div>


          <div className="socials-container">
           
         
                <div className="footer-social-text" style={i18n.language === 'ar' ? arFont : {}}>{t("footer.socials")}</div>
             

              <div className="social-icon-main-container">
                <div className="social-icons">
                  <a href="https://www.facebook.com" className="social-icon-link" >
                    <img src={fb} alt="facebook icon" className="social-icon"/>
                  </a>
                  <a href="https://www.twitter.com" className="social-icon-link"  >
                    <img src={Twitter} alt="twitter icon"  className="social-icon"/>
                  </a>
                  <a href="https://www.linkedin.com"  className="social-icon-link" >
                    <img src={Linkedin} alt="linkedin" className="social-icon" />
                  </a>
                  <a href="https://www.instagram.com" className="social-icon-link"  >
                    <img src={Instagram} alt="instagram" className="social-icon"/>
                  </a>
                </div>
              </div>

    
          </div>

          <div className="bottomIcons">
           
              <div className="play-store">
              <img
                  src={appStore}
                  alt="appstore icon"
                  className="store-icon"
                />
                  <img
                    src={playStore}
                    alt="playstore icon"
                    className="store-icon"
                  />
              </div>

      
          </div>

          <hr className="divider" />
        </div>



        <div className="footer-text">
          <div className="left-text col-sm-6" style={i18n.language === 'ar' ? arFont : {}}>{t("footer.rights")}</div>
          <div className="right-text ">
            <a href="/terms" style={i18n.language === 'ar' ? arFont : {}}>{t("footer.terms")}</a>
            <a href="/privacy" style={i18n.language === 'ar' ? arFont : {}}>{t("footer.privacy")}</a>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
