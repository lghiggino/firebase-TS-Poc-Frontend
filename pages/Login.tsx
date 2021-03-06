import { useContext } from "react"
import { UserContext } from "../src/contexts/userContext"
import { useForm } from "../src/customHooks/useForm"
import { login } from "../utils/login"

export default function Login() {
    const { user, setUser } = useContext(UserContext)
    const [values, handleChange] = useForm({ email: "", password: "" })

    return (
        <div>
            <h2>Login</h2>

            <label htmlFor="email">Email</label>
            <input name="email" value={values.email} onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input name="password" type="password" value={values.password} onChange={handleChange} />

            {user &&
                <pre>{JSON.stringify(user, null, 4)}</pre>
            }

            <button onClick={async () => {
                if (!user) {
                    console.log(values)
                    try {
                        const user = await login(values)
                        setUser(user)
                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    setUser("")
                }

            }}>
                {user ? "logout" : "login"}
            </button>
        </div>
    )
}