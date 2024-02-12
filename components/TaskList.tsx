"use client";

import { Task } from "@/types";
import TaskRow from "./TaskRow";
import { useTasks } from "@/providers/TasksProvider";

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <div className="flex flex-col gap-2">
      {tasks &&
        tasks.map((task, index) => <TaskRow key={task.id} task={task} />)}
    </div>
  );
}
