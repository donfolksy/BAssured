import style from "./Modal.module.css";
import img from "../../../Images/Ellipse 64.png";

const ModalTwo = ({ closeModalTwo }) => {
  return (
    <section className={style.modalTwoBody}>
      <div className={`${style.ModalTwo}`}>
        <div className="d-flex justify-content-end">
          <button onClick={() => closeModalTwo(false)}>X</button>
        </div>
        <div className={style.title}>
          <h6>Basic Data</h6>
          <p>Change your avatar</p>
        </div>
        <div className={"${modal} d-flex gap-4 pb-3"}>
          <div className={style.modalTwoImg}>
            <img src={img} alt="" />
          </div>
          <p className={style.ModalTwoP}>Tap to change</p>
        </div>
        <div>
          <p>Name</p>
          <div className={`${style.profile} `}>
            <p>Christina</p>
          </div>
        </div>
        <div>
          <p>Last Name</p>
          <div className={style.profile}>
            <p>Dairo</p>
          </div>
        </div>
        <div>
          <p>Email Address</p>
          <div className={style.profile}>
            <p>Christainabrown@gmail.com</p>
          </div>
        </div>
        <div>
          <p>Phone Number</p>
          <div className={style.profile}>
            <p>+23432548565</p>
          </div>
        </div>
      </div>
      {<button className=" w-100 mt-3">Update Profile</button>}
    </section>
  );
};

export default ModalTwo;
