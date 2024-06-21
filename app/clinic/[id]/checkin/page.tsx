"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectLabel } from "@radix-ui/react-select";
import React, { useState } from "react";

const CheckIn = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState<string>("");

  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [phoneNumError, setPhoneNumError] = useState<boolean>(false);

  const errorStyle = "ring-2 ring-red-500 ring-offset-2 ring-offset-background";

  return (
    <div className="flex h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Check In</CardTitle>
          <CardDescription>Please enter your personal details.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3 md:flex-row">
            <Input
              required
              className={firstNameError ? errorStyle : ""}
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
                setFirstNameError(e.target.value === "");
              }}
            />
            <Input
              required
              className={lastNameError ? errorStyle : ""}
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
                setLastNameError(e.target.value === "");
              }}
            />
            <Input
              required
              className={phoneNumError ? errorStyle : ""}
              type="tel"
              placeholder="Phone Number"
              onChange={(e) => {
                setPhoneNum(e.target.value);
                setPhoneNumError(e.target.value.length !== 10);
              }}
            />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Reason for Visit"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>New Patient</SelectLabel>
                  <SelectItem value="1">First Visit</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Returning Patient</SelectLabel>
                  <SelectItem value="2">General Checkup</SelectItem>
                  <SelectItem value="3">Ongoing Treatment</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <CardFooter className="flex flex-col gap-2 p-0">
              <Button className="w-full bg-sky-700">Check In</Button>
              <Button variant="ghost">Cancel</Button>
            </CardFooter>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckIn;
