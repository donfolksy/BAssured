import Navbar from "../../Navbar/Navbar";
import ProductHero from "./ProductHero";
import ProductForm from "./ProductForm";
import Footerbar from "../Sections/Footerbar";
import house from "../../../Images/house.png";

const HomeInsurance = () => {
  const text =
    "Get access to home insurance that provides financial protection inthe event of something happening to your property or belonging.Provides indemnity (compensation) for loss or damage to the building, landlord fittings fixtures arising from Fire and Special perils such as Lightning Explosion, Flood, Storm, Tornado, Earthquake, Aircraft, Impact, Bursting and Overflowing of water tanks, pipes and apparatus.";

  const header = "Home Insurance";
  return (
    <>
      <Navbar />
      <ProductHero text={text} header={header} picture={house} />
      <ProductForm />
      <Footerbar />
    </>
  );
};
export default HomeInsurance;
