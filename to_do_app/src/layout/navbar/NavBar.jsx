import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthContext";

const NavBar = () => {
  const { user,logOutUser } = useContext(AuthContext);

  return (
    <>
      <div className="navbar bg-base-100 shadow-lg px-16 py-3">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl">To-Do</a>
        </div>
        <div className="flex-none">
          <ul className="flex px-1 items-center">
            <li className="text-[18px] mx-4 text-gray-600 ">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[18px] mx-4 text-gray-600 ">
              <Link to="/all-todo">All-Todo</Link>
            </li>
            <li className="text-[18px] mx-4 text-gray-600 ">
              <Link to="/my-todo">My-Todo</Link>
            </li>
            <li className="text-[18px] mx-4 text-gray-600 ">
              <Link to="/add-todo">Add-Todo</Link>
            </li>
            {user?.email ? (
              <button onClick={()=>logOutUser()} className="bg-purple-600 text-white px-4 py-2 rounded cursor-pointer">
                Logout
              </button>
            ) : (
              <li className="text-[18px] mx-4 text-white bg-purple-800 px-4 py-2 hover:text-white rounded-md">
                <Link className="text-white cursor-pointer" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
