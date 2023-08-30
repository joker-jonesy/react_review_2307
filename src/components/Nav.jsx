import logo from "../assets/react.svg";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Nav(){

    const [toggle, setToggle]=useState(false);

    return(
        <>
            <nav>
                <div className={"logo"}>
                    <img src={logo} alt="react logo"/>
                </div>

                <div className={"link-container"}>
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">PRODUCTS</a>

                </div>
                <FontAwesomeIcon className={"menu"} onClick={()=>setToggle(!toggle)} icon={faBars} />
            </nav>
            <div className="mobile_menu" style={{left: toggle?"0":"-100%"}}>
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">PRODUCTS</a>
            </div>
        </>

    )
}

export default Nav;