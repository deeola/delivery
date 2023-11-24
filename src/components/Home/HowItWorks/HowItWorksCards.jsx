import { useTranslation } from "react-i18next";
import { Text, TextHeading } from "../../Shared/Heading";

const HowItWorksCards = ({text, textheading, number, numberLines}) => {

    const { i18n } = useTranslation();

    const styles = {
        flexDirection: "unset",
        marginLeft: "30px"
      }
    
      const numberLine = {
      
        marginTop: "70px"
      }


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
