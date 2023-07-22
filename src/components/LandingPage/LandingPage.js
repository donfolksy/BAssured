import React from "react"
import Navbar from "../Navbar/Navbar"
import Herosection from "./Sections/Herosection"
import Features from "./Sections/Features"
import Products from "./Sections/Products"
import Testimonials from "./Sections/Testimonials"
import Footerbar from "./Sections/Footerbar"

const LandingPage = ()=>{
    return(
<>
<Navbar/>
<Herosection/>
<Features/>
<Products/>
<Testimonials/>
<Footerbar/>
</>

    )
}
export default LandingPage