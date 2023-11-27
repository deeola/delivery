import { useTranslation } from "react-i18next";
import { Text, TextHeading } from "../../Shared/Heading";

const HowItWorksCards = ({text, textheading, number, numberLines}) => {

    const { i18n } = useTranslation();

    const styles = {

        marginLeft: "30px",
        alignItems : 'center'
        
      }
    
      const numberLine = {
      
        marginTop: "30px",
        left: '0px'
      }


    //   position: relative;
    //   width: 2px;
    //   height: 100px;
    //   margin-top: 30px;
    //   background: #00b795;
    //   left: 23px;
    //   top: 0;
    //   z-index: 1;


  return (
    <div className="how-right-container" >
      <div
        className="numbered-point"
        style={i18n.language === "ar" ? styles : {}}
      >
        <div className="numbered-circle">{numberLines}</div>
        {number !== 3 && (
          <div
            className="numbered-line"
            style={i18n.language === "ar" ? numberLine : {}}
          ></div>
        )}
      </div>

      <div className="content">
        <TextHeading text={textheading} />
        <Text text={text} />
      </div>
    </div>
  );
};

export default HowItWorksCards;
