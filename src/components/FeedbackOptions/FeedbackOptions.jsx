
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const buttons = Object.keys(options);
  console.log(buttons, 'i am buttons');
  return (
    <>
      {buttons.map(button => (
        <button
          key={button}
          type="button"
          className="bnt-feedbeck"
          onClick={() => onLeaveFeedback(button)}
        >
          {button[0].toUpperCase() + button.slice(1)}
        </button>
      ))}
    </>
  );
};