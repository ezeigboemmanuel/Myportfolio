import React from "react";
import "./about.css"
import aboutdp from "../../assets/aboutdp.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
 
function About(){
    return(
        <section id = "about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src = {aboutdp} alt = "me" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon" />
                            <h5>Experience</h5>
                            <small>2+ years working</small>
                        </article>
                        <article className="about_card">
                            <FiUsers className="about_icon" />
                            <h5>Clients</h5>
                            <small>60+ worldwide</small>
                        </article>
                        <article className="about_card">
                            <VscFolderLibrary className="about_icon" />
                            <h5>Projects</h5>
                            <small>50+ completed</small>
                        </article>
                    </div>
                    <p>
                            lorem hfskj jdbjkhb djsbhjsbjb dvbjbhfjsd bubd ubdjbj dbdsjb hds bdjhbbh khjkh br erw hierwh hfi irwh i ihrwi i hwihrb iwerihe iehwhjdbj uih nkhw iw rihief q429 HIHWN EIHBHB frhihh ekhkgdhih hir ghrut rhhi bj rgrf  ry rgr8ri8yyheui rujfbju gu uihui hhheugij ru uugrkhew ruhighr g hrhroh ihir gihuijhd reiihyrg hpayhsih i bhbijkfhifhbikfbhfkv f ibhfihihihuifyrih8ry.
                        </p>

                        <a href = "#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;