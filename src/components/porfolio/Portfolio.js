import React from "react";
import "./portfolio.css"
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img5.jpg"
import img6 from "../../assets/img6.png"

function Portfolio(){
    const data = [
        {
            id: 1,
            image: img1,
            title: "Bulma Website integrated with React and Firebase",
            github: "https://github.com",
            demo: "https://ezeigboemmanuel.netlify.app"
        },
        {
            id: 2,
            image: img2,
            title: "Foundation Website integrated with React and TailwindCSS",
            github: "https://github.com",
            demo: "https://ezeigboemmanuel.netlify.app"
        },
        {
            id: 3,
            image: img3,
            title: "Materialize Website integrated with React and Firebase",
            github: "https://github.com",
            demo: "https://ezeigboemmanuel.netlify.app"
        },
        {
            id: 4,
            image: img4,
            title: "React Count Application: Fully Functional",
            github: "https://github.com",
            demo: "https://ezeigboemmanuel.netlify.app"
        },
        {
            id: 5,
            image: img5,
            title: "TailwindCSS built from scratch",
            github: "https://github.com",
            demo: "https://ezeigboemmanuel.netlify.app"
        },
        {
            id: 6,
            image: img6,
            title: "Binary to Text converter with vanillaJS",
            github: "https://github.com",
            demo: "https://ezeigboemmanuel.netlify.app"
        }
    ]
    return(
        <section id = "portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className = "container portfolio_container">
                {data.map(item => <article key = {item.id} className = "portfolio_item">
                    <div className="portfolio_item_image">
                        <img src = {item.image} />
                    </div>
                    <h3>{item.title}</h3>

                    <div className="portfolio_item_cta">
                        <a href = "#" className="btn">Github</a>
                        <a href = "#" className="btn btn-primary">Live Demo</a>
                    </div>  
                </article>)}
            </div>
        </section>
    )
}

export default Portfolio;