import { ArrowUp, Pencil, ShieldCheck, Users } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";

interface DashCardProps {
  title: string;
  value: string | number;
  // todo: add variable for increase/ decrease in value
}

const PasswordDashCard = ({ title, value }: DashCardProps) => {
  return (
    <div
      id="DashCard"
      className="flex flex-1 flex-col gap-2 rounded-md bg-slate-50 p-4">
      <div className="flex flex-row gap-2">
        <div className="flex flex-auto flex-col">
          <p className="font-mono text-sm font-bold text-slate-500">{title}</p>
          <h1 className="font-mono text-2xl">{value}</h1>
        </div>
        <div className="flex flex-1 flex-row-reverse justify-items-end">
          <ShieldCheck className="h-5 w-5" />
        </div>
      </div>
      <div className="flex flex-row">
        <Badge className="bg-sky-500 text-white">
          <Pencil className="mr-1 h-3 w-3" />
          <p className="font-mono text-xs text-slate-50">Change Password</p>
        </Badge>
      </div>
    </div>
  );
};

export default PasswordDashCard;
