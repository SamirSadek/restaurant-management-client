import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const handleLogout =() =>{
    logOut()
    .then()
    .catch(error => console.log(error))
  }
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/salads">Order Food</Link>
      </li>
      {user ? 
        <>
        <li>{user.displayName}</li>
        <button onClick={handleLogout} className="text-green-600" >Logout</button>
        </>
      : 
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      }
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-xl bg-black bg-opacity-40 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="normal-case font-bold text-2xl">Bistro</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
