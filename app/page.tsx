"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import Heading from "@/components/Heading";
import { Input } from "../components/ui/input";
import TaskList from "@/components/TaskList";
import { Task } from "@/types";
import { useTasks } from "@/providers/TasksProvider";

export default function Home() {
  const { handleAddTask } = useTasks();
  const [name, setName] = React.useState<string>("");

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
          <Button onClick={() => handleAddTask(name)}>Add Item</Button>
        </div>
        <div className="mt-4">
          <TaskList />
        </div>
      </div>
    </main>
  );
}
