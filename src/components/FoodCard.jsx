import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";


const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()
    
    const handleAddtoCart = () =>{
      if (user && user.email){
        // send cart to database
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts', cartItem)
        .then(res =>{
          console.log(res.data)
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch the cart to update the cart items count
          refetch()
        })
      }else{
        Swal.fire({
          title: "You are not logged in!!",
          text: "Please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login"
        }).then((result) => {
          if (result.isConfirmed) {
            // send the user to the login page
            navigate('/login', {state: {from: location}})
          }
        });
      }
    }

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
          <button 
          onClick={handleAddtoCart}
          className="uppercase border-0 py-2 px-5 rounded border-black border-b-4 mt-4 hover:bg-base-300"
          >Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
