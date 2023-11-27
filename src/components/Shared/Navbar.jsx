import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { close, open, logo, arLogo } from "../../assets/images";
import i18n   from "../../i18n";
import NavLink from "./NavLink";



import "./Navbar.css";

const Navbar = () => {
  // const navLeftRef = useRef(null);
  // const logoRef = useRef(null);
  // const { t, i18n } = useTranslation();
  // const [language, setLanguage] = useState("ltr");
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [toggleState, setToggleState] = useState(false);
  // const [loading, setLoading] = useState(true);



  // useEffect(() => {
  //   // const initialize = async () => {
  //   //   await initializeI18n();
  //   //   setLoading(false);
  //   // };
  //   initializeI18n()
   
  //  },[language])


  // // Toogle Language
  // const ToggleLanguage = () => {
  //   const currentLanguage = i18n.language;
  //   setLanguage((prevLanguage) => (prevLanguage === "ltr" ? "rtl" : "ltr"));
  //   if (currentLanguage === "en") {
  //     document.documentElement.setAttribute("dir", "rtl");

      
  //     setToggleState((prev) => !prev);
  //     setMyVariable("ar");
  //     return i18n.changeLanguage("ar");
  //   } else {
  //     document.documentElement.setAttribute("dir", "ltr");

  //     setMyVariable("en");
  

  //     return i18n.changeLanguage("en");
  //   }

  //   // const currentLanguage = i18n.language;
  //   // const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';

  //   // setMyVariable(newLanguage);
    
  
  //   // // Update language state
  //   // setLanguage(newLanguage === 'en' ? 'ltr' : 'rtl');
  
  //   // // Update document direction
  //   // document.documentElement.setAttribute('dir', newLanguage === 'en' ? 'ltr' : 'rtl');
  
    
  //   // // Update i18n language
  //   // i18n.changeLanguage(newLanguage);
  // };





  const navLeftRef = useRef(null);
  const logoRef = useRef(null)
  const { t, i18n : myI18n } = useTranslation();
  const [language, setLanguage] = useState("ltr");
  const [menuOpen, setMenuOpen] = useState(false);
  // const { languages, changeLanguage } = useLanguage();

  // console.log(languages)



  


  // Toogle Language
  const toggleLanguage = () => {
    const currentLanguage = myI18n.language;
    setLanguage((prevLanguage) => (prevLanguage === "ltr" ? "rtl" : "ltr"));
    if (currentLanguage === "en") {
      document.documentElement.setAttribute("dir", "rtl");
      // changeLanguage('ar');

      return myI18n.changeLanguage("ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      // changeLanguage('en');



      return myI18n.changeLanguage("en");
    }
  };

// Toogle Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const navLeftElement = navLeftRef.current;
    const logoRefElement = logoRef.current

    if (!menuOpen) {

      navLeftElement.style.display = 'flex';
      logoRefElement .style.display = 'none';
    } else {
      navLeftElement.style.display = 'none';
      logoRefElement .style.display = 'flex';
    } 
  };

  const hamStyles  = {
    width: '100%',
    direction: 'ltr'

  }


  const hamStylesEn  = {
    width: '100%',
    direction: 'rtl'

  }

  const arFont = {
    fontFamily : 'Cairo'
  }


  return (
    <nav
      className="navbar testing"
      style={i18n.language === "ar" ? arFont : {}}
    >
      <div className="containers">
        <section
          className={`navbar-container ${language} ${
            menuOpen ? "menu-open" : ""
          }`}
        >
          <div className="navright">
            <div ref={logoRef} className="logo">
              <Link className="logo-link" to="/">
                <img
                  className="logo-link-image"
                  src={language === "ltr" ? logo : arLogo}
                  alt="logo"
                />
              </Link>
            </div>

            <div
              className="hamburger"
              style={i18n.language === "ar" ? hamStyles : hamStylesEn}
            >
              <div className="hihi">
                {menuOpen ? (
                  <img src={close} alt="close" onClick={toggleMenu} />
                ) : (
                  <img src={open} alt="open" onClick={toggleMenu} />
                )}
              </div>
            </div>

            <div
              className="language desktop-language navbar-open"
              onClick={toggleLanguage}
              style={i18n.language === "ar" ? arFont : {}}
            >
              {t("navbar.arabic")}
            </div>
          </div>
          <div className="navleft" ref={navLeftRef}>
            <div className="navlinks navbar-open">
              <NavLink to="/" linkText="navbar.home" />
              <NavLink to="/services" linkText="navbar.services" />
              <NavLink to="#download" linkText="navbar.download" />
              <NavLink to="/about" linkText="navbar.about" />
              <NavLink to="/contact" linkText="navbar.contact" />
            </div>

            <div
              className="langaue mobile-language"
              onClick={toggleLanguage}
              style={i18n.language === "ar" ? arFont : {}}
            >
              {t("navbar.arabic")}
            </div>

            <div className={`auth navbar-open ${language}`}>
              <Link
                className="auths login"
                to="/login"
                style={i18n.language === "ar" ? arFont : {}}
              >
                {t("navbar.login")}
              </Link>

              <Link
                className=" auths signup"
                to="/signup"
                style={i18n.language === "ar" ? arFont : {}}
              >
                {t("navbar.signup")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <nav className="navbar">
      <div className="containers">
        <section
          className={`navbar-container ${language} ${
            menuOpen ? "menu-open" : ""
          }`}
        >
          <div className="navright">

            <div ref={logoRef} className="logo">
              <Link className="logo-link" to="/">
                <img
                  className="logo-link-image"
                  src={language === "ltr" ? logo : arLogo}
                  alt="logo"
                />
              </Link>
            </div>

            <div className="hamburger" style={ i18n.language === 'ar' ? hamStyles : hamStylesEn}>
              <div>
                {menuOpen ? (
                  <img src={close} alt="close" onClick={toggleMenu} />
                ) : (
                  <img src={open} alt="open" onClick={toggleMenu} />
                )}
              </div>
            </div>

            <div className="language desktop-language navbar-open" onClick={toggleLanguage}>
              {t("navbar.arabic")}
            </div>
          </div>
          <div className="navleft" ref={navLeftRef}>
          <div className="navlinks navbar-open">
            <NavLink to="/" linkText="navbar.home" />
            <NavLink to="/services" linkText="navbar.services" />
            <NavLink to="#download" linkText="navbar.download" />
            <NavLink to="/about" linkText="navbar.about" />
            <NavLink to="/contact" linkText="navbar.contact" />
          </div>

          <div className="langaue mobile-language" onClick={toggleLanguage}>
              {t("navbar.arabic")}
          </div>

          <div className={`auth navbar-open ${language}`}>
        
            <Link className="auths login" to="/login">
              {t("navbar.login")}
            </Link>
       
       
            <Link className=" auths signup" to="/signup">
              {t("navbar.signup")}
            </Link>
      
            
            
          </div>
          </div>

         

        </section>
      </div>
    </nav> */
}
