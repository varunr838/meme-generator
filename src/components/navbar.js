import React from "react";
import trollFace from "../images/troll_face.png";
export default function Navbar(){
    return(
        <div className="navbar">
           <img className = "troll-image" src= {trollFace}></img>
           Meme Generator
        </div>
    )
}