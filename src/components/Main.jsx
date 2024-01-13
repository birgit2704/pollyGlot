import Input from "./Input";
import Selection from "./Selection";
import Output from "./Output";
import Button from "./Button";
import { useState } from "react";
import OpenAI from "openai";

const Main = () => {
  const [input, setInput] = useState("");
  const [selection, setSelection] = useState("");
  const [output, setOutput] = useState("");
  const [outputReady, setOutputReady] = useState(false);

  const apikey = import.meta.env.VITE_OPENAI_API_KEY; /* npm install dotenv */

  const openai = new OpenAI({
    apiKey: apikey,
    dangerouslyAllowBrowser: true,
  });

  const getTextAreaText = (value) => {
    setInput(value);
  };

  const handleRadioChange = (value) => {
    setSelection(value);
  };
  const handleClick = () => {
    setOutputReady(!outputReady);
    if (!outputReady) {
      getTranslation(input, selection);
    } else {
      setInput("");
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
      <Input getTextAreaText={getTextAreaText} input={input} />

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
