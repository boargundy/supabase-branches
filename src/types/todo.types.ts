
export interface Todo {
  id: number;
  created_at: string;
  description: string | null;
}

export interface CreateTodoInput {
  description: string;
}

export interface UpdateTodoInput {
  description: string;
}
