import { useContext } from "react"
import { UserContext } from "../src/contexts/userContext"
import { useForm } from "../src/customHooks/useForm"
import { register } from "../utils/login"

export default function Register() {
    const { user, setUser } = useContext(UserContext)
    const [values, handleChange] = useForm({ email: "", password: "", username: "", dob: "" })

    return (
        <div>
            <h2>Register</h2>


            <label htmlFor="email">Email</label>
            <input name="email" value={values.email} onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input name="password" type="password" value={values.password} onChange={handleChange} />
            <label htmlFor="username">UserName</label>
            <input name="username" value={values.username} onChange={handleChange} />
            <label htmlFor="dob">Date of Birth</label>
            <input name="dob" type="date" value={values.dob} onChange={handleChange} />

            {user &&
                <pre>{JSON.stringify(user, null, 4)}</pre>
            }

            <button onClick={async () => {
                if (!user) {
                    console.log(values)
                    try {
                        const user = await register(values)
                        setUser(user)
                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    setUser("")
                }

            }}>
                {user ? "logout" : "Register"}
            </button>
        </div>
    )
}