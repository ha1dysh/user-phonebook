import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { isLoggedIn, selectCurrentUser } from "../../redux/authSlice";
import authOperations from "../../redux/authApi";
import avatar from "./avatar2.jpg";

export default function Layout() {
  const dispatch = useDispatch();
  const isLogged = useSelector(isLoggedIn);
  const user = useSelector(selectCurrentUser);

  return (
    <>
      <header className="flex justify-between navbar bg-base-300">
        <NavLink className="text-lg text-black" to="/">
          Contacts
        </NavLink>

        {!isLogged ? (
          <div className="flex justify-between w-32">
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        ) : (
          <div className="flex align-baseline">
            <img src={avatar} alt="logo" className="w-10 mix-blend-multiply" />
            <p className="text-lg text-black">{user?.name}</p>
            <button
              className="ml-2 btn btn-sm"
              onClick={() => dispatch(authOperations.logOut())}
            >
              Logout
            </button>
          </div>
        )}
      </header>

      <main className="bg-base-200 p-4">
        <Outlet />
      </main>
    </>
  );
}
