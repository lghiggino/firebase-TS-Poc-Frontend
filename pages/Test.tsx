import React, { useContext } from "react";
import { UserContext } from "../src/contexts/userContext";


function Test() {
  const { value, setValue } = useContext(UserContext)


  return (
    <div>
      <h2>Test {value}</h2>
      <button onClick={() => { setValue("testing...") }} >
        change context value
      </button>
    </div>
  )
}

export default Test


