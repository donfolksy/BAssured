import Aside from "./Aside";
import img from "../../Images/Ellipse 64.png";
import ModalOne from "./Modals/ModalOne";
import ModalTwo from "./Modals/ModalTwo";
import { useState } from "react";
const AccountSettings = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="">
      <div className="">
        <div>
          <Aside />
        </div>
        <section className=" settings">
          <div className="pt-5 ps-4">
            <h5 className="">My Account </h5>
            <p className="">Christiana Brown Dairo</p>
          </div>
          <div
            className=" d-flex flex-column justify-content-center align-items-center
"
          >
            <div className="d-flex flex-column justify-content-center align-items-center pt-3 ">
              <img src={img} alt="" />
              <p>Christiana Brown Dairo</p>
              <div className="acc-sett d-flex flex-column justify-content-center align-items-center pt-1 ps-4 pe-4">
                <h4>BAssured</h4>
                <p>3845214562884</p>
              </div>
            </div>
            <div className="account-position d-flex flex-column gap-2 pt-3">
              <button
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                My Account
              </button>
              <button>My Story</button>
              <button>Contact Us</button>
              <button>Log Out</button>
            </div>
          </div>
          {openModal && <ModalOne closeModal={setOpenModal}/>}
        </section>
      </div>
    </div>
  );
};
export default AccountSettings;
