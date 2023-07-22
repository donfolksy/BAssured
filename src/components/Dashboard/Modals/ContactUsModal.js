import style from "./Modal.module.css";
const ModalSeven = ({closeModalSeven}) => {
  return (
    <section className={style.modalSevenBody}>
      <div className={style.ModalSeven}>
        <div className="d-flex justify-content-end ">
          <button onClick={()=>closeModalSeven(false)}>X</button>
        </div>

        <h4>Contact Us</h4>
        <p>Visit our office</p>
        <div className={style.modalSevenBtn}>
          <button>4517 Washington Ave. Manchester, Kentucky 395624</button>

          <p>Phone Number</p>
          <button>+2348313457858</button>

          <p>Email Address</p>
          <button>hello@xxxxxx.com</button>
          <button>Twitter page</button>
          <button>Instagram page</button>
          <button>Facebook page</button>
          <button>Linkedin page</button>
        </div>
      </div>
    </section>
  );
};
export default ModalSeven;
