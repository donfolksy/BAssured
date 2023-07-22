import Navbar from "./Navbar"
import img1 from "../../Images/About img 1.png"
import img2 from "../../Images/About img 2.png"
import img3 from "../../Images/About img 3.png"
import img4 from "../../Images/About img 4.png"
import img5 from "../../Images/About img 5.png"
import img6 from "../../Images/About img 6.png"
import img7 from "../../Images/About img 7.png"
import map from "../../Images/Map.png"
import Footerbar from "../LandingPage/Sections/Footerbar"
const AboutUs = ()=>{
    return(
        <>
        {/* <Navbar/> */}
        <section className="aboutus">
            <div className="aboutOneBody pb-5 ">
<div className="container">
    <div className="aboutOne d-md-flex justify-content-around align-items-center pt-1">
        <h4>What is Unique About BAssured ?</h4>
        <img src={img1} alt="" />
    </div>
    </div>
    </div>
    <div className="container">
<div className="aboutTwo d-flex flex-column justify-content-center align-items-center">
    <h4 className="pt-5 ">About BAssured</h4>
    <p className="pt-2 pb-5 ">Did you know that more than 80% of people say that an important factor when 
purchasing life insurance is that it is easy to understand and that 55% of families 
would feel the financial impact from a loss in just 6 months?* With mortgage 
payments, medical bills and monthly expenses the risk for families who don't 
have enough protection is real.
</p>
</div>
</div>
<div className="aboutThree d-flex flex-column align-items-center justify-content-center mt-5 w-100">
    <h4 className="pt-5 pb-5">Meet Our Team</h4>
<div className="row container ">
<div className="col">
    <img src={img2} alt="" />
    <p className="ps-3">Jane Cooper
Customer Service Rep</p>
</div>
<div className="col">
    <img src={img6} alt="" />
    <p className="ps-3">Wade Warren Loss Control Specialist
    </p>
</div>
<div className="col">
    <img src={img4} alt="" />
    <p className="ps-3">Esther Howard
Risk Consultant
    </p>
</div>

<div className="col">
    <img src={img3} alt="" />
    <p className="ps-3">Jenny Wilson
Sales Agent
    </p>
</div>

<div className="col">
    <img src={img7} alt="" />
    <p className="ps-3">Brooklyn Simmons
Claims Adjuster
    </p>
</div>
<div className="col">
    <img src={img5} alt="" />
    <p className="ps-3">Cameron Williamson
Administrative Officer
    </p>
</div>
</div>
</div>

<div className="aboutFour pt-5 d-flex flex-column justify-content-center align-items-center  ">
<h4>Contact Us</h4>
<div className="container">
<div className="d-lg-flex pt-5">
  <div className="abt-four">
    <div className="abt-four-one d-flex flex-column justify-content-center align-items-center">
    <h3 className="pt-3">Office</h3>
    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
    </div>
  </div>
  <div className="abt-four">
    <div className="abt-four-two d-flex flex-column justify-content-center align-items-center">
    <h3 className="pt-3">Call Center</h3>
    <p>(205)555-0100</p>
  </div>
  </div>
  <div className="abt-four">
    <div className="abt-four-three d-flex flex-column justify-content-center align-items-center">
    <h3 className="pt-3">Email</h3>
    <p>hello@xxxxxx.com</p>
  </div>
  </div>
</div>
<div className="d-flex justify-content-center align-items-center">
<img className=" pt-5 pb-5"src={map} alt="" />
</div>
</div>
</div>
        </section>
        <Footerbar/>
        </>
    )
}
export default AboutUs