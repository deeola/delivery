import { useState, useRef } from "react";
import { DarkArrow } from "../../../assets/images";
import PropTypes from "prop-types";
import "./Pricing.css";

const PricingCard = ({  title, price, content, features, button }) => {
 


 



  return (
    <div
   
    className='price-card'

    
    >
      <div className="priceandcontent">
        <h4 className="planHeading">{title}</h4>
        <h2 className="planPrice">{price}</h2>
        <p className="planPara">{content}</p>
      </div>
      <div className="arrows">
        {features.map((feature, featureIndex) => (
          <div className="feature-containers" key={featureIndex}>
            <img
              src={DarkArrow}
              alt="arrow check"
              className="arrow-check"
            />

            <span className="feat">{feature}</span>
          </div>
        ))}
      </div>

      <p className="priceCardSignupBtn">{button}</p>
    </div>
  );
};

PricingCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.string,
  content: PropTypes.string,
  features: PropTypes.array,
  button: PropTypes.string,
  handleHover: PropTypes.func,
};

PricingCard.defaultProps = {
  index: null,
  title: "",
  price: "",
  content: "",
  features: [],
  button: "",
};

export default PricingCard;
