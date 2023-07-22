import man from "../../../Images/man.png"
import vase from "../../../Images/vase.png"
import ellipse1 from "../../../Images/Ellipse 45.png"
import ellipse2 from "../../../Images/Ellipse 43.png"
const Features = ()=>{
    return(
        <section className="features-parent row w-100 p-5">
        <div className="container">    
<div className=" features d-md-flex justify-content-around align-items-center p-5 ">
    
            <div> <img src={man}></img>
            <span className="ft-1"> <img src={ellipse2}></img></span>
            </div>
    <div>
                <h5>Insurance made easy</h5>
                <p>No matter the insurance solution you 
choose or desire, we can provide you 
the personalized service  
</p>
    </div>
</div>

            <div className="features d-md-flex justify-content-around align-items-center p-5">
            <div>
                <h5>There’s more to Insurance than policy price</h5>
                <p>Insurance is more affordable than you think,It is a form of risk management.</p>
            </div>
            <div className=""> <img src={vase}></img>
            <span className="ft-2"><img src={ellipse1}></img></span>
            </div>
            </div> 
            

            </div>
        </section>
    )
}
   
export default Features