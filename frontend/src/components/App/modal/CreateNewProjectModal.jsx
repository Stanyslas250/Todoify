import Modal from "./UI/Modal";
import ProjectForm from "../form/ProjectForm";

const CreateNewProjectModal = () => {
  return (
    <Modal idModal="create-new-project-modal">
      <ProjectForm />
    </Modal>
  );
};

export default CreateNewProjectModal;
