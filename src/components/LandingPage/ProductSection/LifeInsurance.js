import Navbar from "../../Navbar/Navbar"
import ProductForm from "./ProductForm"
import ProductHero from "./ProductHero"
import Footerbar from "../Sections/Footerbar"
import flower from "../../../Images/flower.png"

const LifeInsurance =()=>{

    const header =  "Life Insurance"

    const text = "Life insurance pays your family and loved ones an agreed amount which is called your “life benefit” if you pass away even if you live to 100. Your beneficiaries can use the money for whatever purpose they choose. Often this includes paying everyday bills, paying a mortgage or putting a child through college. Having the safety net of life insurance can ensure that your family can stay in their home and pay for the things that you planned for"
    return(
        <>
         <Navbar/>
    <ProductHero  header={header} text={text} picture={flower} />
    <ProductForm/>
    <Footerbar/>
        </>
    )
}

export default LifeInsurance