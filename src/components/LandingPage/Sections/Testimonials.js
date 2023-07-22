import testimony1 from "../../../Images/testimony1.png"
import testimony2 from "../../../Images/testimony2.png"
import testimony3 from "../../../Images/testimony3.png"
const Testimonials = ()=>{
    return(
        <section className="testimonial w-100 d-flex flex-column  justify-content-center align-items-center pb-5 ">
<h4 className="pt-5">What Our Clients Say About Us</h4>
<h6 className="pt-2">Here are some testimonies from our happy clients who 
are saticfied with our services.</h6>

<div className="container">
<div className="d-sm-flex gap-5 col-lg-4 w-100">
    
    <div className="testimonial-border p-3 d-flex flex-column justify-content-center align-items-center">
        <img src={testimony1}></img>
        <p>I was able to resolve any difficulties
very effective with work and 
recommend them to  
anyone.</p>
    </div>

    <div className="testimonial-border p-3 d-flex flex-column justify-content-center align-items-center" >
    <img src={testimony2}></img>
        <p>Finally! I found an insurance company that is 
prompt, knowlegdeable, efficient and friendly,
always finding us the best deal.</p>
    </div>
    <div className="testimonial-border p-3 d-flex flex-column justify-content-center align-items-center">
    <img src={testimony3}></img>
        <p>Anytime i have a question or concern 
 with my insurance policies they 
work on my concern right 
away </p>
    </div>
    </div>
</div>
        </section>
    )
}
export default Testimonials