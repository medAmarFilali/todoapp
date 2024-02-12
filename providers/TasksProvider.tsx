"use client";

import { Task } from "@/types";
import * as React from "react";

interface Context {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  handleAddTask: (name: string) => void;
  deleteTask: (num: number) => void;
  checkTask: (num: number) => void;
}

const Context = React.createContext<Context>({
  tasks: [],
  setTasks: () => {},
  handleAddTask: () => {},
  deleteTask: () => {},
  checkTask: () => {},
});

export default function TasksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tasks, setTasks] = React.useState([
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

  const handleAddTask = (name: string) => {
    const prevTasks = JSON.parse(JSON.stringify(tasks));

    const newTask = {
      id: prevTasks.length,
      name: name,
      done: false,
    };

    const newTasks = [...prevTasks, newTask];

    setTasks(newTasks);
  };

  const deleteTask = (num: number) => {
    const prevTasks = JSON.parse(JSON.stringify(tasks));

    const newTasks = prevTasks.filter((task: Task) => task.id !== num);

    setTasks(newTasks);
  };

  const checkTask = (num: number) => {
    let prevTasks = JSON.parse(JSON.stringify(tasks)); // Create a deep copy

    // Look for the object in our array
    const chosenTaskIndex = prevTasks.findIndex((el: Task) => el.id === num);

    prevTasks[chosenTaskIndex].done = !prevTasks[chosenTaskIndex].done;

    setTasks(prevTasks);
  };

  const exposed: Context = {
    tasks,
    setTasks,
    handleAddTask,
    deleteTask,
    checkTask,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
}

export const useTasks = () => {
  const context = React.useContext(Context);

  if (context === undefined) {
    throw new Error("useTasks must be placed inside TasksProvider");
  } else {
    return context;
  }
};
