import React from "react";
import style from "./Modal.module.css";
import img1 from "../../../Images/user.png";
import img2 from "../../../Images/bell (2).png";
import img3 from "../../../Images/smile.png";
import img4 from "../../../Images/lock.png";
import img5 from "../../../Images/story.png";
import { useState } from "react";
import ModalTwo from "./ProfileModal";
import ModalThree from "./NotifiyModal";
import ModalFour from "./NextofKinModal";
import ModalFive from "./PswModal";

const AccountModal = ({ closeModal }) => {
  const [openModalTwo, setModalTwo] = useState(false);
  const [openModalThree, setModalThree] = useState(false);
  const [openModalFour, setModalFour] = useState(false);
  const [openModalFive, setModalFive] = useState(false);
  return (
    <div>
      <div className={style.modalOneCon}>
        <div className={style.modalOneBg}></div>
        <div className={style.modalOne}>
          <div className="d-flex justify-content-end">
            <button onClick={() => closeModal(false)}>X</button>
          </div>

          <div className={`${style.modalTittle}`}>
            <h5>Account settings</h5>
          </div>
          <div className={`${style.modalBody}`}>
            <div className={style.modalInput}>
              <div className={style.modalOneImg}>
                <img className="" src={img1} alt="" />
              </div>
              <p
                onClick={() => {
                  setModalTwo(true);
                }}
              >
                Profile settings
              </p>
            </div>

            <div className={style.modalInput}>
              <div className={style.modalOneImg}>
                <img className="" src={img2} alt="" />
              </div>
              <p
                onClick={() => {
                  setModalThree(true);
                }}
              >
                Notification Settings
              </p>
            </div>

            <div className={style.modalInput}>
              <div className={style.modalOneImg}>
                <img className="" src={img3} alt="" />
              </div>
              <p onClick={()=>{
                setModalFour(true)
              }}>Next of Kin Settings</p>
            </div>

            <div className={style.modalInput}>
              <div className={style.modalOneImg}>
                <img className="" src={img4} alt="" />
              </div>
              <p  onClick={()=>{
                setModalFive(true)
              }}>Password Settings</p>
            </div>

            <div className={style.modalInput}>
              <div className={style.modalOneImg}>
                <img className="" src={img5} alt="" />
              </div>
              <p>My Story</p>
            </div>

            <button className="w-100" onClick={() => closeModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      {openModalTwo && <ModalTwo closeModalTwo={setModalTwo} />}
      {openModalThree && <ModalThree closeModalThree={setModalThree} />}
      {openModalFour &&<ModalFour closeModalFour={setModalFour}/> }
    {openModalFive && <ModalFive closeModalFive={setModalFive}/>}
    </div>
  );
};

export default AccountModal;
