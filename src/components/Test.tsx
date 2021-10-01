import React, { FC } from "react";

type GreetingProps = {
    name?: string;
}

const Greeting: FC<GreetingProps> = ({ name }) => {
    // name is string!
    return <h1>Hello World{name ? `, ${name}!` : "!"}</h1>
};

export default Greeting