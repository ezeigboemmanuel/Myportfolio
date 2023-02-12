import React from "react";
import "./testimonials.css"
import avatar from "../../assets/senddp.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function Testimonials(){
    const data = [
        {
            avatar: avatar,
            name: "Lucky",
            review: "Ezeigbo Emmanuel is a nokn  mndfk jkfnbik nbik nbksnk fkn iind ihn fih h i hir ijb  hao uegha b uhg gg gu ha hbigvbuighugf uh gvjgrhyfv rghuiagh uigergeugehui  jbvjugh efug euegveivi78.",
            id: 1
        },
        {
            avatar: avatar,
            name: "Mystery",
            review: "Ezeigbo Emmanuel is a nokn  mndfk jkfnbik nbik nbksnk fkn iind ihn fih h i hir ijb  hao uegha b uhg gg gu ha hbigvbuighugf uh gvjgrhyfv rghuiagh uigergeugehui  jbvjugh efug euegveivi78.",
            id: 2
        },
        {
            avatar: avatar,
            name: "Joy",
            review: "Ezeigbo Emmanuel is a nokn  mndfk jkfnbik nbik nbksnk fkn iind ihn fih h i hir ijb  hao uegha b uhg gg gu ha hbigvbuighugf uh gvjgrhyfv rghuiagh uigergeugehui  jbvjugh efug euegveivi78.",
            id: 3
        },
        {
            avatar: avatar,
            name: "Erus",
            review: "Ezeigbo Emmanuel is a nokn  mndfk jkfnbik nbik nbksnk fkn iind ihn fih h i hir ijb  hao uegha b uhg gg gu ha hbigvbuighugf uh gvjgrhyfv rghuiagh uigergeugehui  jbvjugh efug euegveivi78.",
            id: 4
        },
    ]
    return(
        <section id = "testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>


            <Swiper
                className="container testimonials_container"
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
             >
            
                {data.map(item => <SwiperSlide key = {item.id} className="testimonial">
                    <div className="client_avatar">
                        <img src = {item.avatar} alt ="" />
                    </div>
                    <h5 className="client_name">{item.name}</h5>
                    <small className="client_review">
                        {item.review}
                    </small>
                </SwiperSlide>)}
                
            </Swiper>
        </section>
    )
}

export default Testimonials;