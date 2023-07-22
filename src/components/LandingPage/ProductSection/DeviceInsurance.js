import Navbar from "../../Navbar/Navbar"
import ProductHero from "./ProductHero"
import ProductForm from "./ProductForm"
import Footerbar from "../Sections/Footerbar"
import laptop from "../../../Images/laptop.png"
const DeviceInsurance = ()=>{

    const header = "Device Insurance"
    const text = "We help you replace your device if it’s ever lost, stolen, damage or defective after the warranty expires. This insurance covers devices bought and used within the Federal Republic of Nigeria and can be extended to cover damage occasioned to the device anywhere in the world up to a maximum of 90 days in total, 30 days anyone time, in any single 12 months period; as long as device is brought in for repair within the Federal Republic of Nigeria."
    return (
        <>
        <Navbar/>
    <ProductHero  header={header} text={text} picture={laptop} />
    <ProductForm/>
    <Footerbar/> 
        
        </>
    )
}

export default DeviceInsurance