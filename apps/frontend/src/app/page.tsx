import { TaskList } from "@/components/tasks/TaskList";
import { TaskHeader } from "@/components/tasks/TaskHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <TaskHeader />
        <TaskList />
      </div>
    </div>
  );
}
