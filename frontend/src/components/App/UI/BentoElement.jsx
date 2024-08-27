import PropTypes from "prop-types";

function BentoElement(props) {
  return (
    <div
      className={`${props.className} p-4 bg-base-200 h-96 md:h-svh flex flex-col gap-4 rounded-xl`}
    >
      <h2 className="sticky text-xl font-semibold">{props.title}</h2>
      <div className="overflow-y-auto ">{props.children}</div>
    </div>
  );
}

BentoElement.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BentoElement;
