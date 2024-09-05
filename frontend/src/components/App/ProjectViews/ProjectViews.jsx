import PropTypes from "prop-types";

function ProjectViews(props) {
  return (
    <div className="p-4">
      {/* Affichage des éléments */}
      {props.isGridView ? (
        <div className="grid grid-cols-2 gap-4">{props.children}</div>
      ) : (
        <ul className="space-y-4">{props.children}</ul>
      )}
    </div>
  );
}

ProjectViews.propTypes = {
  children: PropTypes.node.isRequired,
  isGridView: PropTypes.bool,
};

export default ProjectViews;
