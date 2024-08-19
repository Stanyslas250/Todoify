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
export default function AccordionItems({ key, question, answer }) {
  return (
    <div
      className="collapse collapse-arrow join-item border-base-300 border text-start bg-secondary/20"
      key={key}
    >
      <input type="checkbox" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
}
