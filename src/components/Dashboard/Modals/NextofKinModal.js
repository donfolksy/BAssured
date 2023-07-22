import style from "./Modal.module.css"
const ModalFour =({closeModalFour})=>{
    return(
        <section className={style.modalFourBody}>
            <div className={style.modalFour}>
                <div className="d-flex justify-content-end">
                <button onClick={() => closeModalFour(false)}>X</button>
                </div>
                <h4>Next of Kin</h4>
                <p>Your Next of Kin is the closest living reletive to you.
We will contact/reach this person if we are unable to make contact with you after a long period of time.</p>
<div className={style.modalFourInput}>
<div className="d-flex flex-column">
    <p>Next of kin</p>
    <input type="text" placeholder="Ayo John" />
</div>
<div className="d-flex flex-column">
    <p>What is the relationship </p>
    <input type="text" placeholder="sister" />
</div>
<div className="d-flex flex-column">
    <p>Email address of next of kin</p>
    <input type="email" placeholder="ayojohn@gmail.com" />
</div>
<div className="d-flex flex-column">
    <p>Phone number of next of kin</p>
    <input type="phone" placeholder="+2348812345525" />
</div>
</div>
<button className="mt-3 mb-5 w-100">Update Next of Kin</button>
            </div>
        </section>
    )
}
export default ModalFour