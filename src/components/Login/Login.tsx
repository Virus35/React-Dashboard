import React, { useRef, useState } from "react";
import "./Login.scss";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../utils/form-validations/formValidation";
import { useLocation } from "react-router-dom";
import useRedirect from "../../utils/hooks/useRedirect";
import {
  signIn,
  signUp,
  updateUserProfile,
} from "../../utils/firebaseApi/firebase";
import { useDispatch } from "react-redux";
import { SignInUp } from "../../utils/interface";
import { addUser } from "../../utils/appStore/slices/userSlice";
const Login: React.FC = () => {
  const location = useLocation();
  const [isSign, setIsSign] = useState(location.pathname === "/login");
  const [invalidEmail, setInvalidEmail] = useState(true);
  const [invalidPassword, setInvalidPassword] = useState(true);
  const [invalidUsername, setInvalidUsername] = useState(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);

  const redirectToLogin = useRedirect("/login");
  const redirectToSignup = useRedirect("/signup");
  const redirectToBrowse = useRedirect("/browse");

  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();

    // Directly validate the input values
    const emailIsValid = validateEmail(emailRef?.current?.value || "");
    const passwordIsValid = validatePassword(passwordRef?.current?.value || "");

    // Update the state with the validation results
    setInvalidEmail(emailIsValid || true);
    setInvalidPassword(!passwordIsValid || true);

    // Check validation results and show alert if necessary
    if (!emailIsValid || !passwordIsValid) {
      alert("Please Provide Proper Credentials");
      return;
    }

    if (isSign) {
      const res: SignInUp = await signIn(
        emailRef?.current?.value || "",
        passwordRef?.current?.value || ""
      );
      if (res !== null) {
        dispatch(addUser(res));
        redirectToBrowse();
      }

      // Proceed with login if credentials are valid
    } else {
      // Sign Up
      const resp = await updateUserProfile(usernameRef?.current?.value);
      if (resp !== null) {
        const res: SignInUp = await signUp(
          emailRef?.current?.value || "",
          passwordRef?.current?.value || ""
        );
        if (res !== null) {
          dispatch(
            addUser({ ...res, displayName: usernameRef?.current?.value })
          );
          redirectToBrowse();
        }
      }
    }
  };

  const toggleLoginRoute = () => {
    if (isSign) {
      redirectToSignup();
    } else {
      redirectToLogin();
    }
    setIsSign(!isSign);
  };

  return (
    <div className="login-container">
      <form
        className="form-container"
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}
      >
        <h4>{!isSign ? "Sign Up" : "Sign In"}</h4>
        {!isSign && (
          <div className="flex">
            <input
              type="UserName"
              placeholder="Enter UserName"
              autoComplete="off"
              onChange={() => {
                const userName = usernameRef.current?.value || "";
                setInvalidUsername(!validateUsername(userName));
              }}
              ref={usernameRef}
            />
            {!invalidUsername && <small>Invalid UserName</small>}
          </div>
        )}
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Email"
            autoComplete="off"
            onChange={() => {
              setInvalidEmail(validateEmail(emailRef?.current?.value || ""));
            }}
            ref={emailRef}
          />
          {!invalidEmail && <small>Invalid Email</small>}
        </div>

        <div className="flex">
          <input
            type="text"
            placeholder="Enter Password"
            autoComplete="off"
            onChange={() => {
              setInvalidPassword(
                validatePassword(passwordRef?.current?.value || "")
              );
            }}
            ref={passwordRef}
          />
          {!invalidPassword && <small>Invalid Password</small>}
        </div>

        <button
          type="submit"
          onClick={(event) => {
            handleFormSubmit(event);
          }}
        >
          {" "}
          {!isSign ? "Sign Up" : "Sign In"}
        </button>

        <div className="flex">
          {isSign ? "Already have an account? " : "Don't have an account? "}
          <button type="button" onClick={toggleLoginRoute}>
            {!isSign ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
