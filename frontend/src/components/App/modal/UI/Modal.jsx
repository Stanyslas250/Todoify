import PropTypes from "prop-types";
import { LuXCircle } from "react-icons/lu";

function Modal(props) {
  return (
    <div>
      <dialog id={props.idModal} className="modal">
        <div className={`modal-box ${props.className}`}>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-neutral absolute right-2 top-2">
              <LuXCircle size={24} />
            </button>
          </form>
          <div className={`${props.className} pt-5`}>{props.children}</div>
        </div>
      </dialog>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  idModal: PropTypes.string.isRequired,
};

export default Modal;
