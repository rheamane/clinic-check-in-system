import PasswordDashCard from "@/components/PasswordDashCard";
import QueueElement from "@/components/QueueElement";
import UserDashCard from "@/components/UserDashCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

const Dashboard = () => {
  return (
    // MAIN CONTAINER
    <div className="flex h-screen flex-row bg-sky-100">
      {/* LEFT SIDE */}
      <div className="flex w-1/5 flex-none flex-col gap-3 bg-sky-700 p-2 text-white">
        <p className="font-mono text-3xl font-bold text-sky-50">PearlyQue</p>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex flex-1 flex-col">
        {/* TOP RIGHT */}
        <div className="flex flex-none flex-col gap-2 p-5">
          <div id="card-container" className="flex flex-row gap-4">
            <UserDashCard
              title="TOTAL PATIENTS IN WAITLIST"
              value={12}
              change={2.34}
            />
            <UserDashCard
              title="NEW PATIENTS IN WAITLIST"
              value={2}
              change={-3.45}
            />
            <PasswordDashCard title="PASSWORD OF THE DAY" value={"abc123"} />
          </div>
        </div>
        {/* BOTTOM RIGHT */}
        <div className="flex flex-1 flex-col overflow-y-auto bg-slate-400 p-2">
          <h1 className="text-lg font-bold text-slate-900">Current Waitlist</h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="h-9 text-sm text-slate-50">
                  Name
                </TableHead>
                <TableHead className="h-9 text-sm text-slate-50">
                  Phone Number
                </TableHead>
                <TableHead className="h-9 text-sm text-slate-50">
                  Reason
                </TableHead>
                <TableHead className="h-9 text-sm text-slate-50">
                  Time
                </TableHead>
                <TableHead className="h-9 text-sm text-slate-50">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <QueueElement />
              <QueueElement />
              <QueueElement />
              <QueueElement />
              <QueueElement />
              <QueueElement />
              <QueueElement />
              <QueueElement />
              <QueueElement />
              <QueueElement />
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
