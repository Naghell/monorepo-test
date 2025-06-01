'use client';

const priorityColors = {
  low: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800",
};

const statusColors = {
  pending: "bg-gray-100 text-gray-800",
  in_progress: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
};

export function TaskCard({ task }: any) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {task.title}
          </h3>
          {task.description && (
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              {task.description}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              priorityColors[task.priority as keyof typeof priorityColors]
            }`}
          >
            {task.priority}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              statusColors[task.status as keyof typeof statusColors]
            }`}
          >
            {task.status}
          </span>
        </div>
      </div>
      {task.dueDate && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </div>
      )}
    </div>
  );
} 