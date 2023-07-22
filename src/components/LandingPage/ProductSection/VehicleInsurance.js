import Navbar from "../../Navbar/Navbar"
import ProductHero from "./ProductHero"
import ProductForm from "./ProductForm"
import Footerbar from "../Sections/Footerbar"
import vehicle from "../../../Images/vehicle.png"

const VehicleInsurance =()=>{

    const header = "vehicle Insurance"
    const text = "For many people, a car is one of the biggest assets they own. It provides comfort or luxury and the convenience of getting you from point A to B. It holds a resale value and may serve as a source of primary or secondary income or in other cases, It may serve the purpose of a collateral depedning on the circumstances. Vehicle insurance is designed to protect you against financial losses if you’re involved in an accident or the vehicle is damaged in some way."

return (
    <>
    <Navbar/>
    <ProductHero  header={header} text={text} picture={vehicle} />
    <ProductForm/>
    <Footerbar/>
    </>
)

    
}
export default VehicleInsurance