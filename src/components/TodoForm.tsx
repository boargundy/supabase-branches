
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Todo } from "@/types/todo.types";
import { toast } from "sonner";

const formSchema = z.object({
  description: z.string().min(1, "Description is required"),
});

interface TodoFormProps {
  initialData?: Todo;
  onSubmit: (data: z.infer<typeof formSchema>) => Promise<void>;
  isSubmitting: boolean;
}

const TodoForm: React.FC<TodoFormProps> = ({
  initialData,
  onSubmit,
  isSubmitting,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: initialData?.description || "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await onSubmit(data);
      if (!initialData) {
        form.reset();
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter todo description..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {initialData ? "Update" : "Create"} Todo
        </Button>
      </form>
    </Form>
  );
};

export default TodoForm;
