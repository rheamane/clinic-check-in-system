import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { UserRound } from "lucide-react";

const Doctor = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex flex-row items-center font-bold">
              <UserRound className="mr-2 h-6 w-6" />
              Sign Up / Log In
            </div>
          </CardTitle>
          <CardDescription>Please enter your credentials.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-3">
              <div className="flex flex-col space-y-1.5">
                <Label>Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </form>
          <div className="flex flex-col pt-2 text-center text-xs">
            <a href="#" className="text-blue-400">
              Forgot Password?
            </a>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row gap-2">
          <Button className="flex-1">Sign up</Button>
          <Button className="flex-1">Log in</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Doctor;
