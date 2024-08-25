export interface Category {
  id: number;
  name: string;
  user_id: number;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  category: Category;
  completed: boolean;
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
