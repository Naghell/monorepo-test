"use server";
const API_URL = process.env.API_URL || "http://localhost:4000/api";

export interface Task {
  id: number;
  title: string;
  description: string | null;
  status: "pending" | "in_progress" | "completed";
  priority: "low" | "medium" | "high";
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
}

export async function getTasks(): Promise<Task[]> {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    if (!response.ok) {
      console.error("Failed to fetch tasks:", response.statusText);
      return [];
    }
    return response.json();
  } catch (error) {
    console.error("Error connecting to API:", error);
    return [];
  }
}

export async function createTask(
  task: Omit<Task, "id" | "createdAt" | "updatedAt">
): Promise<Task> {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error("Failed to create task");
  }
  return response.json();
}

export async function updateTask(
  id: number,
  task: Partial<Task>
): Promise<Task> {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error("Failed to update task");
  }
  return response.json();
}

export async function deleteTask(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
}
