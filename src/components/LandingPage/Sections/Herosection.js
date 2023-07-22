import woman from "../../../Images/woman.png"
const Herosection = ()=>{
    return(
      <section className=" hero-section  p-5   ">
        <div className="container">
        <div className="w-100 d-md-flex justify-content-around align-items-center">
        <div className=" ">
         <h5>Insurance that Gives Assurance.</h5>
         <p>BAssured helps over 1000 clients purchase the best deal
at a very affordable amount.</p>
         <button className="mt-5">Get Started</button>   
        </div>

        <div className=" ">
            <img className="img-fluid  p-5" src={woman}></img>
        </div>
        </div>
        </div>
      </section>  
    )
}
export default Herosection