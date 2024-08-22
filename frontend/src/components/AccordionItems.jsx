/**
 * This function represents an accordion item component for a FAQ section.
 * It takes in two props: question and answer, and renders a collapsible accordion item.
 *
 * @param {Object} props - The props object containing question and answer.
 * @param {string} props.question - The question to be displayed in the accordion title.
 * @param {string} props.answer - The answer to be displayed in the accordion content.
 * @param {number} [props.index] - The index of the accordion item. This prop is
 *
 * @returns {JSX.Element} - A JSX element representing the accordion item.
 */

import PropTypes from "prop-types";
function AccordionItems(props) {
  return (
    <div className="border collapse collapse-arrow join-item border-base-300 text-start bg-secondary/20">
      <input type="checkbox" name="my-accordion-4" />
      <div className="text-xl font-medium collapse-title">{props.question}</div>
      <div className="collapse-content">
        <p>{props.answer}</p>
      </div>
    </div>
  );
}

AccordionItems.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default AccordionItems;