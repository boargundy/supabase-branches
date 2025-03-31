
import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { todoService } from "@/services/todoService";
import { Todo } from "@/types/todo.types";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const TodoPage: React.FC = () => {
  const queryClient = useQueryClient();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: todoService.getTodos,
  });

  const createMutation = useMutation({
    mutationFn: todoService.createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Todo created successfully");
    },
    onError: () => {
      toast.error("Failed to create todo");
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, todo }: { id: number; todo: { description: string } }) =>
      todoService.updateTodo(id, todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Todo updated successfully");
      closeEditDialog();
    },
    onError: () => {
      toast.error("Failed to update todo");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: todoService.deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Todo deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete todo");
    },
  });

  const handleCreate = async (data: { description: string }) => {
    await createMutation.mutateAsync(data);
  };

  const handleEdit = (todo: Todo) => {
    setSelectedTodo(todo);
    setIsEditDialogOpen(true);
  };

  const handleUpdate = async (data: { description: string }) => {
    if (selectedTodo) {
      await updateMutation.mutateAsync({ id: selectedTodo.id, todo: data });
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this todo?")) {
      await deleteMutation.mutateAsync(id);
    }
  };

  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
    setSelectedTodo(null);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Todo Manager</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Create New Todo</h2>
          <TodoForm 
            onSubmit={handleCreate} 
            isSubmitting={createMutation.isPending} 
          />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Todo List</h2>
          <TodoList
            todos={todos || []}
            onEdit={handleEdit}
            onDelete={handleDelete}
            isLoading={isLoading}
          />
        </div>
        
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Todo</DialogTitle>
            </DialogHeader>
            {selectedTodo && (
              <TodoForm
                initialData={selectedTodo}
                onSubmit={handleUpdate}
                isSubmitting={updateMutation.isPending}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default TodoPage;
