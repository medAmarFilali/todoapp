"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import Heading from "@/components/Heading";
import { Input } from "../components/ui/input";
import TaskList from "@/components/TaskList";

export type Task = {
  id: number;
  name: string;
  done: boolean;
};

export default function Home() {
  const [name, setName] = React.useState<string>("");
  const [currentTasks, setCurrentTasks] = React.useState<Task[]>([
    { id: 0, name: "Buy bread", done: false },
    {
      id: 1,
      name: "Drink water",
      done: false,
    },
    {
      id: 2,
      name: "Complete Code",
      done: false,
    },
    { id: 3, name: "Start business", done: false },
  ]);

  const handleAddTask = () => {
    const prevTasks = JSON.parse(JSON.stringify(currentTasks));

    const newTask = {
      id: prevTasks.length,
      name: name,
      done: false,
    };

    const newTasks = [...prevTasks, newTask];

    setCurrentTasks(newTasks);
  };

  const deleteTask = (index: number) => {
    const prevTasks = JSON.parse(JSON.stringify(currentTasks));

    const newTasks = prevTasks.filter((task: Task) => task.id !== index);

    setCurrentTasks(newTasks);
  };

  return (
    <main className="container mx-auto">
      <div className="flex justify-center mt-4">
        <Heading title="TODO APP" />
      </div>
      <div className="my-2">
        <div className="flex gap-2">
          <Input
            placeholder="Write item..."
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={handleAddTask}>Add Item</Button>
        </div>
        <div className="mt-4">
          <TaskList tasks={currentTasks} deleteTask={deleteTask} />
        </div>
      </div>
    </main>
  );
}
