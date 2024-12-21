import React from "react";
export default function Meme(){
    return(
        <div className="meme">
            <div className="top-text">
                <p className="p">Top text</p>
                <input className="text-input"></input>
            </div>
            <div className="top-text">
                <p className="p">Bottom text</p>
                <input className="text-input"></input> 
            </div>
            
            <button className="button-meme">Get a new meme image 🖼</button>
        </div> 
    )
}