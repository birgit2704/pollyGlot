/* eslint-disable react/prop-types */
const Output = ({ output }) => {
  return (
    <div className="output-container">
      <h2>Your translation 👇</h2>
      <div className="output-area" rows="3">
        {output}
      </div>
    </div>
  );
};

export default Output;
