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
import { Label } from "@/components/ui/label";
import { LogIn, MonitorCheck } from "lucide-react";
import React from "react";

const signUpPage = () => {
  return (
    <div className="flex h-screen flex-col-reverse md:flex-row">
      {/* Left Side */}
      <div className="flex flex-1 items-center justify-center bg-blue-300">
        Left Side
      </div>
      {/* Right Side */}
      <div className="flex flex-1 items-center justify-center p-4">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row items-center font-bold">
                Create Your Account
              </div>
            </CardTitle>
            <CardDescription>
              Let&apos;s get started with some basic information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-3">
                <div className="flex flex-col space-y-1.5">
                  <Label>Full Name</Label>
                  <Input id="name" type="text" placeholder="Dr.John Doe" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Clinic Address</Label>
                  <Input
                    id="clinic_address"
                    type="text"
                    placeholder="123 Main Street, Mumbai, India"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Phone Number</Label>
                  <Input
                    id="phone_number"
                    type="tel"
                    placeholder="9876543210"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="p flex-1 bg-blue-700 text-white">
              Continue to Dashboard
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default signUpPage;
