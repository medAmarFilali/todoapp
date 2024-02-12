"use client";

import { Task } from "../app/page";
import TaskRow from "./TaskRow";

export default function TaskList({
  tasks,
  deleteTask,
  checkTask,
}: {
  tasks: Task[];
  deleteTask: (number: number) => void;
  checkTask: (number: number) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      {tasks &&
        tasks.map((task, index) => (
          <TaskRow
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            checkTask={checkTask}
            index={index}
          />
        ))}
    </div>
  );
}
