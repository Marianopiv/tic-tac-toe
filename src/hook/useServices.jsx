import React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
const useServices = () => {
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  //Preguntar a jova porque si esta funcion la pongo con corchetes, el await no funcionaba en la otra funcion que ejecutaba en register

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const saveHighScore = async (userId, score, email) => {
    // Crea referencia al documento
    const docRef = doc(db, `usuarios/${userId}`);
    //Actualiza el campo highscore del documento
    await setDoc(docRef, { highscore: score, email });
    /* //Obtener el highscore actualizado
    const updatedDoc = await getDoc(docRef); */
  };

  return { signUp, login, logout,saveHighScore };
};

export default useServices;
