import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import { useCategory } from "../../../hooks/useCategory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function ProjectForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { token } = useAuth();
  const { addCategory } = useCategory();

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["project"],
    mutationFn: async (data) => {
      const response = await addCategory(token, { name: data.projectName });
      queryClient.invalidateQueries();
      return response;
    },
    onSuccess: () => {
      toast.success("Project created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
    document.getElementById("create-new-project-modal").close();
    document.getElementById("create-modal").reset();
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 p-4">
      <label className="flex flex-row items-center justify-around gap-2 input input-bordered">
        <input
          type="text"
          className="grow"
          placeholder="Project Name"
          {...register("projectName", { required: true })}
        />
      </label>

      {errors.title && <span>This field is required</span>}
      <div className="flex flex-row gap-2">
        <button type="submit" className="btn btn-primary grow">
          Create Task
        </button>
        <button
          type="reset"
          className="btn btn-error"
          onClick={() => {
            document.getElementById("create-new-project-modal").close();
          }}
        >
          Close
        </button>
      </div>
    </form>
  );
}
