import React from "react";
import numberToWords from "number-to-words";
import { useState } from "react";

const ConvertNumToWord = () => {
  const [number, setNumber] = useState("");
  const [word, setWord] = useState("");

  const handleConversion = () => {            //handleconversion function converts numbers to word by using number to words library
    const toWord = numberToWords.toWords(number);
    setWord(toWord);
  };

  return (
    <div className="container">
      <h1>Number to Word Conversion </h1>
      <input
        className="input-field"
        type="number"
        value={number}
        placeholder="Enter a Number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleConversion}> Convert </button>
      <p>Result : {word}</p>
    </div>
  );
};

export default ConvertNumToWord;
