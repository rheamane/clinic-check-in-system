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
  name: string;
  address: string;
  openNow: boolean;
  waitTime: number;
  phoneNumber: string;
  locationUrl: string;
}

const ClinicCard = ({
  id,
  name,
  address,
  openNow,
  waitTime,
  locationUrl,
  phoneNumber,
}: cardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{address}</CardDescription>
        <Badge className="w-fit" variant={openNow ? "open" : "closed"}>
          {openNow ? "Open" : "Closed"}
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {openNow && (
          <div>
            <p className="text-xs font-semibold text-muted-foreground">
              ESTIMATED WAIT
            </p>
            <p className="text-4xl font-bold">{waitTime} min</p>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <Button variant="default" disabled={!openNow} asChild>
            <Link href={`/clinic/${id}/checkin`} className="flex items-center">
              <ListPlus className="mr-2 h-4 w-4" /> Join Waitlist
            </Link>
          </Button>
          <div className="flex flex-row gap-2">
            <Button className="flex-1" variant="outline" asChild>
              <Link href={locationUrl} target="_blank">
                <Navigation className="mr-2 h-4 w-4" />
                Get Directions
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
