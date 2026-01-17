import ClinicCard from "@/components/ClinicCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const Clinic = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-white">
      {/* Header / Hero */}
      <header className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold md:text-4xl">
                Our Clinics
              </h1>
              <p className="max-w-xl text-blue-100">
                Find the most convenient location, check availability, and get
                directions before your visit.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl space-y-8 px-5 py-12">
        {/* Intro card */}
        <Card className="border-blue-100 bg-white">
          <CardHeader>
            <CardTitle className="text-slate-900">Choose a location</CardTitle>
            <CardDescription>Open hours are subject to change.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-slate-600">
              Need help? Call{" "}
              <span className="font-semibold text-slate-800">
                (123) 456-7890
              </span>
            </p>
            <Link
              href="/about"
              className="text-sm font-medium text-blue-700 hover:underline">
              Meet our team →
            </Link>
          </CardContent>
        </Card>

        {/* Clinics grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-blue-100 bg-white shadow-sm transition hover:shadow-md">
            <ClinicCard
              id={"1"}
              locationName={"Mulund West"}
              primaryDoctorName={"Dr Bhupal Mane"}
              address={"No. 3 Jassu Sadan, Goshala Road"}
              openNow={true}
              phoneNumber={"(123) 456-7890"}
              locationUrl={"https://www.google.com"}
            />
          </div>

          <div className="rounded-xl border border-blue-100 bg-white shadow-sm transition hover:shadow-md">
            <ClinicCard
              id={"2"}
              locationName={"Mulund West"}
              primaryDoctorName={"Dr Shweta Mane"}
              address={"117 Marathon Max, GMLR"}
              openNow={false}
              phoneNumber={"(123) 456-7890"}
              locationUrl={"https://www.google.com"}
            />
          </div>

          <div className="rounded-xl border border-blue-100 bg-white shadow-sm transition hover:shadow-md">
            <ClinicCard
              id={"3"}
              locationName={"Neral, Karjat"}
              address={"789 Desert Rd"}
              openNow={true}
              phoneNumber={"(123) 456-7890"}
              locationUrl={"https://www.google.com"}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Clinic;
