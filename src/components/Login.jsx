import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ilustration from "../assets/ilustration.jpg";
import { useAuth } from "../context/Provider";
import useServices from "../hook/useServices";
import Button from "../UI/Button";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useServices();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");
  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      let string = error.message;
      let index = string.indexOf(":");
      let cleanedString = string.slice(index + 1);
      setErrors(cleanedString);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <img
        className="absolute w-full h-screen object-cover opacity-30"
        src={ilustration}
        alt=""
      />
      <div className="z-50 text-white flex flex-col items-center gap-10 font-bold">
        <h1 className="">TIC-TAC-TOE</h1>
        <h3>Enjoy playing one of the classics!</h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 w-48 items-center"
        >
          <label className="text-white" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleInput}
            className="text-slate-900 p-1 rounded-sm dark:bg-white"
            type="email"
            name="email"
            placeholder="marianito@gmail.com"
          />
          <label className="text-white">Password</label>
          <input
            onChange={handleInput}
            className="text-slate-900 p-1 rounded-sm dark:bg-white"
            type="password"
            name="password"
            htmlFor="password"
            placeholder="******"
          />
          {errors && <p className="text-red-500 uppercase text-xs">{errors}</p>}
          <Button text={"Login"} />
        </form>

        <h3>No account? Register now or play without user</h3>
        <div className="flex gap-4">
          <Button action={() => navigate("/register")} text={"register"} />
          <Button action={() => navigate("/home")} text={"fast play"} />
        </div>
      </div>
    </div>
  );
};

export default Login;
