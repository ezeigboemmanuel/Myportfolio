import React from "react";
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook, BiMessageSquareDetail} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"

function Nav(){
    const [active, setActive] = React.useState("#");

    return(
        <nav>
             <a href="#" className = {active === "#" ? "active" : ""} onClick = {() => setActive("#")}><AiOutlineHome /></a>
             <a href="#about" onClick = {() => setActive("#about")} className = {active === "#about" ? "active" : ""}><AiOutlineUser /></a>
             <a href="#experience" onClick = {() => setActive("#experience")} className = {active === "#experience" ? "active" : ""}><BiBook /></a>
             <a href="#services" onClick = {() => setActive("#services")} className = {active === "#services" ? "active" : ""}><RiServiceLine /></a>
             <a href="#contact" onClick = {() => setActive("#contact")} className = {active === "#contact" ? "active" : ""}><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav;