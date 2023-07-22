const ProductHero =({picture, header, text})=>{
    return(
        <div className=" product-hero  ">
        <div className="container d-md-flex justify-content-around gap-5 p-5 ">
<div>
    <img src={picture} alt="" />
</div>
<div className="">
    <h4 className="">{header}</h4>
    <p className="pt-5 ">{text}</p>
</div>
        </div>
        </div>
    )
}
export default ProductHero