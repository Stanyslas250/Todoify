/**
 * Functional component for rendering a testimonial card in a carousel.
 *
 * @param {Object} props - The props object containing Key, Name, Comment, and children.
 * @returns {JSX.Element} A testimonial card component with the provided props.
 */

import PropTypes from "prop-types";

function Testimonal(props) {
  return (
    <div key={props.Key} id={`slide${props.Key}`}>
      <div className="flex flex-col gap-6 p-6 border rounded-lg shadow border-secondary hover:border-primary bg-secondary/20 hover:bg-neutral/90 hover:text-neutral-content text-secondary-content">
        <div className="flex flex-col items-center gap-3 mb-2 text-lg font-bold tracking-tight lg:text-2xl ">
          <h3>{props.Name}</h3>
          <div className="flex items-center ml-3">{props.children}</div>
        </div>
        <div className="text-sm font-normal leading-6">
          <p>{props.Comment}</p>
        </div>
        <small className="text-xs text-gray-400">{props.Date}</small>
      </div>
    </div>
  );
}

Testimonal.propTypes = {
  Key: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  Comment: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  Date: PropTypes.string.isRequired,
};

export default Testimonal;
