import React from "react"

export default function Meme(){
    return (
        <div className="container">
            <form className="form">
                <input />
                <input />
                <button>Get a new meme image  🖼</button>
            </form>
            <div className="meme">
                <img src="" alt=""/>
                <h2>top text</h2>
                <h2>bottom text</h2>
            </div>
        </div>
    )
}