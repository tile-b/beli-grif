import React, { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '../css/sidenav.css'


function SideNav({scrollToRef, aboutRef, galleryRef, uslugeRef, contactRef}) {
  const [navWidth, setNavWidth] = useState(0);

  const openNav = () => {
    setNavWidth(200);
  };
  const closeNav = () => {
    setNavWidth(0);
  };

let menuRef= useRef();

  useEffect(() =>{
   let handler = (e)=>{
    if(menuRef.current && !menuRef.current.contains(e.target)){
      setNavWidth(0);
    }

   };

document.addEventListener("mousedown", handler);

  });

  return (
    <div style={{display: 'inline-flex'}}>
      <div className="sidenav" style={{ width: navWidth }} ref={menuRef}>
        <button className="closebtn" onClick={closeNav}>&times;</button>
       
                  <div style={{paddingTop: '50px',color:'white'}}>
          <a onClick={() => {scrollToRef(aboutRef); closeNav(); }}>
          O Nama
          </a>
          <a onClick={() => {scrollToRef(uslugeRef); closeNav(); }}>
          Usluge
          </a>
          <a onClick={() => {scrollToRef(galleryRef); closeNav(); }}>
          Galerija
          </a>
          <a onClick={() => {scrollToRef(contactRef); closeNav(); }}>
            Kontakt
          </a>
          </div>
      </div>
      <span style={{ fontSize: '30px', cursor: 'pointer',color: 'rgb(44 58 71)',paddingRight: '5px' }} onClick={openNav}><FaBars/></span>
    </div>
  );
}

export default SideNav;