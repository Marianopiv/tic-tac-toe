import React, { useEffect, useState } from "react";
import useServices from "../hook/useServices";
import Button from "../UI/Button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { signUp } = useServices();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");
  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors("");
    try {
      await signUp(user.email, user.password);
      Swal.fire({
        title: "Usuario registrado correctamente",
        icon: "success",
        confirmButtonText: "Cool",
      });
      navigate("/");
    } catch (error) {
      let string = error.message;
      let index = string.indexOf(":");
      let cleanedString = string.slice(index + 1);
      setErrors(cleanedString);
    }
  };

  return (
    <div className="flex flex-col items-center gap-20">
      <h1 className="uppercase text-white font-bold">register</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-48 items-center"
      >
        <label className="text-white" htmlFor="email">
          Email
        </label>
        <input
          onChange={handleInput}
          className="text-slate-900 p-1 rounded-sm"
          type="email"
          name="email"
          placeholder="marianito@gmail.com"
        />
        <label className="text-white">Password</label>
        <input
          onChange={handleInput}
          className="text-slate-900 p-1 rounded-sm"
          type="password"
          name="password"
          htmlFor="password"
          placeholder="******"
        />
        {errors && <p className="text-red-500 uppercase text-xs">{errors}</p>}
        <Button text={"Register"} />
      </form>
    </div>
  );
};

export default Register;
