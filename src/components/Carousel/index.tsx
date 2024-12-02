import React from "react";
import Slider from "react-slick";
import quoteIcon from  "../../assets/svg/quoteIcon.svg";


import "./Carousel.scss";

const testimonials = [
  {
    text: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    name: "Mandar Suryawanshi",
    university: "Northeastern University, USA",
  },
  {
    text: "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
    name: "Aarohi Sighel",
    university: "University of South Australia, Australia",
  },
  {
    text: "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
    name: "Susan Mendonca",
    university: "Conestoga College, Canada",
  },
  {
    text: "Amazing experience and guidance...",
    name: "John Doe",
    university: "Harvard University, USA",
  },
];

const Carousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2>Our Students Love Us</h2>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
            <div tabIndex={-1} style={{
                width:"100%",
                display: "inline-block"
            }}>
                <div key={index} className="card">
            <div className="card_box1">
                <img className="card_box1_image" src={quoteIcon} alt="quote"/>
                <p className="card_box1_text">{item.text}</p>
            </div>
            <div className="card_box2">
                <p className="card_box2_name">{item.name}</p>
                <p className="card_box2_university">{item.university}</p>
            </div>
            
          </div>
            </div>
          
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
