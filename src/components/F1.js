import React, { useState } from "react";

export default function F1(props) {
  const [val, setVal] = useState("");
  const [word, setWord] = useState(0);

  const handleUpClick = () => {
    setVal("you have clicked to upper-case");
    let newVal = val.toUpperCase();
    setVal(newVal);
  };
  const handleDownClick = () => {
    setVal("you have clicked to lower-case");
    let newVal = val.toLowerCase();
    setVal(newVal);
  };
  const handleExtraChange = () => {
    let currentVal = val;
    let newVal = currentVal.replace(/ +/g, " ");
    newVal = newVal.trim();
    setVal(newVal);
  };

  const handleChange = (e) => {
    const data = e.target.value.split(" ");
    console.log(data);
    if (data.length <= 1000) {
      setVal(e.target.value);
      setWord(data.length);
      //for space initially dont count it as word
      if (e.target.value === "") {
        setWord(0);
      }
    } else {
      alert("Reached maximum limit");
    }
  };
  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="box">
        <textarea
          className="text-area"
          placeholder="Enter your text here"
          value={val}
          onChange={(e) => handleChange(e)}
        />
        <div className="button">
          <button className="btn-btn-primary" onClick={handleUpClick}>
            Uppercase
          </button>
          <button className="btn-btn-primary" onClick={handleDownClick}>
            Lowercase
          </button>
          <button className="btn-btn-primary-1" onClick={handleExtraChange}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="para">
        <p>Letter Count: {val.length}</p>
        <p>Word Count: {word}</p>
        <p>Preview : {val}</p>
      </div>
    </div>
  );
}
