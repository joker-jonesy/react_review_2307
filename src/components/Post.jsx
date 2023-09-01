import {useState} from "react";

function Post(props){

    const [toggle, setToggle]=useState(false)

    return(
        <>
            <div className={"post"} onClick={()=>setToggle(true)}>
                <h3>{props.user}</h3>
                <p>{props.text}</p>
                {props.image&&<img src={props.image} alt={"some image"}/>}
            </div>
            <div className={"pop"} onClick={()=>setToggle(false)} style={{display: toggle?"flex":"none"}}>
                <h3>{props.user}</h3>
                <p>{props.text}</p>
                {props.image&&<img src={props.image} alt={"some image"}/>}
            </div>
        </>
    )
}

export default Post;