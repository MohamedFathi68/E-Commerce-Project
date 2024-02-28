import { createContext } from "react";

export let CounterContext = createContext();

export default function CounterContextProvider(props) {
  let x = 2000000000;
  return <CounterContext.Provider value={{ x }}>{props.children}</CounterContext.Provider>;
}
