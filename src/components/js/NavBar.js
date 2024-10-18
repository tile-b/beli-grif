import React, { useState, useEffect } from "react";
import '../css/navbar.css';
import logo from '../icons/beliGL.png';
import loc from '../icons/loc.png';
import phn from '../icons/phn.png';
import mail from '../icons/mail.png';
import SideNav from "./SideNav";
import double from '../pics/doubleWeld.png'

const NavBar = ({ isMobile, aboutRef, uslugeRef, galleryRef, contactRef, scrollToRef }) => {
    const [smallNav, setSmallNav] = useState(false);
    const threshold = 300;
    const thresholdB = 10; 

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            if (scrollPosition > threshold && !smallNav) {
                setSmallNav(true);
            }else if (scrollPosition < thresholdB) {
                setSmallNav(false)
            }

        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [smallNav]);

    return (
        <>
            <div className="headerTopBar">
                <div className="row">
                    <span className="spanTop nestani">
                        <img className="ico" src={loc} alt="lokacija" /> Majora Tepića 3 Bačka Palanka
                    </span>
                    <span className="spanTop">
                        <a href="tel:00381658557973" className="ajp">
                            <img className="ico" src={phn} alt="phone" /> 065-8557973 - Marko
                        </a>
                    </span>
                    <span className="spanTop nestani">
                        <a href="mailto:blagojevicivanabp@gmail.com" className="ajp">
                            <img className="ico" src={mail} alt="mail" /> blagojevicivanabp@gmail.com
                        </a>
                    </span>
                </div>
            </div>

<div className={`headerBottomBar ${smallNav ? 'small' : ''}`}>

{isMobile ? (
    <div>
    <span className={`ee ${smallNav ? 'hidden' : ''}`}>
        <img
            className='glow'
            src={logo}
            alt="pm_logo"
            style={{
                objectFit: 'cover',
                width: '25vw',
                maxWidth: '190px',
                height: 'auto',
                borderRadius: '5px',
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
            }}
        />
    </span></div> 
    ) : (
        <div>
        <span className="ee">
            <img
                className='glow'
                src={logo}
                alt="pm_logo"
                style={{
                    objectFit: 'cover',
                    width: '14vw',
                    maxWidth: '190px',
                    minWidth: '85px',
                    height: 'auto',
                    borderRadius: '5px',
                    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
                }}
            />
        </span></div> 
    )}
    {isMobile ? (
    <div className={`beliGrif ${smallNav ? 'visible' : ''}`}>
       <img 
       src={double}
       alt="double"
       style={{
        objectFit:'cover',
        width: '30px',
        height: '30px',
        filter: 'drop-shadow(rgb(124, 137, 176) 0px 0px 30px) drop-shadow(rgb(255, 255, 255) 0px 0px 3px)'

       }}
       
       ></img>&nbsp;&nbsp;BELI GRIF
    </div>
     ) : (
        <div></div>
     )}


                {!isMobile ? (
                    <div style={{ display: 'flex', justifyContent: 'end', paddingRight: '10%' }}>
                        <span className="hovWhite" style={{ marginLeft: '20%', fontWeight: 'bold', fontSize: '1.7vw', paddingRight: '3%' }} onClick={() => scrollToRef(aboutRef)}>O&nbsp;NAMA</span>
                        <span className="hovWhite" style={{ marginLeft: '3%', fontWeight: 'bold', fontSize: '1.7vw', paddingRight: '3%' }} onClick={() => scrollToRef(uslugeRef)}>USLUGE</span>
                        <span className="hovWhite" style={{ marginLeft: '3%', fontWeight: 'bold', fontSize: '1.7vw', paddingRight: '3%' }} onClick={() => scrollToRef(galleryRef)}>GALERIJA</span>
                        <span className="hovWhite" style={{ marginLeft: '3%', fontWeight: 'bold', fontSize: '1.7vw', paddingRight: '3%' }} onClick={() => scrollToRef(contactRef)}>KONTAKT</span>
                    </div>
                ) : (
                    <SideNav scrollToRef={scrollToRef} aboutRef={aboutRef} galleryRef={galleryRef} uslugeRef={uslugeRef} contactRef={contactRef} />
                )}
            </div>
        </>
    );
}

export default NavBar;
