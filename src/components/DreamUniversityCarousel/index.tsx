import { useState, useRef } from "react";
import counsellingIcon from "../../assets/svg/counsellingIcon.svg";
import preparationIcon from "../../assets/svg/preparationIcon.svg";
import courseIcon from "../../assets/svg/course-icon-a.svg";
import certificateIcon from "../../assets/svg/certificateIcon.svg";
import visaIcon from "../../assets/svg/stud-icon.svg";
import loanIcon from "../../assets/svg/edu-icon.svg";
import supportIcon from "../../assets/svg/supportIcon.svg";
import gradient from "../../assets/svg/gradient.svg";
import leftArrow from "../../assets/svg/arrow_left.svg";
import rightArrow from "../../assets/svg/arrow_right.svg";
import Slider from "react-slick";

import "./DreamUniversityCarousel.scss";

const steps = [
    {
        id: 1,
        title: "Counselling",
        description: "Plan your Academic and Career Goals",
        icon: counsellingIcon,
    },
    {
        id: 2,
        title: "Test Preparation",
        description: "Appear for Standardized Tests",
        icon: preparationIcon,
    },
    {
        id: 3,
        title: "Course, Country and University selection",
        description: "Select the country, program and university",
        icon: courseIcon,
    },
    {
        id: 4,
        title: "Application & Admission",
        description: "Apply to your preferred institutions",
        icon: certificateIcon,
    },
    {
        id: 5,
        title: "Education loan & Financials",
        description: "Apply for education loan and Arrange requisite financials",
        icon: loanIcon,
    },
    {
        id: 6,
        title: "Visa Processing",
        description: "Pay your deposit, accept offer and Apply for Visa",
        icon: visaIcon,
    },
    {
        id: 7,
        title: "Additional Support",
        description: "Attend Pre-Departure Session, Avail Forex",
        icon: supportIcon,
    },
];

const DreamUniversityCarousel = () => {
    const [firstIndex, setFirstIndex] = useState(0);

    const isMobile = window.innerWidth < 990;
    const sliderRef = useRef<any>(null);

    const goNext = () => sliderRef.current.slickNext();
    const goPrev = () => sliderRef.current.slickPrev();

    const onNext = () => {
        if (firstIndex < steps.length - 2) {
            setFirstIndex(firstIndex + (1 % steps.length));
        }
    };

    const onPrev = () => {
        if (firstIndex >= 1) {
            setFirstIndex(firstIndex - 1);
        }
    };

    const displaySteps = steps.slice(firstIndex, firstIndex + 2);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="dream">
            <h2 className="dream_title">7 Easy Steps to Land in your Dream University</h2>
            {isMobile ? (
                <Slider {...settings} ref={sliderRef} className="dream_slider">
                    {steps.map((step) => (
                        <div>
                            <div className="wrapper">
                                <text className="number">{step.id}</text>
                                <div className="card">
                                    <div className="triangle"></div>
                                    <img className="card_image" src={step.icon} alt="icon" />
                                    <text className="card_title">{step.title}</text>
                                    <text className="description">{step.description}</text>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <div className="dream_container">
                    {displaySteps.map((step, idx) => (
                        <div className="wrapper">
                            <text className={`${idx === 0 ? "number1" : "number2"} number`}>{step.id}</text>
                            {idx < 1 && <div className="line"></div>}
                            <div className="dream_container_card">
                                <div className="triangle"></div>
                                <img className="dream_container_card_image" src={step.icon} alt="icon" />
                                <text className="dream_container_card_title">{step.title}</text>
                                <text className="dream_container_card_description">{step.description}</text>
                            </div>
                        </div>
                    ))}
                    <img className="gradient" src={gradient} />
                </div>
            )}

            <div className="dream_btns">
                <div className="dream_btns_btn" onClick={isMobile ? goPrev : onPrev}>
                    <img src={leftArrow} alt="<" height={"10px"} />
                    Previous Step
                </div>
                <div className="dream_btns_btn" onClick={isMobile ? goNext : onNext}>
                    Next Step
                    <img src={rightArrow} alt=">" height={"10px"} />
                </div>
            </div>
        </div>
    );
};

export default DreamUniversityCarousel;
