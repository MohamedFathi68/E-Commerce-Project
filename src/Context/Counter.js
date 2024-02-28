import { createContext } from "react";

export let CounterContext = createContext();

export default function CounterContextProvider(props) {
  let x = 20;
  let y = 30;
  return <CounterContext.Provider value={{ x , y }}>{props.children}</CounterContext.Provider>;
}
