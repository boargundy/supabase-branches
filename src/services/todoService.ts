
import { supabase } from "@/integrations/supabase/client";
import { CreateTodoInput, Todo, UpdateTodoInput } from "@/types/todo.types";

export const todoService = {
  async getTodos(): Promise<Todo[]> {
    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching todos:", error);
      throw error;
    }

    return data as Todo[] || [];
  },

  async getTodoById(id: number): Promise<Todo | null> {
    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching todo:", error);
      throw error;
    }

    return data as Todo | null;
  },

  async createTodo(todo: CreateTodoInput): Promise<Todo> {
    const { data, error } = await supabase
      .from("todos")
      .insert(todo)
      .select()
      .single();

    if (error) {
      console.error("Error creating todo:", error);
      throw error;
    }

    return data as Todo;
  },

  async updateTodo(id: number, todo: UpdateTodoInput): Promise<Todo> {
    const { data, error } = await supabase
      .from("todos")
      .update(todo)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating todo:", error);
      throw error;
    }

    return data as Todo;
  },

  async deleteTodo(id: number): Promise<void> {
    const { error } = await supabase
      .from("todos")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting todo:", error);
      throw error;
    }
  }
};
