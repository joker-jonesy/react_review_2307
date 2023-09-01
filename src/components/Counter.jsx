import {useState} from "react";

function Counter({dt, setGlobal}){
    const [number, setNumber]=useState(dt.num);

    return(
        <>
            <h1>{dt.title}</h1>
            <h3>{number}</h3>
            <button onClick={()=>setNumber(number+1)}>Add Up</button>
            <button onClick={()=>setGlobal("child")}></button>
        </>
    )
}

export default Counter