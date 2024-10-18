import React from "react";
import '../css/usluge.css'
import '../css/uslugeglow.css'
import q from '../icons/weldin.png'
import gate from '../icons/gate.png'
import canopy from '../icons/canopy.png'
import stair from '../icons/stair.png'
import ch from '../icons/constHall.png'
import pool from '../icons/swpl.png'
import alub from '../icons/alub.png'
import basta from '../icons/basta.png'
import roof from '../icons/roofLim.png'
import mw from '../icons/mw.png'

const Usluge = ({isMobile, scrollToRef, galleryRef}) => {

return(
    <>

    <div style={{backgroundColor: 'rgb(201 200 200)'}}>
        <h1 style={{textAlign: 'center', paddingTop: '20px',fontSize: '50px'}}>Usluge</h1>
<div className='wcp'><h2><b>Zavarivanja svih vrsta metala i legura.</b></h2></div><br/>
{!isMobile ? (
  <div className='why' style={{backgroundColor:'rgb(131 159 193 / 50%)',margin: '0 10%'}}>
<span className='inlB'><span style={{display: 'flex',justifyContent: 'left',alignItems:'center',width:'20vw'}}><img className='whyIcons' src={q} alt="quality"></img>
<h2><b>MIG</b></h2> <i style={{opacity: '70%'}}>(Metal Inert Gas)</i></span>
<p className='tristaPedeset'> Zavarivanje metalnim inertnim plinom, metoda koja koristi kontinuiranu žicu kao elektrodu. 
    Omogućava brzo i precizno zavarivanje čelika, aluminijuma i slicno. </p>
</span>

<span className='inlB'><span style={{display: 'flex',justifyContent: 'left',alignItems:'center'}}><img className='whyIcons' src={q} alt="quality"></img>
<h2><b>MAG</b></h2> <i style={{opacity: '70%'}}>(Metal Active Gas)</i></span>
<p className='tristaPedeset'>Koristi aktivne gasove, poput ugljen-dioksida,
     Visoka brzina i efikasnost su idealni za zavarivanje debljih materijala, kao što su čelik i legure.</p></span><br/>
<span className='inlB'><span style={{display: 'flex',justifyContent: 'left',alignItems:'center'}}><img className='whyIcons' src={q} alt="quality"></img>
<h2><b>TIG</b></h2> <i style={{opacity: '70%'}}>(Tungsten Inert Gas)</i></span>
<p className='tristaPedeset'>Koristi volframovu elektrodu i inertni gas (najčešće argon). Nudi izuzetno visoku kontrolu i kvalitet zavarivanja, 
    idealna za tankozidne materijale i specijalizovane primene.</p></span>

<span className='inlB'><span style={{display: 'flex',justifyContent: 'left',alignItems:'center'}}><img className='whyIcons' src={q} alt="quality"></img>
<h2><b>REL </b></h2><i style={{opacity: '70%'}}>(Rucno El. Zavarivanje)</i></span>
<p className='tristaPedeset'>Zavarivanje elektrodama, 
    popularna metoda koja se koristi u raznim industrijama zbog svoje efikasnosti i fleksibilnosti. </p></span>

</div>
) : (
    <div>
<div style={{fontWeight: '400'}}> 
    <div style={{paddingLeft: '15px', paddingBottom: '15px',paddingTop: '5px', backgroundColor: 'rgb(81 81 81 / 50%)' }}>
    <h2 style={{display: 'contents'}}><b>MIG</b></h2> <i style={{opacity: '70%',display:'contents'}}>(Metal Inert Gas)</i>
    &nbsp;- Brzo i precizno zavarivanje čelika, aluminijuma i slicno.</div>
    <div style={{paddingLeft: '15px', paddingBottom: '15px',paddingTop: '10px', backgroundColor: 'rgb(157 157 157 / 50%)' }}>
    <h2 style={{display: 'contents'}}><b>MAG</b></h2> <i style={{opacity: '70%',display:'contents'}}>(Metal Active Gas)</i>
    &nbsp;- Idealan za zavarivanje debljih materijala.</div>
    <div style={{paddingLeft: '15px', paddingBottom: '15px',paddingTop: '10px', backgroundColor: 'rgb(81 81 81 / 50%)' }}>
    <h2 style={{display: 'contents'}}><b>TIG</b></h2> <i style={{opacity: '70%',display:'contents'}}>(Tungsten Inert Gas)</i>
    &nbsp;- Izuzetno visoka kontrola i kvalitet zavarivanja.</div>
    <div style={{paddingLeft: '15px', paddingBottom: '15px',paddingTop: '10px', backgroundColor: 'rgb(157 157 157 / 50%)' }}>
    <h2 style={{display: 'contents'}}><b>REL</b></h2> <i style={{opacity: '70%',display:'contents'}}>(Rucno El. Zavarivanje)</i>
    &nbsp;- Efikasna i fleksibilna metoda.</div>

    </div>

  </div>
)}


{!isMobile ? (
    <>
<div className='wcp'><h2><b>Proizvodnja svih vrsta objekata i konstrukcija.</b></h2></div><br/>
<div style={{display: "flex",justifyContent: 'center',margin: '0 25%',paddingBottom: '20px',fontSize: '20px',color: 'rgb(45 36 36)'}}>
{/* Lista proizvoda */}
<div class="container">
        <div class="left-column">
            <ul style={{listStyleType: 'none'}}>
                <li><button class="buttonK">
                Metalne, aluminijumske i kovane ograde
<img src={gate} className="iconK"></img></button></li>
<li><button class="buttonK">
                Nadstrešnice
<img src={canopy} className="iconK"></img></button></li>
<li><button class="buttonK">
                Stepeništa
<img src={stair} className="iconK"></img></button></li>
</ul>        </div>

<div className="middle-column">
<ul style={{listStyleType: 'none'}}>
<li><button class="buttonK">
                Konstrukcija hala
<img src={ch} className="iconK"></img></button></li>
<li><button class="buttonK">
                Pokrivanje bazena
<img src={pool} className="iconK"></img></button></li>
<li><button class="buttonK">
                Ugradnja alubond-a
<img src={alub} className="iconK"></img></button></li>
               
            </ul></div>

        <div class="right-column">
        <ul style={{listStyleType: 'none'}}>
        <li><button class="buttonK">
                Baštenske garniture
<img src={basta} className="iconK"></img></button></li>
<li><button class="buttonK">
                Pokrivanje krovova limom
<img src={roof} className="iconK"></img></button></li>
<li><button class="buttonK">
Metalni nameštaj u kombinaciji sa drvetom
<img src={mw} className="iconK"></img></button></li>
          

        </ul>
        </div>
    </div>
    </div>
    </>
) : (
<>
    <div className='wcp'><h2><b>Proizvodnja svih vrsta objekata i konstrukcija.</b></h2></div><br/>
<div style={{display: "flex",justifyContent: 'center',margin: '0 25%',paddingBottom: '20px',fontSize: '20px',color: 'rgb(45 36 36)'}}>
{/* Lista proizvoda */}
<div class="container">
        <div class="left-column">
            <ul style={{listStyleType: 'none'}}>
                <li><button class="buttonK">
                Metalne, alu i kovane ograde
<img src={gate} className="iconK"></img></button></li>
<li><button class="buttonK">
                Nadstrešnice
<img src={canopy} className="iconK"></img></button></li>
<li><button class="buttonK">
                Stepeništa
<img src={stair} className="iconK"></img></button></li>

<li><button class="buttonK">
                Baštenske garniture
<img src={basta} className="iconK"></img></button></li>
</ul>        </div>

<div className="middle-column">
<ul style={{listStyleType: 'none'}}>
<li><button class="buttonK">
                Konstrukcija hala
<img src={ch} className="iconK"></img></button></li>
<li><button class="buttonK">
                Pokrivanje bazena
<img src={pool} className="iconK"></img></button></li>
<li><button class="buttonK">
                Ugradnja alubond-a
<img src={alub} className="iconK"></img></button></li>
<li><button class="buttonK">
Metalni nameštaj u kombinaciji sa drvetom
<img src={mw} className="iconK"></img></button></li>
               
            </ul></div>
            </div>
            </div>
            </>
)}
</div>
</>
);

}
export default Usluge