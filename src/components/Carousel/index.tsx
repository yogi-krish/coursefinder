import React, { useRef } from "react";
import Slider from "react-slick";
import counsellingIcon from "../../assets/svg/counsellingIcon.svg";
import preparationIcon from "../../assets/svg/preparationIcon.svg";
import "./Carousel.scss";

const steps = [
  { id: 1, title: "Counselling", description: "Plan your Academic and Career Goals", icon: counsellingIcon },
  { id: 2, title: "Test Preparation", description: "Appear for Standardized Tests", icon: preparationIcon },
  { id: 3, title: "Course, Country and University selection", description: "Select the country, program and university", icon: preparationIcon },
  { id: 4, title: "Application & Admission", description: "Apply to your preferred institutions", icon: preparationIcon },
  { id: 5, title: "Education loan & Financials", description: "Apply for education loan and Arrange requisite financials", icon: preparationIcon },
  { id: 6, title: "Visa Processing", description: "Pay your deposit, accept offer and Apply for Visa", icon: preparationIcon },
  { id: 7, title: "Additional Support", description: "Attend Pre-Departure Session, Avail Forex", icon: preparationIcon },
];

const Carousel = () => {
  const sliderRef = useRef<any>(null);

  const goNext = () => sliderRef.current.slickNext();
  const goPrev = () => sliderRef.current.slickPrev();

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="dream">
      <h2 className="dream_title">7 Easy Steps to Land in your Dream University</h2>


      <div className="custom-buttons">
        <button className="prev-btn" onClick={goPrev}>Prev</button>
        <button className="next-btn" onClick={goNext}>Next</button>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {steps.map((step) => (
          <div key={step.id} className="wrapper">
            <div className="number">{step.id}</div>
            <div className="dream_container_card">
              <img className="dream_container_card_image" src={step.icon} alt="icon" />
              <div className="dream_container_card_title">{step.title}</div>
              <div className="dream_container_card_description">{step.description}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
