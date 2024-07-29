import React from "react";
import { CircleCheck, Clock } from "lucide-react";

const Queue = () => {
  let patientArr = [
    { name: "John Doe", checkIn: true },
    { name: "Jane Doe", checkIn: false },
    { name: "Bob Smith", checkIn: true },
    { name: "Alice Johnson", checkIn: true },
    { name: "Mark Williams", checkIn: false },
    { name: "David Lee", checkIn: true },
    { name: "Sarah Brown", checkIn: true },
    { name: "Michael Johnson", checkIn: true },
    { name: "Emily Davis", checkIn: true },
    { name: "James Smith", checkIn: true },
  ];
  return (
    <div className="h-screen p-4">
      <div className="flex h-full flex-row gap-3 text-black">
        <div id="leftSide" className="flex w-1/4 flex-none flex-col gap-3">
          <div className="flex flex-none flex-col gap-3 rounded-lg bg-blue-500 p-6">
            <p className="text-center text-3xl font-bold text-slate-50">
              Next Patient
            </p>
            <h1 className="text-center text-5xl font-bold text-slate-50">
              Rhea M.
            </h1>
          </div>
          <div className="flex flex-1 flex-col gap-3 rounded-lg bg-blue-50 p-6">
            <p className="text-center text-3xl font-bold">Waitlist</p>
            <div>
              {patientArr.map(({ name, checkIn }, index) => (
                <p key={index} className="flex flex-row items-center text-3xl">
                  {checkIn ? (
                    <CircleCheck className="mr-2 h-6 w-6 text-green-500" />
                  ) : (
                    <Clock className="mr-2 h-6 w-6 text-red-500" />
                  )}
                  {name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div id="rightSide" className="flex flex-1 flex-col gap-3">
          <div className="flex flex-row gap-3">
            <div className="flex w-1/2 flex-none flex-col rounded-lg bg-blue-50 p-4">
              <p className="text-xl font-bold">Current Wait Time</p>
              <div className="flex-1 content-center self-center">
                <h1 className="text-xl">10 minutes</h1>
              </div>
            </div>
            <div className="flex flex-1 flex-col rounded-lg bg-blue-50 p-4">
              <p className="text-xl font-bold">Today&apos;s Hours</p>
              <p className="text-xl">10:00 AM - 2:00 PM</p>
              <p className="text-xl">6:00 PM - 9:00 PM</p>
            </div>
          </div>

          <div className="flex flex-1 rounded-lg bg-blue-50 p-4">
            <p className="text-xl font-bold">Carousel</p>
          </div>
          <div className="flex h-1/5 flex-none flex-col items-center justify-center rounded-lg bg-blue-50 p-4">
            <p>Use the following password to check in:</p>
            <div className="flex-1 content-center self-center">
              <h1 className="font-mono text-3xl font-bold tracking-widest">
                {" "}
                abc123{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queue;
