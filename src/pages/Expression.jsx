import { useState } from "react";


export default function MathExpression() {

  const [expression, setExpression] = useState('3 * (2 + 4) + 5 ** 2'); 
  const [result, setResult] = useState('');


  // handleCalculation function performs the calution of the given expression by using oval() method. It takes expression as parameter.

  const handleCalculation = () => {
    try {                                             //try catch block is used to perform calculation if the given expression is correct else error meesage is sent
      const calculatedExpression = eval(expression)
      setResult(calculatedExpression);
    } catch (error) {
      setResult('Enter correct expression')
    }
  }

  return (
    <>
    <h1>Question No. 2</h1>
    <div className="container"> 
    <h1>BODMAS Calculator</h1>
      <input className="input-field"
      type=""
      value={expression}
      onChange={(e) => setExpression(e.target.value)}
       />

       <button onClick={handleCalculation}>
      Calculate
       </button>
       <p> Result of the given expression is : {result}</p>
    </div>
    </>
  )
}

