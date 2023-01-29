import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
export const Context = createContext();

export const useAuth = () => {
    const context = useContext(Context)
    return context
}
const Provider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth,currentUser => {
      setUser(currentUser);
    })
  }, [])
  
  return <Context.Provider value={{ user }}>{children}</Context.Provider>;
};

export default Provider;
