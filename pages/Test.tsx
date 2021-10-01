import React, { useContext } from "react";
import { UserContext } from "../src/contexts/userContext";


function Test() {
  const msg = useContext(UserContext)


  return (
    <div>
      <h2>Test {msg}</h2>
    </div>
    )
}

export default Test


