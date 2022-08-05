import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthContext } from "./useAuthContext";

const useRegister = () => {
  // this hook needs displayname, role, email, password
  // it handles the creation of a new user
  // then it sends back the reply with a success or failure with details about it
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [success, setSuccess] = useState(null);
  const { dispatch } = useAuthContext();
  const registerUser = async (displayName, email, password) => {
    try {
      setLoading(true);
      setError(null);
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("something is up.. could not signup");
      }

      // add displayname to user
      await updateProfile(res.user, {
        displayName,
      });
      dispatch({ type: "LOGIN", payload: res.user });
      // dispatch login action

      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
      setLoading(false);
    }
  };
  return { error, loading, success, registerUser };
};

export default useRegister;
