import { useContext } from "react"
import { UserContext } from "../src/contexts/userContext"

export default function Login() {
    const { value, setValue } = useContext(UserContext)

    return (
        <div>
            <h2>Login {value}</h2>
            <button onClick={() => { setValue("login...") }}>
                login
            </button>
        </div>
    )
}