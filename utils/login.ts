import React from "react";

type UserProps = {
    id: string;
    name: string;
    email: string;
}

async function login() {
    return {
        id: "3",
        name: "robert",
        email: "bob@bobsite.com"
    }
}

export default login
