import React, { useEffect } from 'react';
import video from '../data/video.mp4'
import Logo from '../data/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style.css';

const HomePage = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <div className="home-container">
        <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="neuox-container">
        <span className="neuox-text">N</span>
        <span className="neuox-text">e</span>
        <span className="neuox-text">u</span>
        <span className="neuox-text">r</span>
        <span className="neuox-text">o</span>
      </div>
      <div className="vertical-line">
        <div className="line line-1"></div>
      </div>
      <div className="vertical-line">
        <div className="line line-2"></div>
      </div>
      <div className='appearing-box'>
        <div className='neuox-contain'>
          <div className='neuox-contain-1'>
            <img src={Logo} alt='Logo' className='neuox-contain-img' />
          </div>
          <div className='neuox-contain-2'>
          <div className="tabs">
          <div className="tab">Services</div>
          <div className="tab">Product</div>
            <div className="tab">Technology</div>
            <div className="tab">Research</div>
            <div className="tab">Case Studies</div>
            <div className="tab">Events/Resources</div>
            <div className="tab">FAQs</div>
            <div className="tab">About Us</div>
            <div className="tab">Contact</div>
            <div className="tab"><SearchIcon/></div>
          </div>
          </div>
        </div>
      </div>
      <div className='appearing-box-1'>
      <div className="welcome-text">
            <div className="welcome-text-1">NEUROX IS DIAGNOSTIC AND PREDICTIVE</div>
            <div className="welcome-text-2">Welcome to </div>
            <div className="welcome-text-3" id="neurox-text">
              <span>N</span>
              <span>e</span>
              <span>u</span>
              <span>r</span>
              <span>o</span>
              <span>X</span>
            </div>
            <div className="welcome-text-4" data-aos="fade-right" data-aos-delay="600">________</div>
            <div className="welcome-text-5">
              <p>
                We help businesses optimize their 
                marketing efforts, enhance brand 
                recognition, and drive revenue 
                growth by tapping into the power 
                of the human mind
              </p>
            </div>
          </div>

      </div>
    </div>
  );
};

export default HomePage;