import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar">
            
            <NavLink to={'/'}> Anagram</NavLink>
            <NavLink to={'/question2'}> BODMAS Calc</NavLink>
            <NavLink to={'/question3'}> Item Order</NavLink>
            <NavLink to={'/question4'}> Number Converter</NavLink>
            <NavLink to={'/question5'}> Monetary Format</NavLink>
        </div>
    )
}

