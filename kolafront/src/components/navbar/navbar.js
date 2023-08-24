import "./navbar.css"
import logo from "../images/logo.png"


import {Link} from "react-router-dom"

const Navbar = () => {

  return (
    <div className="navbar">
  <nav className="nav-properties"> 
 {/* <h1 className="nav-logo">kolaFit</h1>   */}
 <img src={logo} alt="Logo" />
< ul className="nav-menu">  
  <li className="navbar-item">Home</li> 
  <li className="navbar-item">About</li>
  <li className="navbar-item">Services</li>
  <li className="navbar-item">Contact</li>
</ul>

<button className="header-button" id="getstarted-button">Lets get started </button>


      </nav>
          
        </div>
 
  )
}

export default Navbar