import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setError(null);
    setLoading(true);

    try {
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      setLoading(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
      setLoading(false);
    }
  };

  return { loading, error, logout };
};
