import React from "react";

type GreetingProps = {
    name?: string;
    height?: string;
}

function Greeting({ name }: GreetingProps) {
    return <h2>Hello{name ? `, ${name}!` : "!"}</h2>
  }

export default Greeting


