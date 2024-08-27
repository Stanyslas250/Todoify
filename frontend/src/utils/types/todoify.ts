export interface Category {
  id: number;
  name: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  due_date: Date;
  category: Category;
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
