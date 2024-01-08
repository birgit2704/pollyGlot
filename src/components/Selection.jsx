/* eslint-disable react/prop-types */
import frflag from "/assets/fr-flag.png";
import spflag from "/assets/sp-flag.png";
import jpnflag from "/assets/jpn-flag.png";

const Selection = ({ handleRadioChange }) => {
  return (
    <div className="selection-container">
      <h2>Select language 👇</h2>
      <div className="radio-button-container">
        <div>
          <input
            type="radio"
            name="language"
            id="french"
            value="french"
            onChange={(e) => handleRadioChange(e.currentTarget.value)}
            defaultChecked
          />
          <label htmlFor="french">French</label>
          <img src={frflag} />
        </div>
        <div>
          <input
            type="radio"
            name="language"
            id="spanish"
            value="spanish"
            onChange={(e) => handleRadioChange(e.currentTarget.value)}
          />

          <label htmlFor="spanish">Spanish</label>
          <img src={spflag} />
        </div>
        <div>
          <input
            type="radio"
            name="language"
            value="japanese"
            id="japanese"
            onChange={(e) => handleRadioChange(e.currentTarget.value)}
          />
          <label htmlFor="japanese">Japanese</label>
          <img className="jpn-flag" src={jpnflag} />
        </div>
      </div>
    </div>
  );
};

export default Selection;
