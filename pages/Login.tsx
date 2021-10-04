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
                if (!user) {
                    try {
                        const user = await login()
                        setUser(user)
                    }catch(error){
                        console.log(error)
                    }
                }else{
                    setUser("")
                }

            }}>
                {user ? "logout" : "login"}
            </button>
        </div>
    )
}