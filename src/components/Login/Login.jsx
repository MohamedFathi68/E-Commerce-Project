import React, { useState } from "react";
import './Login.module.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const validationSchema = Yup.object({
    
    email: Yup.string().email("email not valid").required("required"),
    password: Yup.string().required("required"),
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function callLogIn(reqBody) {
    let { data } = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", reqBody)
      .catch((err) => {
        setIsLoading(true);
        setErrorMessage(err.response.data.message);
      });
    if (data.message === "success") {
      localStorage.setItem("userToken", data.token);
      navigate("/home");
    }
  }

  const registerForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: callLogIn,
  });

  return (
    <section className="w-75 m-auto py-5">
      <div className="mb-3">
        <h3 className="mb-3">Log in Now :</h3>
        {errorMessage ? (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        ) : null}
        <form onSubmit={registerForm.handleSubmit}>
          <div className="my-4">
            <input
              type="email"
              name="email"
              id="email"
              value={registerForm.values.email}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
              className="form-control"
              placeholder="email"
              aria-describedby="helpId"
            />
            {registerForm.errors.email && registerForm.touched.email ? (
              <small className="text-danger p-2 ">
                *{registerForm.errors.email}
              </small>
            ) : null}
          </div>
          <div className="my-4">
            <input
              type="password"
              name="password"
              id="password"
              value={registerForm.values.password}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
              className="form-control"
              placeholder="password"
              aria-describedby="helpId"
            />
            {registerForm.errors.password && registerForm.touched.password ? (
              <small className="text-danger p-2 ">
                *{registerForm.errors.password}
              </small>
            ) : null}
          </div>
          <button
            type="submit"
            className="btn bg-main text-white d-block ms-auto"
            disabled={!(registerForm.isValid && registerForm.dirty)}>
            {isLoading ? <i className="fa fa-spinner fa-spin"></i> : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
}
