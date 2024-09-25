import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { subtaskService } from "../../../services/subTaskServices";
import { useAccount } from "../../../hooks/useAccount";
import toast from "react-hot-toast";

function SubTaskCounter(props) {
  const taskId = props.idTask;
  const [number, setNumber] = useState(0);
  const { token } = useAccount();

  useEffect(() => {
    const fetchSubTasks = async () => {
      await subtaskService
        .getSubtasks(taskId, token)
        .then((results) => setNumber(results.length))
        .catch((err) => toast.error(err.message));
    };
    fetchSubTasks();
  }, [taskId, token]);

  return <span className="text-sm">{number} subtasks</span>;
}

SubTaskCounter.propTypes = {
  idTask: PropTypes.number.isRequired,
};

export default SubTaskCounter;
