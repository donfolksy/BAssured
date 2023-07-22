import bell from "../../Images/bell.png";
import circle from "../../Images/Group 13.png";
import arrow from "../../Images/arrow.png";
import peace from "../../Images/peace.png";
const AsideNav = () => {
  return (
    <section className="aside-nav">
      <div className="  container d-flex justify-content-around align-items-center  ">
        <h4>ACCOUNT OVERVIEW</h4>
        <div className=" d-flex justify-content-around align-items-center gap-2">
          <img src={bell} alt="" />
          <img className="circle" src={circle} alt="" />
          <p className="pt-3">Christiana Brown</p>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="container aside-sec pt-2">
        <h6>
          Hello Christiana <img src={peace} alt="" />
        </h6>
        <p>Welcome to your BAssured account. View your progress</p>
      </div>
    </section>
  );
};
export default AsideNav;
