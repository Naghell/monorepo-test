import { AddTaskButton } from "./AddTaskButton";

export function TaskHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Task Management
      </h1>
      <AddTaskButton />
    </div>
  );
} 