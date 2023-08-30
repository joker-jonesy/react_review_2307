import {useState} from "react";

function Counter(){
    const [number, setNumber]=useState(0);

    return(
        <>
            <h3>{number}</h3>
            <button onClick={()=>setNumber(number+1)}>Add Up</button>
        </>
    )
}

export default Counter