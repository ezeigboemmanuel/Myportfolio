import React from "react";
import "./portfolio.css"
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img5.jpg"
import img6 from "../../assets/img6.png"

function Portfolio(){
    return(
        <section id = "portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className = "container portfolio_container">
                <article className = "portfolio_item">
                    <div className="portfolio_item_image">
                        <img src = {img1} />
                    </div>
                    <h3>This is the portfolio title</h3>
                    <a href = "#" className="btn">Github</a>
                    <a href = "#" className="btn btn-primary">Live Demo</a>
                </article>
                
                <article className = "portfolio_item">
                    <div className="portfolio_item_image">
                        <img src = {img1} />
                    </div>
                    <h3>This is the portfolio title</h3>
                    <a href = "#" className="btn">Github</a>
                    <a href = "#" className="btn btn-primary">Live Demo</a>
                </article>

                <article className = "portfolio_item">
                    <div className="portfolio_item_image">
                        <img src = {img1} />
                    </div>
                    <h3>This is the portfolio title</h3>
                    <a href = "#" className="btn">Github</a>
                    <a href = "#" className="btn btn-primary">Live Demo</a>
                </article>

                <article className = "portfolio_item">
                    <div className="portfolio_item_image">
                        <img src = {img1} />
                    </div>
                    <h3>This is the portfolio title</h3>
                    <a href = "#" className="btn">Github</a>
                    <a href = "#" className="btn btn-primary">Live Demo</a>
                </article>

                <article className = "portfolio_item">
                    <div className="portfolio_item_image">
                        <img src = {img1} />
                    </div>
                    <h3>This is the portfolio title</h3>
                    <a href = "#" className="btn">Github</a>
                    <a href = "#" className="btn btn-primary">Live Demo</a>
                </article>

                <article className = "portfolio_item">
                    <div className="portfolio_item_image">
                        <img src = {img1} />
                    </div>
                    <h3>This is the portfolio title</h3>
                    <a href = "#" className="btn">Github</a>
                    <a href = "#" className="btn btn-primary">Live Demo</a>
                </article>
            </div>
        </section>
    )
}

export default Portfolio;