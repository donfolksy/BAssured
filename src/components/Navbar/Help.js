import Navbar from "./Navbar"
import img from "../../Images/help img.png"
import Accordion from "./Accordion"
import Footerbar from "../LandingPage/Sections/Footerbar"
const Help = ()=>{
    return(
        <>
{/* <Navbar/> */}
        <section className="helpPage ">
       
            <div className=" help-one ">
            <div className="container d-lg-flex justify-content-around align-items-center gap-5">    
            <h4>How can we help?</h4>
              <img src={img} alt="" />  
            </div>
            </div>
            <div className="help-input d-flex justify-content-center align-items-center pt-5 pb-5">
<input className="input-design ps-5 " type="text" placeholder="Type your question" />
            </div>
            <div className="container help-two">
                <h3>What is the best insurance solution for a fire incident?</h3>
                <p className="d-flex ">Home Insurance typically helps cover your home and belongings. Most policies include coverages that may help pay to repair or replace your home and its contents if they are damaged by fire. Your house is probably the most valuable asset you have, and you have homeowners insurance to help protect you and your house in case something unfortunate, such as a fire, should happen. From electrical issues to candle mishaps, the National Fire Protection Association reports an average of 346,800 residential fires each year. </p>
     </div>
     <div className="container help-three">
        <h3>Contact </h3>
        <p>Support options are based on your product plan</p>
        <div className=" p-3 help-div-1">
            <h4 className="ps-5">Chat with us</h4>
            <div className="help-div-2 ms-5 me-5 d-flex justify-content-center align-items-center  ">
                <p className="p-3">Hi, Iam your Bassured guide. I’m a virtual support agent here to get you the answers you need. How can i help?</p>
            </div>
<input className="ms-5 mt-5 ps-3 input-design " type="text" placeholder="Type a message" />
        </div>
     </div>

     <div className="help-four container pb-5 pt-5">
<h4>Security FAQs</h4>
<Accordion/>
     </div>
     <Footerbar/>
        </section>
        </>
    )
}
export default Help