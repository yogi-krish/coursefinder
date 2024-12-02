import React, { useState } from "react";
import "./DreamUniversityCarousel.scss";

const steps = [
  {
    id: 1,
    title: "Counselling",
    description: "Plan your Academic and Career Goals",
    icon: "🎯", // Replace with actual SVG/icon
  },
  {
    id: 2,
    title: "Test Preparation",
    description: "Appear for Standardized Tests",
    icon: "👔", // Replace with actual SVG/icon
  },
  {
    id: 3,
    title: "Application Process",
    description: "Submit Applications to Your Dream Universities",
    icon: "📝", // Add more steps as needed
  },
];

const DreamUniversityCarousel = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prevStep) =>
      prevStep < steps.length - 1 ? prevStep + 1 : prevStep
    );
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  return (
    <div className="carousel-container">
      <h2>7 Easy Steps to Land in your Dream University</h2>
      <div className="carousel">
        <div className="timeline">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`timeline-step ${
                index === currentStep ? "active" : index < currentStep ? "completed" : ""
              }`}
            >
              <div className="circle">{step.id}</div>
              {index < steps.length - 1 && <div className="line" />}
            </div>
          ))}
        </div>
        <div className="cards">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`card ${
                index === currentStep
                  ? "active"
                  : index === currentStep + 1
                  ? "next"
                  : "inactive"
              }`}
            >
              <div className="card-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button onClick={handlePrevious} disabled={currentStep === 0}>
            &lt; Previous Step
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
          >
            Next Step &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default DreamUniversityCarousel;
