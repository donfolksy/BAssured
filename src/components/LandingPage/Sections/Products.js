import HomeInsurance from "../ProductSection/HomeInsurance";
import { Link } from "react-router-dom";
import VehicleInsurance from "../ProductSection/VehicleInsurance";
import LifeInsurance from "../ProductSection/LifeInsurance";

import ProdOne from "../ProductSection/ProdOne";
import vehicle from "../../../Images/vehicle.png";
import flower from "../../../Images/flower.png";
import plane from "../../../Images/plane.png";
import laptop from "../../../Images/laptop.png";
import house from "../../../Images/house.png";

import { useState } from "react";
//import { Link } from "react-router-dom";


const Products = () => {
  const [insurance, setInsurance] = useState("Home Insurance");

  const prod = [
    "Home Insurance",
    "Vehicle Insurance",
    "Life Insurance",
    "Device Insurance",
    "Travel Insurance",
  ];

  const houseText = "Get access to home insurance that provides financial protection in the event of something  happening to your property or belonging."

  const vehicleText = "Vehicle insurance is designed to protect you against financial losses if you’re involved in an accident or the vehicle is damaged in some way."

  const flowerText = "Life insurance pays your family and loved ones an agreed amount which is called your “life benefit” if you pass away even if you live to 100."

  const laptopText = "We help you replace your device if it’s ever lost, stolen, damage or defective after the warranty expires."

  const planeText = "Travel insurance is a policy that covers the financial risks associated with traveling. It provides indemnity against minor risks such as loss of luggage, a delayed flight, and even major risks like medical emergencies and trip cancellation."

  const btnText = "VIEW PRODUCT"

  const handleBtn = (e, pro) => {
    e.preventDefault();
    setInsurance(pro);
  };
  return (
    
    <section className="product pb-5  w-100">
      <div className="container">
        <h4 className="d-flex justify-content-center pt-4 pb-3">Our Product</h4>

        <div className="product-btn d-flex justify-content-center w-100 pb-5">
          {prod?.map((pro, i) => (
            <button
              className={`btn-1 ${
                insurance === pro ? "active-button" : "not-active-button"
              }`}
              key={i}
              onClick={(e) => handleBtn(e, pro)}
            >
              {pro}
            </button>
          ))}
        </div>
        {/* <div className="container"> */}
        <div className=" prodOne w-100  d-md-flex justify-content-around align-items-center">
          {insurance === "Home Insurance" ? (
            <ProdOne
              flop={house}
              text={houseText}
              insBtn = 
              {<Link to="/home-insurance">{btnText}</Link>}
              
              
            />

          ) : insurance === "Vehicle Insurance" ? (
            <ProdOne
              flop={vehicle}
              text={vehicleText}
              insBtn=  {<Link to="/vehicle-insurance">{btnText}</Link>}
            />
          ) : insurance === "Life Insurance" ? (
            <ProdOne
              flop={flower}
              text= {flowerText}
              insBtn= {<Link to="/life-insurance">{btnText}</Link>}
            />
          ) : insurance === "Device Insurance" ? (
            <ProdOne
              flop={laptop}
              text={laptopText}
              insBtn={<Link to="/device-insurance">{btnText}</Link>}
            />
          ) : (
            <ProdOne
              flop={plane}
              text={planeText}
              insBtn={<Link to="/travel-insurance">{btnText}</Link>}
            />
          )}

          {/* <div className="">
            <img src={house}></img>
          </div>
          <div className="product-sec2">
            <p className="mb-5">
              Get access to home insurance that provides financial protection in
              the event of something happening to your property or belonging.
            </p>
            <button>VIEW PRODUCT</button>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Products;
