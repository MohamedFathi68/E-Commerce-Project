import { createContext } from "react";

export let CounterContext = createContext();

export default function CounterContextProvider() {
  let x = 20;
  return <CounterContext.Provider value={{ x }}></CounterContext.Provider>;
}
