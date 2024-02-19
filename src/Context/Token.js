import { createContext, useState } from "react";

export const TokenContext = createContext();


export default function TokenContextProvider(props) {

  const [token , setToken] = useState(null)

  return <TokenContext.Provider value={{token,setToken}}>
{props.children}
  </TokenContext.Provider>
}
