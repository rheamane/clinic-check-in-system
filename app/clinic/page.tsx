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
      <h1 className="text-2xl font-bold">Our Locations</h1>
      <ClinicCard
        name={"Dr. Bhupal Mane"}
        address={"123 Main St"}
        operatingHours={"Monday - Friday: 8:00 AM - 5:00 PM"}
        waitTime={5}
        phoneNumber={"(123) 456-7890"}
      />
      <ClinicCard
        name={"Dr. Shweta Mane"}
        address={"123 Main St"}
        operatingHours={"Monday - Friday: 8:00 AM - 5:00 PM"}
        waitTime={5}
        phoneNumber={"(123) 456-7890"}
      />
    </div>
  );
};
export default Clinic;
