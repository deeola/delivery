import  { useState } from 'react';
import { DarkArrow } from "../../../assets/images";
import PropTypes from "prop-types";
import './Pricing.css';

const PricingCard = ({ index, title, price, content, features, button }) => {
    const [selected, setSelected] = useState(1);
    const handleCardHover = (index) => {
        setSelected(index);
      };


      


    // 
    // 
    

  return (
    <div
    key={index}
    className={`pricecards ${selected === index ? 'selected' : 'unselect'}`}
    onClick={() => handleCardHover(index)}
  
    >
      <div className='priceandcontent'>
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
                className='arrow-check'
                // width="16px"
                // height="16px"
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
