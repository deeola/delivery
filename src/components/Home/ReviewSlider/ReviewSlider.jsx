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
import { H2, H5 } from "../../Shared/Heading";


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
      <div className="review-container">
        <div className="review-header">
          <H5 centered text={t("reviewSlider.heading")}  />
          <H2 centered text={t("reviewSlider.empower")} />
        </div>
        <Slider />
      </div>


    </div>
  );
};

export default ReviewSlider;
