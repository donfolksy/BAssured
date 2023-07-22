import Navbar from "../../Navbar/Navbar"
import ProductHero from "./ProductHero"
import ProductForm from "./ProductForm"
import Footerbar from "../Sections/Footerbar"
import plane from "../../../Images/plane.png"
const TravelInsurance = ()=>{
    const header = "Travel Insurance"
    const text = "Travel insurance is a type of insurance designed to cover the costs and losses associated with unexpected events incurred while traveling."
    return(
        <>
          <Navbar/>
    <ProductHero  header={header} text={text} picture={plane} />
    <ProductForm/>
    <Footerbar/> 
        </>
    )
}
export default TravelInsurance 