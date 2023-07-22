import  style from "./Modal.module.css"

const ModalFive = ({closeModalFive})=>{
    return(
        <section className={style.modalFiveBody}>
            <div className={style.modalFive}>
<div className="d-flex justify-content-end">
<button onClick={() => closeModalFive(false)}>X</button>
</div>
<h4>Change Password</h4>
<p>Change your BAssured password using the form below</p>
<div className={style.modalFiveInput}>
<div className="d-flex flex-column">
    <p>Old password</p>
    <input type="text"/>
</div>
<div className="d-flex flex-column">
    <p>New password</p>
    <input type="text"/>
</div>
<div className="d-flex flex-column">
    <p>Retype new password</p>
    <input type="text" placeholder="ayojohn@gmail.com"/>
</div>
</div>
            </div>
            <button className="w-100 mb-3 mt-3">Update Password</button>
        </section>
    )
}
export default ModalFive