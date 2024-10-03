import PropTypes from "prop-types";
import Modal from "./UI/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { subtaskService } from "../../../services/subTaskServices";
import { useAccount } from "../../../hooks/useAccount";
import toast from "react-hot-toast";
import { useState } from "react";

function SubTaskEditModal(props) {
  const [isCompleted, setIsCompleted] = useState(props.subtask.completed);
  // Get QueryClient from the context
  const queryClient = useQueryClient();
  const { token } = useAccount();
  const mutate = useMutation({
    mutationKey: ["edit", props.subtask.title],
    mutationFn: async (subtask) => {
      await subtaskService.updateSubtask(props.subtaskId, subtask, token);
      queryClient.invalidateQueries(["subtasks", props.subtaskId]);
    },
  });

  const handleEdit = async () => {
    const title = document.getElementById("_title").value;
    const completed = isCompleted;
    const subTask = {
      title: title,
      completed: completed,
    };
    console.log(subTask);
    await mutate
      .mutateAsync(subTask)
      .then(() => {
        toast.success("Subtask successfully updated");
        setIsCompleted(!isCompleted);
        document.getElementById("edit-subtask").close();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <Modal idModal="edit-subtask" className={"flex flex-col gap-2"}>
      <input
        type="text"
        className="input input-secondary"
        id="_title"
        defaultValue={props.subtask.title}
        required
      />
      <label className="justify-start gap-2 cursor-pointer label">
        <span className="label-text">Completed</span>
        <input
          type="checkbox"
          name="Completed"
          className="checkbox"
          id="subTaskCompleted"
          defaultChecked={isCompleted}
          onChange={() => {
            setIsCompleted(!isCompleted);
          }}
        />
      </label>
      <div className="grid grid-flow-col gap-1">
        <button className="btn btn-primary" type="submit" onClick={handleEdit}>
          Edit Subtask
        </button>
        <button
          className="btn btn-error"
          onClick={() => {
            document.getElementById("edit-subtask").close();
          }}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}

SubTaskEditModal.propTypes = {
  subtask: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
  }),
  subtaskId: PropTypes.number.isRequired,
};

export default SubTaskEditModal;
