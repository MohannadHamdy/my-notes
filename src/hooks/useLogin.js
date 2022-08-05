import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase";

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setError(null);
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      dispatch({ type: "LOGIN", payload: res.user });
      setLoading(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
      setLoading(false);
    }
  };

  return { loading, error, login };
};
