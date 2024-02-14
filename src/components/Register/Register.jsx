import React from "react";
import "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Register() {
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "name is to short name").required("required"),
    email: Yup.string().email("email not valid").required("required"),
    password: Yup.string().required("required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")])
      .required("required"),
    phone: Yup.string().required("required"),
  });

  async function callRegister(reqBody) {
    let { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",reqBody);
    console.log(data);
  }

  const registerForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: callRegister,
  });

  return (
    <section className="w-75 m-auto py-5">
      <div className="mb-3">
        <h3 className="mb-3">Register Now :</h3>
        <form onSubmit={registerForm.handleSubmit}>
          <div className="my-4">
            <input
              type="text"
              name="name"
              id="name"
              value={registerForm.values.name}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
              className="form-control"
              placeholder="name"
              aria-describedby="helpId"
            />
            {registerForm.errors.name && registerForm.touched.name ? (
              <small className="text-danger p-2 ">
                *{registerForm.errors.name}
              </small>
            ) : null}
          </div>
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
          <div>
            <input
              type="password"
              name="re-password"
              id="re-password"
              value={registerForm.values.rePassword}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
              className="form-control"
              placeholder="re-password"
              aria-describedby="helpId"
            />
            {registerForm.errors.rePassword &&
            registerForm.touched.rePassword ? (
              <small className="text-danger p-2 ">
                *{registerForm.errors.rePassword}
              </small>
            ) : null}
          </div>
          <div className="my-4">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={registerForm.values.phone}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
              className="form-control"
              placeholder="phone"
              aria-describedby="helpId"
            />
            {registerForm.errors.phone && registerForm.touched.phone ? (
              <small className="text-danger p-2 ">
                *{registerForm.errors.phone}
              </small>
            ) : null}
          </div>
          <button
            type="submit"
            className="btn bg-main text-white d-block ms-auto">
            Register
          </button>
        </form>
      </div>
    </section>
  );
}
