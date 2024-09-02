import PropTypes from "prop-types";
import Modal from "./UI/Modal";
import { LuFolderOpen } from "react-icons/lu";

function ProjectModal(props) {
  if (!props.projectsList.length) {
    return (
      <Modal idModal={props.projectID} className="prose">
        <h3>No projects found.</h3>
      </Modal>
    );
  }
  return (
    <Modal idModal={props.projectID}>
      {props.projectsList.map((project) => (
        <div
          key={project.id}
          className="flex flex-row items-center gap-2 p-3 rounded-lg hover:bg-accent/10"
        >
          <LuFolderOpen size={24} color={project.color} />
          <h3 className="text-xl text-base-content">{project.name}</h3>
        </div>
      ))}
    </Modal>
  );
}

ProjectModal.propTypes = {
  projectsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectID: PropTypes.string.isRequired,
};

export default ProjectModal;
