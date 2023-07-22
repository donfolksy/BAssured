import Navbar from "../Navbar/Navbar"
const Signin = ()=>{
    return(
        <>
        <Navbar/>
       <div className="signin d-flex justify-content-center align-items-center flex-column">

        <h3 className="pt-5 pb-3">Hello! Sign In</h3>
        <div className=" signin-body ">
            <div className="d-flex flex-column justify-content-center align-items-center p-5 gap-4">
           
            <input type="text" placeholder="Phone Number/ Email "className="ps-5" />
            <input type="text" placeholder="Password "className="ps-5" />
         
            <button className="mt-4 ">Sign In</button>
            <p>Forgot your password? Click here.</p>
            </div>
        </div>
       </div>
       </>
    )
}
export default Signin