import React from "react";

export default function Stepper({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  const activeColor = (index: number) =>
    currentStep >= index ? "bg-blue-500" : "bg-gray-300";

  const isFirstStep = (index: number) => index === 0;

  return (
    <div className="flex items-center">
      {Array.from({ length: totalSteps }).map((value, index) => (
        <React.Fragment key={index}>
          {isFirstStep(index) ? null : (
            <div className={`h-1 w-full ${activeColor(index)} `}></div>
          )}
          <div
            className={`flex h-fit w-6/12 items-center justify-center rounded-full ${activeColor(index)}`}>
            <p>{index + 1}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
