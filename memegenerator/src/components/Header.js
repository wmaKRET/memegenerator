import React from "react"
import logo from "../images/trollface.png"

export default function Header(){
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo"/>
            <h2>Meme generator</h2>
        </header>
    )
}