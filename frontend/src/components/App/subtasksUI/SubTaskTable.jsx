import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
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

function SubTaskTable(props) {
  const task = props.task;
  const { token } = useAccount();
  const [subTasks, setSubTasks] = useState([]);
  const { data, isError, error } = useQuery({
    queryKey: ["subtasks", task.id],
    queryFn: () => subtaskService.getSubtasks(task.id, token),
  });

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
                    <DropdownMenuItem className="flex flex-row gap-3">
                      <LuPencil />
                      <p>Edit</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-row gap-3 hover:bg-error">
                      <LuTrash />
                      <p>Delete</p>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
