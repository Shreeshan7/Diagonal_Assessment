import { Route, Routes } from "react-router-dom"
import MathExpression from "./pages/Expression"
import MonetaryFormat from "./pages/MonetaryFormat"
import NumToWord from "./pages/NumToWord"
import OrderItems from "./pages/OrderItems"
import Anagram from "./pages/Anagram"

import NavBar from "./components/NavBar"


function App() {
  
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          
          <Route path="/" element= {<Anagram />} />
          <Route path="/question2" element= {<MathExpression />} />
          <Route path="/question3" element= {<OrderItems />} />
          <Route path="/question4" element= {<NumToWord />} />
          <Route path="/question5" element= {<MonetaryFormat />} />
        </Routes>
      </div>
    </>
  )
}

export default App
