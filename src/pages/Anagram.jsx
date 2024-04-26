import React from "react";
import "../styles/All.css";
import { useState } from "react";

export default function Anagram() {
  const [word1, setword1] = useState("");
  const [word2, setWord2] = useState("");
  const [isAnagram, setIsAnagram] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const anagramCheck = () => {
    //anagramCheck function determines if two input words are anagrams by comparing their sorted lowercase versions without non-alphanumeric characters.
    const str1 = word1
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");
    const str2 = word2
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");
    setIsAnagram(str1 === str2);
    setButtonClicked(true);
  };

  return (
    <>
      <h1>Question No 1</h1>

      <div className="container">
        <h1>Anagram Check</h1>
        <div>
          <input
            className="input-field"
            type="text"
            value={word1}
            onChange={(e) => setword1(e.target.value)}
            placeholder="Enter a word"
          />
          <input
            className="input-field"
            type="text"
            value={word2}
            onChange={(e) => setWord2(e.target.value)}
            placeholder="Enter enter second word"
          />
        </div>
        <button onClick={anagramCheck}>Check</button>

        {/* Displays result if check has been performed and at least one input word is provided */}

        {buttonClicked && (word1 || word2) && (
          <p className={`result ${isAnagram ? "anagram" : "not-anagram"}`}>
            {isAnagram
              ? "The two strings are anagrams."
              : "The two strings are not anagrams."}
          </p>
        )}
      </div>
    </>
  );
}
