import PropTypes from "prop-types";
import ProjectList from "../UI/ProjectList";
import ProjectGrid from "../UI/ProjectGrid";

function ProjectViews(props) {
  return (
    <div className="p-4">
      {/* Affichage des éléments */}
      {props.isGridView ? <ProjectGrid /> : <ProjectList />}
    </div>
  );
}

ProjectViews.propTypes = {
  children: PropTypes.node.isRequired,
  isGridView: PropTypes.bool,
};

export default ProjectViews;
