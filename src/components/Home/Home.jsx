import React, { useContext } from "react";
import "./Home.module.css";
import { CounterContext } from "../../Context/Counter";

export default function Home() {

  let {x} = useContext(CounterContext)

  return (
    <section className="min-vh-100">
      <div className="p-5">
        {x}
      </div>
    </section>
  );
}
