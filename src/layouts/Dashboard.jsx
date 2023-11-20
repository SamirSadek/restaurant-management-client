import { FaAd, FaCalendar, FaCalendarCheck, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()
  return (
    <div className="flex ">
      <div className="w-64 min-h-screen bg-orange-300">
        <ul className="menu p-5 space-y-2">
          <li>
            <NavLink to="/dashboard/home">
              <FaHome/>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendarCheck/>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd/>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaList></FaList>
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div> 
          <li>
            <NavLink to="/">
              <FaHome/>
               Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaHome/>
               Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaHome/>
               Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/home">
              <FaHome/>
               Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
