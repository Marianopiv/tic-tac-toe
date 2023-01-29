import React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
const useServices = () => {
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  //Preguntar a jova porque si esta funcion la pongo con corchetes, el await no funcionaba en la otra funcion que ejecutaba en register

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth)
  return { signUp, login,logout };
};

export default useServices;
