import PropTypes from "prop-types";

function AlertModal(props) {
  return (
    <dialog id="deletedConfirmation" className={"modal"}>
      <div className="prose modal-box">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={props.onClickAction}>
            {props.Action1}
          </button>
          <button
            className="btn btn-error"
            onClick={() => {
              document.getElementById("deletedConfirmation").close();
            }}
          >
            {props.Action2}
          </button>
        </div>
      </div>
    </dialog>
  );
}

AlertModal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClickAction: PropTypes.func.isRequired,
  Action1: PropTypes.string,
  Action2: PropTypes.string,
};

export default AlertModal;
