import { useState } from "react";

export const Calcultaor = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);

  const inputType = (e) => {
    setToggle(false);
    setInput((inp) => inp + e.target.value);
  };

  const equals = () => {
    setToggle(true);
    if (input.includes("+")) {
      let inputArray = input.split("+");
      setResult(parseInt(inputArray[0]) + parseInt(inputArray[1]));
      setInput(" ");
    } else if (input.includes("-")) {
      let inputArray = input.split("-");
      setResult(parseInt(inputArray[0]) - parseInt(inputArray[1]));
      setInput(" ");
    } else if (input.includes("/")) {
      let inputArray = input.split("/");
      setResult(parseInt(inputArray[0]) / parseInt(inputArray[1]));
      setInput(" ");
    } else if (input.includes("*")) {
      let inputArray = input.split("*");
      setResult(parseInt(inputArray[0]) * parseInt(inputArray[1]));
      setInput(" ");
    }
  };
  const clear = () => {
    setResult(0);
    setInput(" ");
    setToggle(false);
  };
  const deleteNumber = () => {
    setInput((inp) => inp.slice(0, -1));
  };
  return (
    <>
      <div className="calculator-container">
        {toggle ? <p>{result}</p> : <p>{input}</p>}
        <div className="calculator-buttons">
          <button value="0" name="0" className="button-0" onClick={inputType}>
            0
          </button>
          <button value="1" name="1" className="button-1" onClick={inputType}>
            1
          </button>
          <button value="2" name="2" className="button-2" onClick={inputType}>
            2
          </button>
          <button value="3" name="3" className="button-3" onClick={inputType}>
            3
          </button>
          <button value="4" name="4" className="button-4" onClick={inputType}>
            4
          </button>
          <button value="5" name="5" className="button-5" onClick={inputType}>
            5
          </button>
          <button value="6" name="6" className="button-6" onClick={inputType}>
            6
          </button>
          <button value="7" name="7" className="button-7" onClick={inputType}>
            7
          </button>
          <button value="8" name="8" className="button-8" onClick={inputType}>
            8
          </button>
          <button value="9" name="9" className="button-9" onClick={inputType}>
            9
          </button>
          <button value="+" name="+" className="button-+" onClick={inputType}>
            +
          </button>
          <button value="-" name="-" className="button--" onClick={inputType}>
            -
          </button>
          <button value="*" name="*" className="button-*" onClick={inputType}>
            *
          </button>
          <button value="/" name="/" className="button-/" onClick={inputType}>
            /
          </button>
          <button value="=" name="=" className="button-=" onClick={equals}>
            =
          </button>
          <button value="AC" name="AC" className="button-AC" onClick={clear}>
            AC
          </button>
          <button
            value="DE"
            name="DE"
            className="button-DE"
            onClick={deleteNumber}
          >
            DE
          </button>
        </div>
      </div>
    </>
  );
};
