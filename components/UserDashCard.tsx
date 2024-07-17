import { ArrowDown, ArrowUp, UserPlus, Users } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";

interface DashCardProps {
  title: string;
  value: string | number;
  change: number;
  // todo: add variable for increase/ decrease in value
}

const UserDashCard = ({ title, value, change }: DashCardProps) => {
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
          {title === "NEW PATIENTS IN WAITLIST" ? (
            <UserPlus className="h-5 w-5" />
          ) : (
            <Users className="h-5 w-5" />
          )}
        </div>
      </div>
      <div className="flex flex-row">
        {change < 0 ? (
          <Badge className="bg-red-500 text-white">
            <ArrowDown className="mr-1 h-3 w-3" />
            <p className="font-mono text-xs text-slate-50">
              {Math.abs(change)} %
            </p>
          </Badge>
        ) : (
          <Badge className="bg-green-500 text-white">
            <ArrowUp className="mr-1 h-3 w-3" />
            <p className="font-mono text-xs text-slate-50">{change} %</p>
          </Badge>
        )}
      </div>
    </div>
  );
};

export default UserDashCard;
