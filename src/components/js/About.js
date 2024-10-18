import React from "react";
import welder from '../pics/welder.png'
import '../css/about.css'

const About = ({isMobile,scrollToRef,galleryRef}) => {
    
    return(
        <>
<div className="ff" style={{maxHeight: '700px',minHeight: '500px',background: 'rgb(237 235 235)'}}>
  <div style={{paddingTop: '50px'}}>
    <div className="nestaniC" style={{margin: '55px 25px 25px 20%',}}>
<img src={welder} alt="welder" 
style={{
    objectFit: 'contain',
    width:'30vw',
maxWidth: '500px',
maxHeight: '500px',
borderRadius: '5px',
verticalAlign: 'top',
webkitBoxShadow: '2px 1px 6px 1px rgba(0,0,0,0.44)',
mozBoxShadow: '2px 1px 6px 1px rgba(0,0,0,0.44)',
boxShadow: '2px 1px 6px 1px rgba(0,0,0,0.44)'
}}>

</img>
</div>
<div className="ww" style={{display: 'inline-block',maxWidth: '400px',fontSize: '22px', verticalAlign: 'top',margin: '50px 0px 0px 1vw', color: '#656565'}}>
    <p style={{paddingLeft: '5px',color: '#454545',marginBottom:'0',marginTop: '0'}}><h1 style={{marginBottom: '0',marginTop: '0'}}>Beli Grif</h1></p>
    <p style={{paddingLeft: '5px', opacity: '70%',marginTop: '0',color:"#6c7599"}}>Bravarsko-kovačka Radnja</p>
    <p>Firma <b style={{color: '#454545'}}>Beli Grif</b> je osnovana 2018 u Bačkoj Palanci.</p>
    <p>Nase poslovanje se svodi na bravarske radove, pored kojih pružamo i razne druge usluge.</p>
    <p>Naš cilj je da pružimo najkvalitetnije usluge iz svih oblasti poslovanja uz zagarantovan kvalitet.</p>
    <p>Kontaktirajte nas za sve što vas zanima.</p>
    <div style={{display:'flex'}}>
      <div style={{paddingRight: '10px'}}>
    <a href="tel:00381658557973" style={{textDecoration: 'none'}}>
    <button class="button">
  Pozovite&nbsp;Nas
  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path
      clip-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      fill-rule="evenodd"
    ></path>
  </svg>
</button></a></div>

<div style={{display: 'flex', alignItems: 'center'}}>
                      <button class="cssbuttons-io-button" onClick={() => scrollToRef(galleryRef)}>
                      Pogledajte Galeriju
                       <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                      </button>
                      </div>  
</div>
</div>

</div>
</div>
</>
    );
}
export default About