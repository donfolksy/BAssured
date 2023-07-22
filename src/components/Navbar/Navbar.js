import "../Navbar/Navbar.css"
import logo from "../../Images/Logo.png"
import { Link } from "react-router-dom"
const Navbar = ()=>{
  return(
   <div className="nav-parent">
    <nav className="d-flex">
    <Link to="/"> <div className="logo-wrap d-flex"> 
    <img src={logo}></img>
    <h4 className="" >BAssured</h4>
    </div>
    </Link>

    <ul className="menubar  d-flex justify-content-between">
  
      <li><Link to="/">Home</Link></li>
      <li><Link to="/aboutus">About Us</Link></li>
      <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/home-insurance">Home Insurance</Link></li>
                 <li><Link class="dropdown-item" to="/vehicle-insurance">Vehicle Insurance</Link></li> 
                <li><Link class="dropdown-item" to="/life-insurance"href="#">Life Insurance</Link></li>
                <li><Link class="dropdown-item" to="/device-insurance">Device Insurance</Link></li>
                <li><Link class="dropdown-item" to="/travel-insurance">Travel Insurance</Link></li>
              </ul>
              
            </li>
            <li> <Link to="/blog">Blog</Link></li>
    </ul>
    <div className="nav-btn d-flex ">
    <Link to="/signin"><button>Sign in</button></Link>
   <Link to="/signup"> <button>Get Started</button></Link>
    </div>
</nav>
   </div>
  )

}
export default Navbar