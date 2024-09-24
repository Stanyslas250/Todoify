import PropTypes from "prop-types";
import Modal from "./UI/Modal";
import TaskList from "../UI/TaskList";

function TaskModal(props) {
  if (!props.tasksList.length) {
    return (
      <Modal idModal={props.taskID} className="prose">
        <h3>No tasks found.</h3>
      </Modal>
    );
  }
  return (
    <Modal idModal={props.taskID}>
      <TaskList tasksList={props.tasksList} />
    </Modal>
  );
}

TaskModal.propTypes = {
  tasksList: PropTypes.arrayOf(PropTypes.object).isRequired,
  taskID: PropTypes.string.isRequired,
};

export default TaskModal;
