
import React from "react";
import { Edit, Trash2 } from "lucide-react";
import { Todo } from "@/types/todo.types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface TodoListProps {
  todos: Todo[];
  onEdit: (todo: Todo) => void;
  onDelete: (id: number) => Promise<void>;
  isLoading: boolean;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onEdit,
  onDelete,
  isLoading,
}) => {
  if (isLoading) {
    return <div className="text-center py-8">Loading todos...</div>;
  }

  if (todos.length === 0) {
    return <div className="text-center py-8">No todos found. Create one!</div>;
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">
                {todo.description || "No description"}
              </TableCell>
              <TableCell>
                {new Date(todo.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(todo)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(todo.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TodoList;
