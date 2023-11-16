import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./WhyChooseUs.css";

const WhyCard = ({ img, alt, idx }) => {
  const { t } = useTranslation();
  return (
    <div className="card-container">
      <div className="imgContainer">
        <img className="cardImg" src={img} alt={alt} />
      </div>
      <h4 className="cardHeading">{t(`home.whyChoose.cards.${idx}.title`)}</h4>
      <p className="cardPara">{t(`home.whyChoose.cards.${idx}.content`)}</p>
    </div>
  );
};

WhyCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  idx: PropTypes.string,
};

WhyCard.defaultProps = {
  img: null,
  alt: "image",
  idx: "0",
};

export default WhyCard;
