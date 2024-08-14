import React from 'react';
import Web_Solution from '../Web_Solution/Web_Solution';
import Exprince_count from '../Exprince_count/Exprince_count';
import Home_Aboutus from '../Home_Aboutus/Home_Aboutus';
import Services from '../Services/Services';
import ContactUs from '../ContactUs/ContactUs';
import Our_Portfolio from '../Our_Portfolio/Our_Portfolio';

const Home = () => {
  return (
    <div>
      <div id="home">
        <Web_Solution />
      </div>
      <div id="company">
        <Exprince_count />
      </div>
      <div id="aboutus">
        <Home_Aboutus />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="">
        <Our_Portfolio />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;
