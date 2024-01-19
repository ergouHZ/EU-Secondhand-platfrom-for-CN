import React from "react";

/* function Greet()
{  return <h1>Hello Zhan !</h1>;
}

export default Greet; */

export const Greet = (props) => {

    console.log(props);
    return (
        <div>
        <h1>hello {props.name}</h1>
        {props.children}
        </div>
    );
}