import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Text, TextHeading } from "../../Shared/Heading/Heading";
import "./WhyChooseUs.css";

const WhyCard = ({ img, alt, idx }) => {
  const { t } = useTranslation();
  return (
    <div className="card-container">
      <div className="imgContainer">
        <img className="cardImg" src={img} alt={alt} />
      </div>
      <TextHeading text={t(`home.whyChoose.cards.${idx}.title`)} />
      <Text text={t(`home.whyChoose.cards.${idx}.content`)} />
      {/* <p className="cardPara">{t(`home.whyChoose.cards.${idx}.content`)}</p> */}
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
