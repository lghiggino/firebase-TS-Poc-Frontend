import { useContext } from "react"
import { UserContext } from "../src/contexts/userContext"

export default function About() {
    const { value, setValue } = useContext(UserContext)

    return (
        <div>
            <h2>About {value}</h2>
            <button onClick={() => { setValue("abouting...") }}>
                change context value
            </button>
        </div>
    )
}