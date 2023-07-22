import {BsTwitter} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import img2 from "../../../Images/footer img2.png"
import img from "../../../Images/Group 98.png"
const Footerbar = ()=>{
    return (
        <section className=" w-100 footer-bar d-flex flex-column  align-items-center justify-content-center pt-5 mt-5">
{/* <div className="d-flex justify-content-center w-100"> */}
<div className="img-position w-100"><img className="w-100" src={img} alt="" />
</div> 
{/* <div className="img-position-two"><img src={img2}alt="" />
</div>  */}
{/* </div> */}
<div className="d-flex  
justify-content-around container footer-one w-100 ">
<div>
    <h3 className="pt-5">BAssured</h3>
    <p>we provide you and your family assurance</p>
    </div>
<div>
    <h4>About</h4>
    <ul>
        <li>Company</li>
        <li>Contact Us</li>
        <li>Blog</li>
    </ul>
</div>
<div>
<h4>Help</h4>
    <ul>
        <li>Help Center</li>
        <li>support Team</li>
        <li>Community</li>
        <li>Security FAQs</li>
    </ul>
</div>
<div>
<h4>Legal</h4>
    <ul>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
    </ul>
</div>
<div className="d-flex gap-3 pt-5">
    <BsTwitter/>
    <BsFacebook/>
    <BsLinkedin/>
    <AiFillInstagram/>
</div>
</div>
<p className="pt-5">2022 Bassured Insurance agency</p>
        </section>
    )
}
export default Footerbar