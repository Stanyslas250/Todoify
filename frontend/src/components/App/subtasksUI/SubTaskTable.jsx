import PropTypes from "prop-types";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { subtaskService } from "../../../services/subTaskServices";
import { useEffect, useState } from "react";
import { useAccount } from "../../../hooks/useAccount";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { LucideEllipsis } from "lucide-react";
import { LuPencil, LuTrash } from "react-icons/lu";
import toast from "react-hot-toast";
import SubTaskEditModal from "../modal/SubTaskEditModal";

function SubTaskTable(props) {
  const task = props.task;
  const { token } = useAccount();
  const [subTasks, setSubTasks] = useState([]);
  const [id, setId] = useState(0);
  const queryClient = useQueryClient();

  const { data, isError, error } = useQuery({
    queryKey: ["subtasks", task.id],
    queryFn: () => subtaskService.getSubtasks(task.id, token),
  });

  const mutate = useMutation({
    mutationKey: ["deleted", id],
    mutationFn: (subtask_id) => subtaskService.deleteSubtask(subtask_id),
    onSuccess: () => {
      toast.success("Subtask deleted successfully");
      queryClient.invalidateQueries(["subtasks", task.id]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleDelete = async (id) => {
    setId(id);
    await mutate.mutateAsync(id);
    console.log(id);
  };

  const handleEdit = () => {
    document.getElementById("edit-subtask").showModal();
  };

  useEffect(() => {
    if (data) {
      setSubTasks(data);
    }
  }, [data, subTasks, task.id]);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="overflow-x-auto">
      <Table className="self-center">
        <TableCaption>A list of your subtasks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Completion</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subTasks.map((subtask) => (
            <TableRow key={subtask.id} className=" hover:bg-base-100">
              <TableCell className="font-medium">
                <input
                  type="checkbox"
                  className="checkbox checkbox-ghost"
                  defaultChecked={subtask.completed}
                />
              </TableCell>
              <TableCell>{subtask.title}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <LucideEllipsis />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-base-200">
                    <DropdownMenuItem
                      className="flex flex-row gap-3"
                      onClick={handleEdit}
                    >
                      <LuPencil />
                      <p>Edit</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex flex-row gap-3 hover:bg-error"
                      onClick={() => {
                        handleDelete(subtask.id);
                      }}
                    >
                      <LuTrash />
                      <p>Delete</p>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <SubTaskEditModal subtaskId={subtask.id} subtask={subtask} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

SubTaskTable.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default SubTaskTable;
