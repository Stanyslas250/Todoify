import Modal from "./UI/Modal";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useTasks } from "../../../hooks/useTask";
import { useAuth } from "../../../hooks/useAuth";
import { dateUtils } from "../../../utils/dateUtils";

function CreateNewTaskModal() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const { token } = useAuth();
  const { addTask } = useTasks();

  const mutation = useMutation({
    mutationKey: "tasks",
    mutationFn: async (task) => {
      // Add task to the server
      const response = await addTask(task, token);
      queryClient.invalidateQueries();
      return response;
    },
    onSuccess: () => {
      toast.success("Task created successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = async (data) => {
    await mutation.mutateAsync(data);
    // Reset form
    document.getElementById("create_task").close();
    document.getElementById("create_modal").close();
    reset();
  };

  const task = {
    title: "New Task",
    description: "Description 1",
    due_date: new Date(),
    completed: false,
    priority: "High",
  };

  return (
    <Modal idModal="create_task">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 ">
        <label className="flex flex-row items-center justify-around gap-2 input input-bordered">
          <input
            type="text"
            className="grow"
            placeholder="title"
            {...register("title", {
              required: true,
            })}
            defaultValue={task.title}
          />

          {errors.title && <span>This field is required</span>}
        </label>
        <textarea
          className="grow textarea textarea-bordered"
          placeholder="description"
          {...register("description")}
          defaultValue={task.description}
        />
        <label className="flex flex-row items-center justify-around gap-2 input input-bordered">
          <input
            type="datetime-local"
            className="grow"
            {...register("due_date")}
            defaultValue={dateUtils.getToday(task.due_date)}
          />
        </label>
        <select
          {...register("priority")}
          className="select select-primary w-full"
        >
          <option disabled>Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="Hight">Hight</option>
        </select>
        <label className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            className="checkbox"
            {...register("completed")}
            checked={task.completed}
          />
        </label>
        <div className="flex flex-row gap-2">
          <button type="submit" className="btn btn-primary grow">
            Create Task
          </button>
          <button
            type="reset"
            className="btn btn-error"
            onClick={() => {
              document.getElementById("create_task").close();
              document.getElementById("create_modal").close();
            }}
          >
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
}


export default CreateNewTaskModal;
