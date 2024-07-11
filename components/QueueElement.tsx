import React from "react";
import { TableCell, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const QueueElement = () => {
  return (
    <TableRow className="font-medium text-slate-800">
      <TableCell>Rhea Mane</TableCell>
      <TableCell>123-456-7890</TableCell>
      <TableCell>New Patient</TableCell>
      <TableCell>
        <Input
          className="h-7 w-1/3"
          type="number"
          min={0}
          max={59}
          value={15}
        />
      </TableCell>
      <TableCell>
        <div className="flex flex-row gap-2">
          <Button className="h-7" variant={"destructive"}>
            Remove
          </Button>
          <Button className="h-7 bg-sky-700 text-white" variant={"secondary"}>
            Call Next
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default QueueElement;
