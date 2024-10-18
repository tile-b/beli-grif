import React from "react";
import '../css/footer.css';
import beli from '../pics/logoBeliGrif.png';

const Footer = ({ isMobile, aboutRef, galleryRef, uslugeRef, scrollToRef }) => {
    return (
        <div className="footerB">
            <span>
                <img className="im  nestaniA" src={beli} alt="beli" />
            </span>
            <span className="spanG">
                <h2>Beli Grif</h2>
                <p>Majora Tepića 3</p>
                <p>21400 Bačka Palanka</p>
                <p>Srbija</p>
            </span>
            <span className="spanG">
                <h2>Kontakt</h2>
                <a href="tel:00381658557973" className="ajp"><p>065-8557973</p></a>
                <a href="mailto:blagojevicivanabp@gmail.com" className="ajp"><p>blagojevicivanabp@gmail.com</p></a>
                <p>&nbsp;</p>
            </span>
            <span className="spanF nestaniB">
                <h2>Linkovi</h2>
                <p onClick={() => scrollToRef(aboutRef)}>O nama</p>
                <p onClick={() => scrollToRef(uslugeRef)}>Usluge</p>
                <p onClick={() => scrollToRef(galleryRef)}>Galerija</p>
            </span>
        </div>
    );
};

export default Footer;
