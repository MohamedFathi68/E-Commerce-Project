import React from 'react'
import './Login.module.css'

export default function Login() {
  return (
    <section className="w-75 m-auto py-5">
      <div class="mb-3">
        <h3 className="mb-3">Login Now :</h3>
        <form action="">
          <div className="my-4">
            <input
              type="email"
              name="E-mail"
              id="E-mail"
              class="form-control"
              placeholder="E-mail"
              aria-describedby="helpId"
            />
          </div>
          <div className="my-4">
            <input
              type="password"
              name="password"
              id="password"
              class="form-control"
              placeholder="password"
              aria-describedby="helpId"
            />
          </div>
          <div class="w-25 ms-auto">
            <div className=" w-50 ms-auto">
              <button type="button" class="btn bg-main text-white w-100 ">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
