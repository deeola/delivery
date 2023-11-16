import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { customCss } from "./customNavbar";
import { close, open, logo, arLogo } from "../../assets/images";
import NavLink from "./NavLink";
import "./Navbar.css";

const Navbar = () => {

  const navLeftRef = useRef(null);
  const logoRef = useRef(null)
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isNavOpen, setNavOpen] = useState(false);
  //   const [isRTL, setRTL] = useState(i18n.language === "ar");

  const [language, setLanguage] = useState("ltr");

  console.log(language)

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
  

    setLanguage((prevLanguage) => (prevLanguage === "ltr" ? "rtl" : "ltr"));

    console.log({language})

    if (currentLanguage === "en") {
      document.documentElement.setAttribute("dir", "rtl");
      return i18n.changeLanguage("ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      return i18n.changeLanguage("en");
    }
  };

  const toggleMenu = () => {
    
    setMenuOpen(!menuOpen);

    const navLeftElement = navLeftRef.current;
    const logoRefElement = logoRef.current
  
    if (!menuOpen) {
      console.log(navLeftElement)
      navLeftElement.style.display = 'flex';
      logoRefElement .style.display = 'none';
    } else {
      navLeftElement.style.display = 'none';
      logoRefElement .style.display = 'flex';
    }
    
  };



  return (
    <nav className="navbar">
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

            <div className="hamburger">
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
    </nav>
  );
};

export default Navbar;

//   const toggleNav = () => {
//     setNavOpen(!isNavOpen);
//   };

//   const changeLanguage = () => {
//     setApplyCustomStyles(!applyCustomStyles);
//     const currentLanguage = i18n.language;
//     const newLanguage = currentLanguage === "en" ? "ar" : "en";
//     i18n.changeLanguage(newLanguage);
//     setRTL(newLanguage === "ar");

//     if (newLanguage === "ar") {
//       document.documentElement.setAttribute("dir", "rtl");
//       document.body.classList.add("rtl");

//       document.getElementById("main-logo").src = arLogo;
//       document.getElementById("logo-footer").src = arLogo;
//     } else {
//       document.documentElement.setAttribute("dir", "ltr");
//       document.body.classList.remove("rtl");

//       document.getElementById("main-logo").src = logo;
//       document.getElementById("logo-footer").src = logo;
//     }
//   };

//   useEffect(() => {
//     if (isNavOpen) {
//       document.body.classList.add("navbar-open");
//     } else {
//       document.body.classList.remove("navbar-open");
//     }
//   }, [isNavOpen]);

{
  /* <ul className="navbar-nav ml-auto main-links">
<li className="nav-item langDes langBtn"></li>

<NavLink to="/" linkText="navbar.home" />
<NavLink to="/services" linkText="navbar.services" />
<NavLink to="#download" linkText="navbar.download" />
<NavLink to="/about" linkText="navbar.about" />
<NavLink to="/contact" linkText="navbar.contact" />

<li className="nav-item langMob langBtn">
  <button className="btn btn-link" onClick={changeLanguage}>
    {t("navbar.arabic")}
  </button>
</li>
<NavLink to="/login" linkText="navbar.login" linkClass />
<NavLink
  to="/signup"
  linkText="navbar.signup"
  linkClass={true}
/>
</ul> */
}

{
  /* <div className="col-sm-1 lang-btn-div">
<button className="btn btn-link lang-btn" onClick={changeLanguage}>
  {t("navbar.arabic")}
</button>
</div> */
}

{
  /* <div className="col-sm-2 main-logo">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" id="main-logo" />
            </Link>
            <button
              className={`navbar-toggler ${isNavOpen ? "active" : ""}`}
              type="button"
              onClick={toggleNav}
            >
              {isNavOpen ? (
                <img src={close} alt="close" />
              ) : (
                <img src={open} alt="open" />
              )}
            </button>
          </div> */
}

{
  /* <div className="col-sm-3 login-mob">
            <NavLink to="/login" linkText="navbar.login" linkClass />
            <NavLink to="/signup" linkText="navbar.signup" linkClass />
            <Link
              className={`nav-link login-btn ${
                location.pathname === "/login" ? "active" : ""
              }`}
              to="/login"
            >
              {t("navbar.login")}
            </Link>
            <Link
              className={`nav-link signup-btn ${
                location.pathname === "/signup" ? "active" : ""
              }`}
              to="/signup"
            >
              {t("navbar.signup")}
            </Link>
          </div> */
}
