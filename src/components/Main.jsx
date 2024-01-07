import Input from "./Input";
import Selection from "./Selection";
import Output from "./Output";
import Button from "./Button";
import { useState } from "react";

const Main = () => {
  // const [input, setInput] = useState("");
  // const [selection, setSelection] = useState("");
  // const [output, setOutput] = useState("");
  const [outputReady, setOutputReady] = useState(false);
  // const [loading, setLoading] = useState(true);

  /* logic: 
  on Button click, input and selection are gathered and sent to AI, loading is activated
  When response is ready, loading is deactivated and
  the output is shown

  make another button to handle the logic of setting everything to 0.
  or if statement into the onClick logic of the button

  */

  const handleClick = () => {
    setOutputReady(!outputReady);
    console.log("clicked");
  };

  return (
    <div className="main-container">
      <Input />

      {outputReady ? <Output /> : <Selection />}

      <Button handleClick={handleClick} outputReady={outputReady} />
    </div>
  );
};

export default Main;
