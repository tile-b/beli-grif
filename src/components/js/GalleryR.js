import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import '../css/gallery.css'

import bg1 from '../pics/bg1.jpg'
import bg3 from '../pics/bg3.jpg'
import bg4 from '../pics/bg4.jpg'
import bg5 from '../pics/bg5.jpg'
import bg6 from '../pics/bg6.jpg'
import bg7 from '../pics/bg7.jpg'
import bg8 from '../pics/bg8.jpg'
import bg9 from '../pics/bg9.jpg'
import bg10 from '../pics/bg10.jpg'
import bg11 from '../pics/bg11.jpg'
import bg12 from '../pics/bg12.jpg'
import bg13 from '../pics/bg13.jpg'
import bg14 from '../pics/bg14.jpg'
import bg15 from '../pics/bg15.jpg'
import bg16 from '../pics/bg16.jpg'
import bg17 from '../pics/bg17.jpg'
import bg18 from '../pics/bg18.jpg'
import bg19 from '../pics/bg19.jpg'
import bg20 from '../pics/bg20.jpg'
import bg21 from '../pics/bg21.jpg'
import bg22 from '../pics/bg22.jpg'
import bg23 from '../pics/bg23.jpg'
import bg24 from '../pics/bg24.jpg'
import bg26 from '../pics/bg26.jpg'

const images = [bg1,bg3,bg4,bg5,bg6,bg7,bg8,bg9,bg10,bg11,bg12,bg13,bg14,bg15,bg16,bg17,bg18,bg19,bg20,bg21,bg22,bg23,bg24,bg26];

export default function GalleryR() {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(Array(images.length).fill(true));

  const handleImageLoad = (index) => {
    setLoading((prev) => {
      const newLoading = [...prev];
      newLoading[index] = false;
      return newLoading;
    });
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
    <div className="zz" style={{backgroundColor: 'rgb(237 235 235)'}}>
    <div style={{textAlign: 'center',fontSize: '50px',paddingBottom: '80px',paddingTop: '15px',fontWeight: 'bold',textShadow: 'rgb(122 179 219) 2px 2px 0px',color: '#26323d'}}>
      Galerija</div>
      {images.map((image, index) => (
        <button type="button" key={index} onClick={() => openLightbox(index)} style={{ margin: '15px',background: 'none',border: 'none' }}>
          {loading[index] && <span>
<div class="loader">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
    <div class="bar4"></div>
    <div class="bar5"></div>
    <div class="bar6"></div>
    <div class="bar7"></div>
    <div class="bar8"></div>
    <div class="bar9"></div>
    <div class="bar10"></div>
    <div class="bar11"></div>
    <div class="bar12"></div>
</div>
</span>}

<div class="image-container">
          <img className="imz"
            src={image}
            alt={`Gallery Image ${index + 1}`}
            onLoad={() => handleImageLoad(index)}
            style={{loading: 'lazy' ,display: loading[index] ? 'none' : 'block' }}
          /></div>
        </button>
      ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={images.map(src => ({ src }))}
      />
    </>
  );
}
