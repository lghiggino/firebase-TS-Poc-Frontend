import { useContext } from "react"
import { UserContext } from "../src/contexts/userContext"
import { login } from "../utils/login"

export default function Login() {
    const { user, setUser } = useContext(UserContext)

    return (
        <div>
            <h2>Login</h2>
            {user &&
                <pre>{JSON.stringify(user, null, 4)}</pre>
            }
            <button onClick={async () => {
                const user = await login()
                setUser(user)
            }}>
                login
            </button>
        </div>
    )
}