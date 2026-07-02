export type TaskStatus = "pending" | "completed";

export type TaskPriority = "low" | "medium" | "high";

export type Task = {
  id: number;
  name: string;
  status: TaskStatus;
  priority: TaskPriority;
  description?: string;
  notes?: string;
};
