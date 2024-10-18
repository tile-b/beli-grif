import React from "react";
import '../css/carousel.css';
import Slider from "react-slick";
import w1 from '../pics/weldGate.png';
import w2 from '../pics/gtWeld.jpg'
import w3 from '../pics/cWorker.jpg'
import w4 from '../pics/stairW.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/carousel.css'

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    return (
        <div className="vv" style={{ position: 'relative',background:'rgb(237 235 235)' }}>
            <Slider {...settings}>
                <div style={{ margin: 0 }}>
                    <img src={w1} alt="a" className="slikaC" />
                </div>
                <div style={{ margin: 0 }}>
                <img src={w2} alt="a" className="slikaC"/>
                </div>
                <div style={{ margin: 0 }}>
                <img src={w3} alt="a" className="slikaC"/>
                </div>
                <div style={{ margin: 0 }}>
                <img src={w4} alt="a" className="slikaC"/>
                </div>
            </Slider>
            <div className="divP">
          <div style={{
            height: '10px',
            backgroundColor: '#2c3a47',
           
        }} />
    <div className='providna'>

        <h1 className="textProvidni">
            BRAVARSKO-KOVAČKA RADNJA BELI GRIF
        </h1>
    </div>
</div>

        </div>
    );
}
