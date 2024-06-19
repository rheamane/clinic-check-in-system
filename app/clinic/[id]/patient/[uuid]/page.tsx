"use client";
import Stepper from "@/components/Stepper";
import { Button } from "@/components/ui/button";
import { Navigation, MapPinned, Phone, Info, ListX } from "lucide-react";
import React from "react";
import { useState } from "react";

export default function UUID() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const TotalSteps = 4;

  const handleNext = () => {
    setCurrentStep((prev) => (prev === TotalSteps - 1 ? prev : prev + 1));
  };
  const handlePrevious = () =>
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));

  return (
    <div className="m-1 flex flex-col gap-2 rounded-lg bg-white p-5 text-primary">
      <Stepper currentStep={currentStep} totalSteps={TotalSteps}></Stepper>
      {/* <div className="flex flex-row gap-2">
        <Button
          variant="outline"
          className="rounded-full"
          onClick={handlePrevious}>
          Previous Step
        </Button>
        <Button variant="outline" className="rounded-full" onClick={handleNext}>
          Next Step
        </Button>
      </div> */}
      <br />
      <br />
      <br />
      <div className="my-5 flex flex-col items-center justify-center">
        <p className="text-xs font-semibold text-muted-foreground">
          ESTIMATED WAIT
        </p>
        <p className="text-4xl font-bold">10 min</p>
      </div>
      <div className="flex flex-row gap-2">
        <Button className="flex-1">
          <MapPinned className="mr-2 h-4 w-4" />I Am Here
        </Button>
        <Button variant={"outline"}>
          <Navigation className="h-4 w-4" />
        </Button>
        <Button variant={"outline"}>
          <Phone className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-row items-center gap-1 self-center">
        <Info className="h-4 w-4 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          Your spot is available for
        </p>
        <p className="text-sm text-red-400">59:00</p>
      </div>

      {/* <div>
        <p className="text-xs font-semibold text-muted-foreground">
          Please reach the location in{" "}
        </p>
        <div className="flex flex-row gap-2">
          <p className="text-4xl font-bold"> 59:00</p>
          <p className="text-xs font-semibold text-muted-foreground">minutes</p>
        </div>
      </div> */}
      <Button variant={"ghost"} className="mt-5 flex-1 text-red-500">
        <ListX className="mr-2 h-4 w-4" />
        Cancel my appointment
      </Button>
    </div>
  );
}
