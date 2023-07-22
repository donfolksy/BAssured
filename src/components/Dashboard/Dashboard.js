import Aside from "./Aside";
import AsideNav from "./AsideNav";
import img1 from "../../Images/vec1.png";
import img2 from "../../Images/vec2.png";
import img3 from "../../Images/vec3.png";
import img4 from "../../Images/vec4.png";
const Dashboard = () => {
  return (
    <div className="">
      <div className="">
        <div>
          <Aside />
        </div>
        <div className="body-nav p-5 ">
          <div>
            <AsideNav />
          </div>
          <section className="dashboard">
            <div className="dash-one d-flex pt-3 flex-column justify-content-center align-items-center">
              <h6 className="">Wallet Balance </h6>
              <p>300,000.00</p>
            </div>
            <div className="d-flex justify-content-center  gap-5 dash-sec ">
              <div className="dash  d-flex flex-column justify-content-center align-items-center mt-4 ">
                <img src={img1} alt="" />
                <p>Add Items</p>
              </div>
              <div className="dash d-flex flex-column justify-content-center align-items-center mt-4 ">
                <img src={img2} alt="" />
                <p>In Progress</p>
              </div>
            </div>
            <div className=" d-flex gap-5 justify-content-center dash-sec">
              <div className="dash d-flex flex-column justify-content-center align-items-center  mt-4">
                <img src={img3} alt="" />
                <p>Approved</p>
              </div>
              <div className="dash d-flex flex-column justify-content-center align-items-center mt-4 ">
                <img src={img4} alt="" />
                <p>Cancel</p>
              </div>
            </div>
            <div className="transaction-history pt-3 pb-2">
              <h6 className="">Transaction History</h6>
            </div>
            <div>
              <div className="transaction d-flex justify-content-center  gap-5">
                <p>Vehicle</p>
                <p>100,000.00</p>
                <div className=" ">
                  {" "}
                  <p>Approved</p>
                  <span className="">2 days Ago</span>
                </div>
              </div>
              <div className="transaction-one mt-2 d-flex justify-content-center  gap-5">
                <p>Vehicle</p>
                <p>100,000.00</p>
                <div className=" ">
                  {" "}
                  <p>Approved</p>
                  <span className="">2 days Ago</span>
                </div>
              </div>
              <div className="transaction-two mt-2 d-flex justify-content-center  gap-5">
                <p>Vehicle</p>
                <p>100,000.00</p>
                <div className=" ">
                  {" "}
                  <p>Approved</p>
                  <span className="">2 days Ago</span>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-2 ">
                <button className="p-2">See More</button>
              </div>
              <div></div>
              <div></div>
            </div>
            <div>
            <h4>Report</h4>
         <div className="bar-chart">
         <div className="d-flex">
<div className="bar-chart-one">

</div>

         </div>
         </div>
         

            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
