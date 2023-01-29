import React from "react";
import Button from "../UI/Button";

const Register = () => {
  return (
    <div className="flex flex-col items-center gap-20">
      <h1 className="uppercase text-white font-bold">register</h1>
      <form className="flex flex-col gap-4 w-48 items-center">
        <span className="text-white">Email</span>
        <input className="text-slate-900 p-1 rounded-sm" type="text" />
        <span className="text-white">Password</span>
        <input className="text-slate-900 p-1 rounded-sm" type="password" />
        <Button text={"Register"}/>
      </form>
    </div>
  );
};

export default Register;
