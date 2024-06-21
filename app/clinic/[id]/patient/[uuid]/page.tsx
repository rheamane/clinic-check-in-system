"use client";
import Stepper from "@/components/Stepper";
import { Button } from "@/components/ui/button";
import { Navigation, MapPinned, Phone, Info, ListX } from "lucide-react";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

export default function UUID() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const TotalSteps = 4;

  const handleNext = () => {
    setCurrentStep((prev) => (prev === TotalSteps - 1 ? prev : prev + 1));
  };
  const handlePrevious = () =>
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));

  return (
    <div className="m-1 flex flex-col gap-2 rounded-lg bg-white p-5">
      <Stepper currentStep={currentStep} totalSteps={TotalSteps} />
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
      <div className="my-5 flex flex-col items-center justify-center">
        <p className="text-xs font-semibold text-muted-foreground">
          ESTIMATED WAIT
        </p>
        <p className="text-4xl font-bold">10 min</p>
      </div>
      <div className="flex flex-row gap-2">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="flex-1">
              <MapPinned className="mr-2 h-4 w-4" />I Am Here
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Please enter the password from the TV screen to check in.
              </AlertDialogTitle>
              <AlertDialogDescription>
                If you have joined the waitlist from home, please check in to
                notify that you have arrived.
              </AlertDialogDescription>
              <Input placeholder="Enter the password here" />
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Check in</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

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
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant={"ghost"} className="mt-5 flex-1 text-red-500">
            <ListX className="mr-2 h-4 w-4" />
            Cancel my appointment
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to cancel your appointment?{" "}
            </AlertDialogTitle>
            <AlertDialogDescription>
              You will be taken off the waitlist and will have to re-apply for a
              new appointment.
            </AlertDialogDescription>
            {/* <Textarea placeholder="Enter the password here" /> */}
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Don&apos;t Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 text-white">
              Keep Cancelling
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
