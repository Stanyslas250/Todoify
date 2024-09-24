import PropTypes from "prop-types";
import Modal from "./UI/Modal";

function CreateModal(props) {
  return (
    <div>
      <Modal
        idModal={props.idModal}
        className="flex flex-row justify-center gap-2"
      >
        {props.children}
      </Modal>
    </div>
  );
}

CreateModal.propTypes = {
  children: PropTypes.node.isRequired,
  idModal: PropTypes.string.isRequired,
};

export default CreateModal;
