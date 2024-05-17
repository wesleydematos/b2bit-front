import { useEffect } from "react";
import { ErrorMessage, Formik } from "formik";
import { Errors } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../../assets/logo.png";
import api from "../../services/axiosConfig";

export default function SignIn() {
  const labelStyles = "block mb-2 text-sm font-bold";
  const inputStyles = "bg-grey-d p-3 rounded-xl w-full w-[295px] sm:w-[365px]";
  const navigate = useNavigate();

  function getAuthInfo() {
    const token = localStorage.getItem("@Token-b2bit");

    if (token) {
      navigate("/profile");
    }
  }

  useEffect(() => {
    getAuthInfo();
  }, []);

  return (
    <main className="bg-grey w-screen h-screen flex font-sans">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: Errors = {};

          if (!values.email) {
            errors.email = "Email required!";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address!";
          }

          if (!values.password) {
            errors.password = "Password required!";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          api
            .post("/auth/login/", {
              email: values.email,
              password: values.password,
            })
            .then((response) => {
              toast.success("Login Successful!");

              localStorage.setItem(
                "@Token-b2bit",
                JSON.stringify(response.data.tokens.access)
              );

              navigate("/profile");
            })
            .catch((error) => {
              toast.error("Incorrect username and/or password.");
              console.error("Login Failed:", error);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form
            className="mx-auto my-auto bg-grey-l p-5 sm:px-7 sm:pt-14 sm:pb-10 rounded-2xl shadow-custom"
            onSubmit={handleSubmit}
          >
            <img
              src={logo}
              alt="logo"
              className="mb-9 mx-auto w-[190px] sm:w-[289px]"
            />

            <div className="min-w-[288px] flex flex-col">
              <label htmlFor="email" className={labelStyles}>
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={inputStyles}
                placeholder="@gmail.com"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-600 mt-1"
              />
            </div>

            <div className="min-w-[288px] flex flex-col mt-5">
              <label htmlFor="password" className={labelStyles}>
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••••••"
                className={inputStyles}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-600 mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-primary text-grey py-2 w-full rounded-lg mt-5 ${
                isSubmitting && "cursor-not-allowed"
              }`}
            >
              {isSubmitting ? (
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        )}
      </Formik>
    </main>
  );
}
