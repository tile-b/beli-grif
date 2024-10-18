import { useEffect, useState, useRef } from 'react';
import './components/css/app.css';
import NavBar from './components/js/NavBar';
import Footer from './components/js/Footer';
import FooterTile from './components/js/FooterTile';
import About from './components/js/About';
import Usluge from './components/js/Usluge';
import Carousel from './components/js/Carousel';
import GalleryR from './components/js/GalleryR';
import bg from './components/icons/beliGL.png';
import ar from './components/pics/arrw.png';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isOverlayVisible, setOverlayVisible] = useState(true);

  const aboutRef = useRef(null);
  const uslugeRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const arrowStyle = {
    position: 'fixed',
    bottom: '50px',
    right: '5px',
    background: 'none',
    border: 'none',
    opacity: '0.7',
    zIndex: '3',
    cursor: 'pointer',
    color: '#22559c',
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Duration of loading

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const fadeOutTimer = setTimeout(() => {
        setOverlayVisible(false);
      }, 2000); // Match this with your CSS transition duration

      return () => clearTimeout(fadeOutTimer);
    }
  }, [loading]);

  return (
    <>
      {isOverlayVisible && (
        <div className={`loading-overlay ${loading ? '' : 'hidden'}`}>
          <img src={bg} alt="Loading..." />
        </div>
      )}

      <NavBar isMobile={isMobile} aboutRef={aboutRef} uslugeRef={uslugeRef} galleryRef={galleryRef} contactRef={contactRef} scrollToRef={scrollToRef} />
      <Carousel isMobile={isMobile} />

      <div ref={aboutRef}>
        <About isMobile={isMobile} scrollToRef={scrollToRef} galleryRef={galleryRef} />
      </div>

      <div ref={uslugeRef}>
        <Usluge isMobile={isMobile} scrollToRef={scrollToRef} galleryRef={galleryRef} />
      </div>

      <div ref={galleryRef}>
        <GalleryR isMobile={isMobile} />
      </div>

      {showButton && (
        <button onClick={scrollToTop} style={arrowStyle}>
          {isMobile ? (
            <img src={ar} alt='scroll' style={{ width: "40px" }} />
          ) : (
            <img src={ar} alt='scroll' style={{ width: "60px" }} />
          )}
        </button>
      )}

      <div ref={contactRef}>
        <Footer isMobile={isMobile} aboutRef={aboutRef} uslugeRef={uslugeRef} galleryRef={galleryRef} scrollToRef={scrollToRef} />
      </div>
      <FooterTile isMobile={isMobile} />
    </>
  );
}

export default App;
