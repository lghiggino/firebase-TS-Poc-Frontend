import React from "react";

type UserProps = {
    id: string;
    name: string;
    email: string;
}
export const login = async (values: {email: string, password: string}) => {
    return {
        id: "3",
        name: "robert",
        email: values.email,
        password: values.password
    }
}

export const register = async(values: {
    username: string, 
    email: string, 
    password: string,
    dob: string
}) => {
    return {
        id: Math.floor(Math.random() * 100),
        username: values.username,
        email: values.email,
        password: values.password,
        dob: values.dob
    }
}

