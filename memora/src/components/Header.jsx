import React from "react";
import "../styles/header.css"
import MemoraLogo from '/MemoraLogo.png'

export default function Header(){
    return(
        <div className = "header">
        <img src = {MemoraLogo} className = "memoraLogo"></img>
        </div>
    )
}