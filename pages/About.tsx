import { useContext } from "react"
import { UserContext } from "../src/contexts/userContext"

export default function About() {
    const { user, setUser } = useContext(UserContext)

    return (
        <div>
            <h2>About</h2>
            {user &&
                <pre>{JSON.stringify(user, null, 4)}</pre>
            }
        </div>
    )
}