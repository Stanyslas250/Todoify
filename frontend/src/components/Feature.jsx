import PropTypes from "prop-types";

function Feature(props) {
  return (
    <div className="w-full p-6 border rounded-lg shadow border-secondary hover:border-primary bg-secondary/20 hover:bg-neutral/90 hover:text-neutral-content text-secondary-content">
      <h2 className="mb-2 text-lg font-bold tracking-tight lg:text-2xl ">
        {props.title}
      </h2>
      <p className="font-normal ">{props.description}</p>
    </div>
  );
}

Feature.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Feature;
