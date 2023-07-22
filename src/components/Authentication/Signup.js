import Navbar from "../Navbar/Navbar"
const Signup = ()=>{
    return(
        <>
        <Navbar/>
       <div className="signup d-flex justify-content-center align-items-center flex-column">

        <h3 className="pt-5 pb-3">Create Your Account</h3>
        <div className=" signup-body ">
            <div className="d-flex flex-column justify-content-center align-items-center p-5 gap-4">
            <input type="text" placeholder="Full Name"className="ps-5" />
            <input type="text" placeholder="Phone Number/ Email "className="ps-5" />
            <input type="text" placeholder="Password "className="ps-5" />
            <input type="text" placeholder="Confirm Password "className="ps-5" />
            <button className="mt-4 ">Get Started</button>
            <p>By clicking this button, you agree to our terms of services and disclaimer</p>
            </div>
        </div>
       </div>
       </>
    )
}
export default Signup