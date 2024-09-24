import PropTypes from "prop-types";

function BentoElement(props) {
  return (
    <div
      className={`${props.className} rounded-xl text-center place-content-center text-primary-content gap-4 flex flex-col py-20 px-4`}
    >
      <h1 className="text-xl font-bold lg:text-4xl">{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

BentoElement.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default BentoElement;
