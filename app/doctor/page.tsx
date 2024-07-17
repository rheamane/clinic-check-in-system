"use client";
import { Button } from "@/components/ui/button";
import { Loader, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";

const DoctorPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Step 1: Check if the user is authenticated
    // Step 2: Redirect the user to the /signup page if they are not authenticated
    // Step 3: Redirect the user to the /onboard if they have no record in the database
    // Step 4: Redirect the user to the /dashboard if they have a record in the database
  }, []);
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader className="h-10 w-10 motion-safe:animate-spin" />
    </div>
  );
};

export default DoctorPage;
