const ProductForm = ()=>{

    return(
        <div className="d-flex justify-content-around align-items-center vh-100 pt-4   ">
            <div className="  Row form-block ">
        <h4 className="pb-2">Fill Property Details</h4>
        <div className="pb-3">
         <p className="mb-1">Full Name</p>
        <input type="text" />
        </div>
        <div className="pb-3">
         <p className="mb-1">Type of Property</p>
        <input type="text" />
        </div >
        <div className="pb-3" >
         <p className="mb-1">Cost of Property (NGN)</p>
        <input type="text" />
        </div>
        <div className="pb-3">
         <p className="mb-1">Select Insurance Solution</p>
        <input type="text" />
        </div>
        <div className="pb-3">
         <p className="mb-1">Upload Property Documents</p>
        <input type="text" placeholder="Upload your File" className="custom-input "/>
        </div>
        <div className="pb-3">
         <p className="mb-1">Upload Property picture</p>
        <input type="file" placeholder=" Upload your Picture" className="custom-input" />
        </div>
        <button>Submit</button>
        </div>
        </div>
    )
}
export default ProductForm