import logo from "../../Images/Logo.png"
import img2 from "../../Images/dash-icon.png"
import img3 from "../../Images/account_circle.png"
import img4 from "../../Images/history.png"
import img5 from "../../Images/logout.png"
import { Link } from "react-router-dom";
const Aside = ()=>{
    return(
       <aside className="aside">
       <Link to="/" className="link-style"> <div className="aside-logo d-flex justify-content-center align-items-center pe-3 m-5  ">
<img src={logo} alt="" />
<p className="pt-3">BAssured</p>
        </div> </Link>
        <Link to="/dashboard" className="link-style">     
<div className="aside-dash d-flex justify-content-center gap-3 m-5  align-items-center">
<img src={img2} alt="" />
<p className="pt-3">Dashboard</p>
</div></Link>
<div className="d-flex flex-column  mt-5">
<Link to="/account-settings " className="list-style"><button className="border-0 ps-5 "><img src={img3} alt=""/> 
 Account</button> </Link>

<Link to="/history" className="list-style" ><button className="border-0 ps-5 mt-3 "><img src={img4} alt=""/>   History</button></Link> 
</div>

<div className="btn3">
<button className=" border-0 ps-5 "><img src={img5} alt=""/>  Logout</button>
</div>
       </aside>
    )
}
export default Aside