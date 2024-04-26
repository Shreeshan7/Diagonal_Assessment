import { useState } from "react";

export default function MonetaryFormat() {
  const [monetaryInput, setMonetaryInput] = useState("");
  const [unit, setUnit] = useState("international");

  const internationalUnit = (num) => {        //internationalUnit funciton uses Intl.Numberformat constructor to convert monetary value to US unit
    return new Intl.NumberFormat("en-US", {
      maximimFractionDigits: 2,                 // only two digits after the decimal is shown.
      minimumFractionDigits: 2,
      style: "currency",
      currency: "USD",
    }).format(num);
  };

  const nepaliUnit = (num) => {                    
    return new Intl.NumberFormat("en-IN", {
      maximimFractionDigits: 2,
      minimumFractionDigits: 2,
      style: "currency",
      currency: "NPR",
    }).format(num);
  };

  const formatValue =               //Determines the formatted monetary value based on the selected unit
    unit === "international"
      ? internationalUnit(monetaryInput)
      : nepaliUnit(monetaryInput);

  return (
    <>
    <h1>Question No. 5</h1>
    <div className="container">
        <h1>Monetary Unit Converter</h1>
      <input
        type=""
        className="input-field"
        value={monetaryInput}
        placeholder="Enter Numbers"
        onChange={(e) => setMonetaryInput(e.target.value)}
      />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="international">International</option>
        <option value="nepali">Nepali</option>
      </select>
      <p>Converted Value :  {formatValue}</p>
    </div>
    </>
  );
}
