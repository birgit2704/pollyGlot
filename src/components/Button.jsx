/* eslint-disable react/prop-types */
const Button = ({ handleClick, outputReady }) => {
  return (
    <div className="button" onClick={handleClick}>
      {outputReady ? "Start over" : "Translate"}
    </div>
  );
};

export default Button;
