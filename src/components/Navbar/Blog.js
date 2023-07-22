import Navbar from "./Navbar"
import img1 from "../../Images/Blog img 1.png"
import img2 from "../../Images/Blog img 2.png"
import img3 from "../../Images/Blog img 3.png"
import img4 from "../../Images/Blog img 4.png"
import img5 from "../../Images/Blog img 5.png"
import img6 from "../../Images/Blog img 6.png"
import {BsTwitter} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import Footerbar from "../LandingPage/Sections/Footerbar"
const Blog = ()=>{
    return(
        <>
        {/* <Navbar/> */}
        <section className=" d-flex flex-column justify-content-center align-items-center blogPage">
            <h3 className="pt-5">BAssured Blog</h3>
{/* <div className="blog-one container pt-4 d-lg-flex gap-5">
<img src={img1} alt="" />
<div className="text-align-center  d-flex flex-column ">
    <h4 className="">How Much Does the Average Person Pay for Insurance?</h4>
    <p className="">One bad car wreck. One raging kitchen fire. One major surgery. If you’re not careful, just one 
thing can derail years of financial progress.
That’s where insurance comes into play.</p>
</div>
</div> */}

<div className="blog-one container pt-4 d-lg-flex flex-column flex-lg-row justify-content-center  gap-5">
  <img src={img1} alt="" />
  <div className="d-flex flex-column">
    <h4 className="">How Much Does the Average Person Pay for Insurance?</h4>
    
    <p className="">
      One bad car wreck. One raging kitchen fire. One major surgery. If you’re not careful, just one thing can derail years of financial progress.
      That’s where insurance comes into play.
    </p>
  </div>
</div>


<div className=" pt-4 container blog-two"><p className=" ">Insurance is your defense. It protects you from anything life might throw your way.No matter who you are, there are certain types of insurance you absolutely need to have in place right now—three of which are auto insurance, homeowner’s (or renter’s) insurance and health insurance. And if you’re married, have kids or have someone in your life who depends on your income, you can add term life insurance to the list as well. But it’s no secret that insurance can get pretty expensive. Just how expensive? Let’s break down the costs behind each of these four types of insurance so you can figure out how much room you need in your budget to protect yourself and your family. That’s where insurance comes into play. Every good financial plan has an offense and a defense. </p></div>

<div className="blog-three d-flex flex-column align-items-center justify-content-center mt-4 w-100">
   
<div className="row container ">
<div className="col">
    <img src={img2} alt="" />
    <p className="ps-3">Small Business Loans for Daily Expenses</p>
</div>
<div className="col">
    <img src={img3} alt="" />
    <p className="ps-3">Are you Covered ?
    </p>
</div>
<div className="col">
    <img src={img1} alt="" />
    <p className="ps-3">Prosper in this Volatile Market Funding
    </p>
</div>

<div className="col">
    <img src={img4} alt="" />
    <p className="ps-3">Best Nigerian Market Investment
    </p>
</div>

<div className="col">
    <img src={img5} alt="" />
    <p className="ps-3">What You, Your Family and Your Life Need
    </p>
</div>
<div className="col">
    <img src={img6} alt="" />
    <p className="ps-3">Leran About Insurance for your Better Life 
    </p>
</div>
</div>
</div>
<div className="blog-btn d-flex justify-content-center pt-3 ">
<button>More</button>
</div>
{/* <div className="container"> */}
<div className="blog-four pt-5 pb-5 d-md-flex gap-5 ">
   
        <div className="blog-contact pt-4 ps-5 pe-5 pb-5">
    <h5>Follow Us on</h5>
    <div className="gap-4 pt-2 d-flex">
    <BsTwitter/>
    <BsFacebook/>
    <BsLinkedin/>
    <AiFillInstagram/>
    </div>
    </div>
        <div className="blog-contact pt-4 ps-5 pe-5 pb-5">
            <h5>Call us on </h5>
            <p className="pt-2">(205) 555-0100</p>
        </div>
    </div>
{/* </div> */}
<Footerbar/>
        </section>
       
        </>
    )
}
export default Blog