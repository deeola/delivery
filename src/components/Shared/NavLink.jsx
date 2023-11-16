import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";


const NavLink = ({to, linkText, linkClass}) => {
    const { t } = useTranslation();
    const location = useLocation();



  return (
   
      <Link
        to={to}
        className={'navigation-links'}
      >
     {t(linkText)}
      </Link>
 
  );
};

NavLink.propTypes = {
    to: PropTypes.string,
    linkText: PropTypes.string,
    linkClass : PropTypes.bool
};

NavLink.defaultProps = {
    to: null,
    linkText: null,
    linkClass : false
};

export default NavLink;
