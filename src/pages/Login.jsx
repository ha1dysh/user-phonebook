import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../redux/authApi";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));

    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-56 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="border-2 rounded-lg p-2 border-gray-600 w-full"
      >
        <p>Email</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="input input-sm w-full"
        />

        <p>Password</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="input input-sm w-full"
        />

        <input type="submit" value="Login" className="btn btn-sm w-full mt-2" />
      </form>
    </div>
  );
}
