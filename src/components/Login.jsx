import React from "react";
import { useNavigate } from "react-router-dom";
import ilustration from "../assets/ilustration.jpg";
import Button from "../UI/Button";

const Login = () => {
  const navigate = useNavigate();
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
        <Button action={() => navigate("/Home")} text={"Login"} />
        <h3>No account? Register now</h3>
        <Button action={() => navigate("/Register")} text={"register"} />

      </div>
    </div>
  );
};

export default Login;
