import PropTypes from "prop-types";

function Card(props) {
  return (
    <div
      className={`${props.className} hover:bg-accent/30 cursor-pointer bg-accent/10 p-6 flex flex-row gap-4 text-accent-content`}
      onClick={props.onClick}
    >
      <div className="self-center p-4 bg-primary size-fit mask mask-circle">
        {props.children}
      </div>
      <div className="text-base-content hover:text-base">
        <h2 className="text-2xl font-semibold">
          {props.data} {props.title}
        </h2>
        <p className="font-light">{props.subtitle}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
