export interface Category {
  id?: number;
  name: string;
  color?: string;
}

export type CategoryWithColor = Category & { color: string };

export interface Task {
  id: number;
  title: string;
  description: string;
  due_date: Date;
  category?: Category;
  completed: boolean;
  priority: string;
}

export interface Subtask {
  id: number;
  title: string;
  description: string;
  task: Task;
}

export interface Tag {
  id: number;
  name: string;
}

export enum Priority {
  All = "All",
  Hight = "Hight",
  Medium = "Medium",
  Low = "Low",
}

export type Filter = {
  status: "all";
  priority: Priority;
  completed: false;
  dateFilter: string; // Add new filter for date
};

export const DueDate = {
  All: "All",
  thisMonth: "This Month",
  thisWeek: "This Week",
  nextWeek: "Next Week",
  nextMonth: "Next Month",
};
