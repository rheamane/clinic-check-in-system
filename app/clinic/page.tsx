import ClinicCard from "@/components/ClinicCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const Clinic = () => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <h1 className="text-3xl font-bold text-foreground">Our clinics</h1>
      <ClinicCard
        id={"1"}
        name={"Dr. Bhupal Mane"}
        address={"123 Main St"}
        openNow={true}
        waitTime={5}
        phoneNumber={"(123) 456-7890"}
        locationUrl={"https://www.google.com"}
      />
      <ClinicCard
        id={"2"}
        name={"Dr. Shweta Mane"}
        address={"123 Main St"}
        openNow={false}
        waitTime={5}
        phoneNumber={"(123) 456-7890"}
        locationUrl={"https://www.google.com"}
      />
    </div>
  );
};
export default Clinic;
