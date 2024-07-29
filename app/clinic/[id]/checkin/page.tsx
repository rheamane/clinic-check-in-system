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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CheckIn = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [firstVisit, setFirstVisit] = useState<boolean>(false);

  const [fullNameError, setFullNameError] = useState<boolean>(false);
  const [phoneNumError, setPhoneNumError] = useState<boolean>(false);

  const errorStyle = "ring-2 ring-red-500 ring-offset-2 ring-offset-background";

  function submitForm() {
    // TODO: Implement submit logic
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Check In</CardTitle>
          <CardDescription>Please enter your details.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3 md:flex-row">
            {/* FULL NAME */}
            <Input
              required
              className={fullNameError ? errorStyle : ""}
              type="text"
              placeholder="Full Name*"
              onChange={(e) => {
                setFullName(e.target.value);
                setFullNameError(e.target.value === "");
              }}
            />
            {/* PHONE NUMBER */}
            <Input
              required
              className={phoneNumError ? errorStyle : ""}
              type="tel"
              placeholder="Phone Number*"
              onChange={(e) => {
                setPhoneNum(e.target.value);
                setPhoneNumError(e.target.value.length !== 10);
              }}
            />
            {/* REASON FOR VISIT */}
            <Select
              required
              onValueChange={(value) => {
                setReason(value);
                console.log(value);
              }}>
              <SelectTrigger>
                <SelectValue placeholder="Reason for Visit*"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General Checkup">General Checkup</SelectItem>
                <SelectItem value="Ongoing Treatment">
                  Ongoing Treatment
                </SelectItem>
              </SelectContent>
            </Select>
            {/* First Visit */}
            <div className="mb-3 ml-2 flex items-center space-x-2">
              <Checkbox
                id="firstVisit"
                onCheckedChange={() => setFirstVisit(!firstVisit)}
              />
              <label
                htmlFor="firstVisit"
                className="text-xs text-muted-foreground">
                Is this your first visit?
              </label>
            </div>
            {/* FORM BUTTONS */}
            <CardFooter className="flex flex-col p-0">
              <Button
                className="w-full bg-sky-700"
                disabled={!fullName || !phoneNum || !reason}
                onClick={submitForm}>
                Check In
              </Button>
              <Button variant="ghost" onClick={() => router.back()}>
                Cancel
              </Button>
            </CardFooter>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckIn;
