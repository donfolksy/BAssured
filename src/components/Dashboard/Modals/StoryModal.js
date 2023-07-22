import style from "./Modal.module.css"
const ModalSix = ({closeModalSix})=>{
    return(
        <section className={style.modalSixBody}>
            <div className={style.modalSix}>
                <div className="d-flex justify-content-end">
                   <button onClick={()=>closeModalSix(false)}>X</button> 
                </div>
                <h4>Share Your Stories</h4>
                <p>Share your stories on how BAssured has helped you. Once your story is approved you get a unique link you can share with your family and friends.</p>
                <div className={style.modalSixInput}>
                <input type="text" placeholder="Tell your story"/>
                </div>
<button className="w-100 mt-4 mb-2">Share your story</button>
            </div>
        </section>
    )
}
export default ModalSix