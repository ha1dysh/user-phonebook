import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "../redux/authApi";

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(operations.singUp({ name, email, password }));

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-56 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="border-2 rounded-lg p-2 border-gray-600 w-full"
      >
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-sm w-full"
        />

        <p>Email</p>
        <input
          type="text"
          name="name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-sm w-full"
        />

        <p>Password</p>
        <input
          type="password"
          name="name"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-sm w-full"
        />

        <br />
        <input
          type="submit"
          value="Register"
          className="btn btn-sm w-full mt-2"
        />
      </form>
    </div>
  );
}
