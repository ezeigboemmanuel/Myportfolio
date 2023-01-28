import React from "react";
import "./header.css"
import CTA from "./CTA"
import myimg from "../../assets/senddp.png"

function Header(){
    return(
        <div>
            <header>
                <div className = "container header_container">
                    <h5>Hello I'm</h5>
                    <h1>Ezeigbo Emmanuel</h1>
                    <h5 className = "text-light">Frontend Developer</h5>
                    <CTA />

                    
                    <div className = "me">
                        <img src = {myimg} alt = "" />
                    </div>

                    <a href = "#contact" className = "scroll_down">Scroll Down</a>
                </div>
            </header>
        </div>
    )
}

export default Header;