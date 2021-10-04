import { useState } from "react";


export const useForm = (initialValues: any) => {
    const [values, setValues] = useState(initialValues)

    return[
        values,
        (event: { target: { name: string; value: string; }; }) => {
            setValues({
                ...values,
                [event.target.name]: event.target.value
            })
        }
    ]
}