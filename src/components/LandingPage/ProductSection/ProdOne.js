const ProdOne = ({flop,text, insBtn}) => {
  return (
    <>
    {/* <h1>{text}</h1> */}
      <div className="">
        <img src={flop}></img>
      </div>
      <div className="product-sec2">
        <p className="mb-5">
          {text}
        </p>
        
        <button> {insBtn}</button>
        
      </div>{" "}
    </>
  );
};
export default ProdOne;
