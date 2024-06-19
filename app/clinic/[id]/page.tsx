import { Button } from "@/components/ui/button";
import Image from "next/image";
import shwetaImage from "@/public/s.jpg";
import {
  Navigation,
  Phone,
  ListPlus,
  GraduationCap,
  BriefcaseMedical,
} from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";

const clinicID = () => {
  return (
    <div className="m-1 flex flex-col gap-2 rounded-lg bg-white p-5 text-primary">
      {/* HEADER */}
      <div className="flex flex-row gap-2">
        <Image
          src={shwetaImage}
          alt="Doctor Photo"
          height={100}
          width={100}
          className="h-fit rounded-lg"
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold">Dr. Shweta Mane</h1>
          <p className="flex flex-row items-center gap-1 text-xs text-muted-foreground">
            <GraduationCap className="h-4 w-4" /> B.D.S (Mumbai)
          </p>
          <p className="flex flex-row items-center gap-1 text-xs text-muted-foreground">
            <BriefcaseMedical className="h-4 w-4" />
            General Dentistry
          </p>
          <p className="flex flex-row items-center gap-1 text-xs text-muted-foreground">
            <Phone className="h-4 w-4" />
            <a href="tel:+91-022-25934315">(022)-25934315</a>
          </p>
        </div>
      </div>

      {/* ABOUT THE DOCTOR */}
      <div>
        <h2 className="text-md font-semibold">About the Doctor</h2>
        <p className="text-xs text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          nostrum atque soluta! Saepe aliquam qui porro iure aperiam quia,
          veritatis quos quam odio, nemo voluptates facilis, rem ratione enim
          praesentium!
        </p>
      </div>

      {/* SERVICES */}
      <div id="services">
        <h2 className="text-md font-semibold">Services</h2>
        {[
          "Dentures",
          "Implant Prosthesis",
          "Smile Design",
          "Laminates",
          "Cosmetic Dentistry",
          "Root Canals",
          "Crowns",
          "Braces and Invisalign",
        ].map((service) => (
          <Badge
            className="mb-1 mr-1 bg-slate-500 text-xs font-normal"
            key={service}>
            {service}
          </Badge>
        ))}
      </div>

      {/* LOCATION */}
      <div>
        <h2 className="text-md font-semibold">Location</h2>
        <p className="text-xs text-muted-foreground">
          117 Marathon Max, Goregaon-Mulund Link Road, Mulund(West), Mumbai,
          Maharashtra 400080
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15074.849988825428!2d72.9381592!3d19.1640582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9556839b6cd%3A0x1c26dca29af64afa!2sDr%20Shweta%20Mane!5e0!3m2!1sen!2sus!4v1718310183214!5m2!1sen!2sus"
          className="h-full w-full"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      {/* CLINIC HOURS */}
      <div>
        <h2 className="text-md font-semibold">Clinic Hours</h2>
        <div className="mt-1 flex flex-col gap-2">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ].map((day) => (
            <div
              key={day}
              className="flex flex-row justify-between text-xs text-muted-foreground">
              <p>{day}</p>
              <div className="flex flex-col">
                <p>9:00 am - 1:00pm</p>
                <p>5:00 pm - 9:00 pm</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div
        id="stickyElements"
        className="fixed bottom-0 left-0 right-0 flex w-full flex-row gap-2 bg-blue-300 p-2">
        <Button className="flex-1 bg-slate-600" variant="default">
          <ListPlus className="mr-2 h-4 w-4" />
          Join Waitlist
        </Button>
        <Button className="" variant="outline">
          <Navigation className="h-4 w-4" />
        </Button>
        <Button className="" variant="outline">
          <Phone className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
export default clinicID;
