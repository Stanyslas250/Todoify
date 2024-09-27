import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { subtaskService } from "../../../services/subTaskServices";
import { useEffect, useState } from "react";
import { useAccount } from "../../../hooks/useAccount";

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
      <table className="table">
        <thead>
          <tr>
            <th>Completion</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {subTasks.map((subTask, i) => {
            return (
              <tr key={i}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{subTask.title}</div>
                    </div>
                  </div>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

SubTaskTable.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default SubTaskTable;
