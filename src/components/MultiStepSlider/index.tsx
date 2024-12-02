import React, { useState } from "react";
import "./MultiStepSlider.scss";

const steps = [
  {
    number: 1,
    title: "Counselling",
    description: "Plan your Academic and Career Goals",
    iconColor: "#F5A623", // Orange
  },
  {
    number: 2,
    title: "Test Preparation",
    description: "Appear for Standardized Tests",
    iconColor: "#C4C4C4", // Gray
  },
  {
    number: 3,
    title: "Application Process",
    description: "Submit Applications to Institutions",
    iconColor: "#8BC34A", // Green
  },
  // Add more steps if needed
];

const MultiStepSlider = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div className="multi-step-slider">
      {/* Timeline */}
      <div className="timeline">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`timeline-step ${
              index <= currentStep ? "active" : ""
            }`}
          >
            <div className="timeline-circle">{step.number}</div>
            {index < steps.length - 1 && <div className="timeline-line" />}
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="cards-container">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`slider-card ${
              index === currentStep ? "visible" : "hidden"
            }`}
          >
            <div
              className="icon"
              style={{ backgroundColor: step.iconColor }}
            ></div>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
            {index === currentStep && (
              <div className="card-arrow"></div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="navigation">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="prev-button"
        >
          &lt; Previous Step
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className="next-button"
        >
          Next Step &gt;
        </button>
      </div>
    </div>
  );
};

export default MultiStepSlider;
