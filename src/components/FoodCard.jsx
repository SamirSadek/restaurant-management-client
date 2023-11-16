const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="cardImg"
        />
      </figure>
      <p className="absolute right-0 bg-slate-900 text-white mr-4 mt-4 p-2">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p >{recipe}</p>
        <div className="card-actions justify-center">
          <button className="uppercase border-0 py-2 px-5 rounded border-black border-b-4 mt-4 hover:bg-base-300">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
