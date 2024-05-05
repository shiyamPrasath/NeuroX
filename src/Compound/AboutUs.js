import React, { useEffect } from 'react';
import "./Style.css";
import Detail_video from '../data/AN ANALYSIS OF NEURONS.mp4';
import MoreOver from '../data/more_over.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 }); 
      }, []);

  return (
    <div className='AboutUs'>
        <div className='AboutUs-contain'>
        <div className='AboutUs-left'>
            <div className="AboutUs-left-1" data-aos="fade-right">_____________________________________</div>
            <div className="AboutUs-left-2" data-aos="fade-right">
            <span style={{ color: '#07A3FC'}}>NeuroX</span> stands out in the market with its unique blend of neuroscience expertise, high-end technology, and tailored solutions that deliver actionable insights to clients.
        </div>
        <div className="AboutUs-left-3">
            NeuroX is revolutionizing the way businesses understand consumer behavior by merging cutting-edge neuroscience with marketing strategies. Our team of experts utilizes state-of-the-art technologies such as EEG, Facial Coding , and Eye Tracking to uncover deep insights into consumer preferences, emotions, and decision-making processes.
        </div>
        </div>
        <div className='AboutUs-right'>
          <video autoPlay loop muted className='AboutUs-right_video' data-aos="fade-left" style={{ width: '52vw', height: '40vh' }}>
            <source src={Detail_video} type="video/mp4" className='AboutUs-right_video-1' />
          </video>
          <p className="AboutUs-right-1">AN ANALYSIS OF NEURONS</p>
          <img src={MoreOver} alt="MoreOver" className="AboutUs-right_MoreOver" />
        <div className="AboutUs-right-2" data-aos="fade-left">_____________________________________</div>
        </div>
        </div>
    </div>
  )
}

export default AboutUs