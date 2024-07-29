"use client";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";

const DoctorPage = () => {
  const [user, setUser] = React.useState<boolean>(false);

  const router = useRouter();

  // useEffect(() => {
  //   // Step 1: Check if the user is authenticated
  //   // Step 2: Redirect the user to the /signup page if they are not authenticated
  //   // Step 3: Redirect the user to the /onboard if they have no record in the database
  //   // Step 4: Redirect the user to the /dashboard if they have a record in the database

  //   if (!user) {
  //     router.push("/signup");
  //   }
  // }, [user, router]);
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader className="h-10 w-10 motion-safe:animate-spin" />
    </div>
  );
};

export default DoctorPage;
