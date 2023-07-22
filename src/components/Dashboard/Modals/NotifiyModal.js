import style from "./Modal.module.css"
import img from "../../../Images/click.png"

const ModalThree = ({closeModalThree})=>{
    return(
       <section className={style.modalThreeBody}>
<div className={style.modalThree}>
<div className="d-flex justify-content-end">
    <button onClick={() => closeModalThree(false)}>X</button>
</div>
<h4>Notification Settings</h4>
<p>Manage the kind of messages you get from BAssured</p>
</div>
<div className={style.modalThreeImg}>
<img src={img} alt="" />
<p>Disable product update notification</p>
</div>
<button className="w-100 mt-5 mb-2">Update Settings</button>
       </section>
    )
}
export default ModalThree