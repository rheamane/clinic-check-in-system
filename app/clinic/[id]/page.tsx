import { Button } from "@/components/ui/button";
import Image from "next/image";
import bhupalImage from "@/public/bhupal.png";
import shwetaImage from "@/public/shweta.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navigation, Phone, ListPlus } from "lucide-react";
import React from "react";

const clinicID = () => {
  return (
    <div className="m-1 flex flex-col gap-2 rounded-lg bg-white p-5 text-primary">
      <div className="flex flex-row gap-2">
        <Image
          src={shwetaImage}
          alt="Doctor Photo"
          className="h-fit rounded-lg"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Dr. Shweta Mane</h1>
          <p className="text-xs text-muted-foreground">
            Registration: A-8008-Maharashtra State Dental Council (2014)
          </p>
        </div>
      </div>
      <p>
        About this Doctor: Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eligendi fugiat dolorum quidem eos officiis aut sit vel ratione
        quasi eaque sequi voluptate autem qui assumenda, accusantium veritatis
        necessitatibus sed ut.
      </p>

      <div className="flex flex-col gap-2 p-3">
        <p className="text-xs font-semibold text-muted-foreground">
          ESTIMATED WAIT
        </p>
        <p className="text-4xl font-bold">20min</p>
      </div>
      <div id="waitlistButton">
        <Button className="bottom-2 flex-1 bg-slate-600" variant="default">
          <ListPlus className="mr-2 h-4 w-4" /> Join Waitlist
        </Button>
        <p className="text-xs">Please reach the location in 1 hour</p>
      </div>
      <div className="flex flex-row gap-2 p-2">
        <Button className="flex-1" variant="outline">
          <Navigation className="mr-2 h-4 w-4" />
          Get Directions
        </Button>
        <Button className="flex-1" variant="outline">
          <Phone className="mr-2 h-4 w-4" />
          Phone
        </Button>
      </div>
    </div>
  );
};
export default clinicID;
