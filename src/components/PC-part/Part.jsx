const Part = ({ part,handelAddToCart }) => {
  const { name,price,image_url } = part;
  return (
    <div>
      <div className="card card-compact h-96 w-96 bg-[#4281a4] shadow-xl">
        <figure>
          <img
            className="w-[80%]"
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>${price}</p>
          <div className="card-actions justify-center">
            <button onClick={()=>handelAddToCart(part)} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part;
