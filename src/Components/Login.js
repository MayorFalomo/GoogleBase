import { signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { auth, provider } from "../Components/firebase-config";
import { AppContext } from "./Helpers/Helpers";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AppContext);

  const navigate = useNavigate();

  const icon = <FcGoogle size={30} />;

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem(isAuth, true);
        setIsAuth(true);
        navigate("/");
        const name = res.user.displayName;
        const email = res.user.email;
        const profilePic = res.user.photoURL;
        console.log(res.user.photoURL);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("photoUrl", profilePic);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="logins">
      <div>
        <h2>Welcome to Google-Clone</h2>

        <button onClick={signInWithGoogle}>{icon} Continue with Google </button>
        <p>
          This is a one-time password-less Login so you don't need a password.{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
