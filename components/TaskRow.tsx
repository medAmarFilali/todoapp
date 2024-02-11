"use client";

import { X } from "lucide-react";
import { Task } from "../app/page";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

export default function TaskRow({
  task,
  deleteTask,
  index,
}: {
  task: Task;
  deleteTask: (index: number) => void;
  index: number;
}) {
  return (
    <div className="p-4 border border-slate-100 rounded-md ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Checkbox />
          <p>{task.name}</p>
        </div>
        <Button variant="outline" onClick={() => deleteTask(task.id)}>
          <X />
        </Button>
      </div>
    </div>
  );
}
