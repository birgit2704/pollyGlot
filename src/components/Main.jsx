import Input from "./Input";
import Selection from "./Selection";
import Output from "./Output";
import Button from "./Button";
import { useState } from "react";
import OpenAI from "openai";

const Main = () => {
  const [input, setInput] = useState("Enter your text");
  const [selection, setSelection] = useState("");
  const [output, setOutput] = useState("");
  const [outputReady, setOutputReady] = useState(false);

  const openai = new OpenAI({
    apiKey: "",
    dangerouslyAllowBrowser: true,
  });

  const handleRadioChange = (value) => {
    setSelection(value);
  };
  const getTextAreaText = (value) => {
    setInput(value);
  };

  const handleClick = () => {
    setOutputReady(!outputReady);
    if (!outputReady) {
      getTranslation(input, selection);
    } else {
      window.location.reload();
    }
  };

  async function getTranslation() {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a helpful translator. Please translate into ${selection}`,
        },
        {
          role: "user",
          content: `${input}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    setOutput(completion.choices[0].message.content);
  }
  return (
    <div className="main-container">
      <Input getTextAreaText={getTextAreaText} />

      {outputReady ? (
        <Output output={output} />
      ) : (
        <Selection handleRadioChange={handleRadioChange} input={input} />
      )}

      <Button handleClick={handleClick} outputReady={outputReady} />
    </div>
  );
};

export default Main;
