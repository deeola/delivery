import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "./FAQ.css"; // Import the CSS file for styling

const FAQ = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      question: t("faq.question4"),
      answer: t("faq.answer4"),
    },
    {
      question: t("faq.question5"),
      answer: t("faq.answer5"),
    },
  ];

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="containers">
      <div className="faq-cont">
        <div className="faq-header">
          <h4 id="faqHeading">{t("faq.heading")}</h4>
          <h3 id="faqText">{t("faq.text")}</h3>
        </div>
          <div className="faq-container">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleClick(index)}
              >
                <div className="question">
                  {item.question}
                  <FontAwesomeIcon
                    icon={activeIndex === index ? faChevronUp : faChevronDown}
                    className="arrow-icon"
                  />
                </div>
                {activeIndex === index && (
                  <div className="answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
       
      </div>
    </div>
  );
};

export default FAQ;
