import PropTypes from "prop-types";
import { LuPlus } from "react-icons/lu";

function AddCard(props) {
  return (
    <div className="flex items-center justify-center h-full border-dashed gap-5 p-8 bg-primary/10 cursor-pointer hover:bg-secondary/10 border-primary card">
      <LuPlus size={24} />
      <h6 className="font-semibold">{props.message}</h6>
    </div>
  );
}

AddCard.propTypes = {
  message: PropTypes.string.isRequired,
};

export default AddCard;
