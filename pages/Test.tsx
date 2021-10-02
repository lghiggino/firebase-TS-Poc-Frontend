import React, { useContext } from "react";
import { UserContext } from "../src/contexts/userContext";


function Test() {
  const { user, setUser } = useContext(UserContext)


  return (
    <div>
      <h2>Test</h2>
      {user &&
        <pre>{JSON.stringify(user, null, 4)}</pre>
      }

    </div>
  )
}

export default Test


