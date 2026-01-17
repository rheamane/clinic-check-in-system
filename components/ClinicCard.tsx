import React from "react";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

import { Phone, Navigation, ListPlus } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import Link from "next/link";

interface cardProps {
  id: string;
  locationName: string;
  primaryDoctorName?: string;
  address: string;
  openNow: boolean;
  phoneNumber: string;
  locationUrl: string;
}

const ClinicCard = ({
  id,
  locationName,
  primaryDoctorName,
  address,
  openNow,
  locationUrl,
  phoneNumber,
}: cardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col gap-1">
            <span className="text-xl font-semibold text-slate-900">
              {locationName}
            </span>

            <span
              className={`text-sm font-medium ${
                primaryDoctorName ? "text-blue-700" : "invisible text-blue-700"
              }`}>
              {primaryDoctorName ? `${primaryDoctorName}` : "primary doctor"}
            </span>
          </div>
        </CardTitle>

        <CardDescription>{address}</CardDescription>
        <Badge className="w-fit" variant={openNow ? "open" : "closed"}>
          {openNow ? "Open" : "Closed"}
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Button variant="default" asChild>
            <Link href={`/clinic/${id}/checkin`} className="flex items-center">
              <ListPlus className="mr-2 h-4 w-4" /> Schedule Appointment
            </Link>
          </Button>
          <div className="flex flex-row gap-2">
            <Button className="flex-1" variant="outline" asChild>
              <Link href={locationUrl} target="_blank">
                <Navigation className="mr-2 h-4 w-4" />
                Directions
              </Link>
            </Button>
            <Button className="flex-1" variant="outline" asChild>
              <Link href={`tel:${phoneNumber}`} target="_blank">
                <Phone className="mr-2 h-4 w-4" />
                Phone
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClinicCard;
