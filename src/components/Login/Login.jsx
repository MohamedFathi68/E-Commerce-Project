import React, { useContext, useState } from "react";
import "./Login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../Context/Token";

export default function Login() {
  const validationSchema = Yup.object({
    email: Yup.string().email("email not valid").required("required"),
    password: Yup.string().required("required"),
  });

  let {setToken} = useContext(TokenContext)

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function callLogIn(reqBody) {
    setIsLoading(true);
    let { data } = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", reqBody)
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(err.response.data.message);
      });
    if (data.message === "success") {
      setIsLoading(true);
      localStorage.setItem("userToken", data.token);
      setToken(data.token)
      navigate("/home");
    }
  }

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: callLogIn,
  });

  return (
    <section className="w-75 m-auto my-5 py-5">
      <div className="mb-3">
        <h3 className="mb-3">Log in Now :</h3>
        {errorMessage ? (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        ) : null}
        <form onSubmit={loginForm.handleSubmit}>
          <div className="my-4">
            <input
              type="email"
              name="email"
              id="email"
              value={loginForm.values.email}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
              className="form-control"
              placeholder="email"
              aria-describedby="helpId"
              autoComplete="on"
            />
            {loginForm.errors.email && loginForm.touched.email ? (
              <small className="text-danger p-2 ">
                *{loginForm.errors.email}
              </small>
            ) : null}
          </div>
          <div className="my-4">
            <input
              type="password"
              name="password"
              id="password"
              value={loginForm.values.password}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
              className="form-control"
              placeholder="password"
              aria-describedby="helpId"
              autoComplete="on"
            />
            {loginForm.errors.password && loginForm.touched.password ? (
              <small className="text-danger p-2 ">
                *{loginForm.errors.password}
              </small>
            ) : null}
          </div>
          <button
            type="submit"
            className="btn bg-main text-white d-block ms-auto"
            disabled={!(loginForm.isValid && loginForm.dirty)}>
            {isLoading ? <i className="fa fa-spinner fa-spin"></i> : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
}
