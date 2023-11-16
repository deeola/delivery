import  { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./ReviewSlider.css";
import {
  prevArrow,
  nextArrow,
  mTahir,
  stars
} from '../../../assets/images'
import Slider from "./Slider";


const ReviewSlider = () => {

  const { t } = useTranslation();

  const reviews = [
    {
      id: 0,
      title: t("reviewSlider.review1.title"),
      img: mTahir,
      content: t("reviewSlider.review1.content"),
    },
    {
      id: 1,
      title: t("reviewSlider.review2.title"),
      img: mTahir,
      content: t("reviewSlider.review2.content"),
    },
    {
      id: 2,
      title: t("reviewSlider.review3.title"),
      img: mTahir,
      content: t("reviewSlider.review3.content"),
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const prevReview = () => {
    setCurrentReviewIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);



  return (
    <div className="containers">
      <div className="">
        <div className="">
          <h5 className="whyChooseHeading">{t("reviewSlider.heading")}</h5>
          <h2 className="empower">{t("reviewSlider.empower")}</h2>
        </div>
      </div>

      <Slider />
      
      <div className="review-container">

{/* 
        <div className="">
          <button className="slider-button" onClick={prevReview}>
            <img
              src={prevArrow}
              alt={t("reviewSlider.previousArrow")}
              className="reviewarrow"
            />
          </button>
        </div>

        <div>

      
          {reviews.map((review, index) => (
                
                <div
                  key={review.id}
                  className={`review-card ${
                    index === currentReviewIndex ? "active" : ""
                  }`}
                >

                  <div className="">
                    <div className="">
                      <div className="">
                        <div className="">
                          <img
                            src={review.img}
                            alt="reviewer picture"
                            className="r-img"
                          />
                        </div>
                        <div className="">
                          <h2 className="">{review.title}</h2>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <img
                        src={stars}
                        alt="review stars"
                        className=""
    
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <p className="review-para">{review.content}</p>
                    </div>
                  </div>
                </div>
              ))}

        </div> */}


        {/* <div className="col-sm-10">
          <div className="slider-container">
            <div className="slider">

              
              {reviews.map((review, index) => (
                
                <div
                  key={review.id}
                  className={`review-card ${
                    index === currentReviewIndex ? "active" : ""
                  }`}
                >

                  <div className="row">
                    <div className="col-8">
                      <div className="row">
                        <div className="col-2">
                          <img
                            src={review.img}
                            alt="reviewer picture"
                            className="r-img"
                          />
                        </div>
                        <div className="col-10 r-name-container">
                          <h2 className="r-name">{review.title}</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                      <img
                        src={stars}
                        alt="review stars"
                        className="img-fluid"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <p className="review-para">{review.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

{/* 
        <div className="col-sm-1 slider-btns">
          <button className="slider-button next-button" onClick={nextReview}>
            <img
              src={nextArrow}
              alt={t("reviewSlider.nextArrow")}
              width="24px"
            />
          </button>
        </div> */}


      </div>

{/*       
      <div className="slider-dots">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`slider-dot ${
              index === currentReviewIndex ? "active" : ""
            }`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default ReviewSlider;
