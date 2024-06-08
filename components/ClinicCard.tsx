import React from "react";
import { Button } from "./ui/button";
import { Phone, Navigation, CalendarCheck2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

interface cardProps {
  name: string;
  address: string;
  operatingHours: string;
  waitTime: number;
  phoneNumber: string;
}

const ClinicCard = ({ name, address, operatingHours, waitTime }: cardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          {address}
          <br />
          {operatingHours}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <p className="text-xs font-semibold text-muted-foreground">
            ESTIMATED WAIT
          </p>
          <p className="text-4xl font-bold">{waitTime} min</p>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <Button variant="default">
            <CalendarCheck2 className="mr-2 h-4 w-4" /> Check In
          </Button>
          <div className="flex flex-row gap-2">
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
      </CardContent>
    </Card>
  );
};

export default ClinicCard;
