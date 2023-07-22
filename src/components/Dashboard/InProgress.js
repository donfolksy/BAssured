import Aside from "./Aside";
import AsideNav from "./AsideNav";
import img from "../../Images/reload.png";
import img2 from "../../Images/arrow up.png";
import img3 from "../../Images/house.png";
import img4 from "../../Images/arrow down.png"
const InProgress = () => {
  return (
    <div className="">
      <div className="">
        <div>
          <Aside />{" "}
        </div>
        <div className="container">
        <div className="progressBody">
          <AsideNav />

          <div className="d-flex align-items-center progImg gap-3 ps-5 ">
              <h6>Items in Progresss</h6>
              <img src={img} alt="" />
            </div>

          <section className="progressSection d-flex flex-column justify-content-center   ps-5 pt-3 pb-3">
            <div className="d-flex progHead justify-content-between pe-2">
              <p>Home Insurance</p>
              <img src={img2} alt="" />
            </div>
            <div className="progHouse "><img src={img3} alt="" /></div>
            
            <div>
              <p>Type of Property</p>
              <button>Four Bedroom Duplex</button>
            </div>
            <div>
              <p>Cost of Property (NGN)</p>
              <button>N100,000,000.00</button>
            </div>
            <div>
              <p>Insurance Solution</p>
              <button>Fire Incident Solution</button>
              </div>
              <div>
                <p>Property Document</p>
                <button>IMG_4541_jpg</button>
              </div>
    
          </section>
          <div className="d-flex progFooter  justify-content-between align-items-center ps-5 pe-2 pt-2">
            <p>Vehicle Insurance</p>
            <img src={img4} alt="" />
          </div>
          <div className="d-flex progFooter  ps-5 pe-2 pt-2 justify-content-between align-items-center">
            <p>Device Insurance</p>
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default InProgress;
