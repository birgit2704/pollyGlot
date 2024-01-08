/* eslint-disable react/prop-types */
const Input = ({ getTextAreaText, input }) => {
  return (
    <div className="input-container">
      <h2>Text to translate 👇</h2>
      <textarea
        className="input-field"
        rows="3"
        value={input}
        placeholder="Enter your text"
        onChange={(e) => getTextAreaText(e.target.value)}
      />
    </div>
  );
};

export default Input;
