import PropTypes from "prop-types";
import Modal from "./UI/Modal";
import ProjectList from "../UI/ProjectList";

function ProjectModal(props) {
  if (!props.projectsList.length) {
    return (
      <Modal idModal={props.projectID} className="prose ">
        <h3>No projects found.</h3>
      </Modal>
    );
  }
  return (
    <Modal idModal={props.projectID}>
      <ProjectList />
    </Modal>
  );
}

ProjectModal.propTypes = {
  projectsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectID: PropTypes.string.isRequired,
};

export default ProjectModal;
