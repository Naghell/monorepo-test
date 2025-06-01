import { TaskCard } from "./TaskCard";
import { getTasks } from "@/lib/api";

export async function TaskList() {
  const tasks = await getTasks();

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
} 