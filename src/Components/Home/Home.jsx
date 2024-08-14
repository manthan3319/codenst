import React from 'react';
import Web_Solution from '../Web_Solution/Web_Solution';
import Exprince_count from '../Exprince_count/Exprince_count';
import Home_Aboutus from '../Home_Aboutus/Home_Aboutus';
import Services from '../Services/Services';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
  return (
    <div>
      <Web_Solution/>
      <Exprince_count/>
      <Home_Aboutus/>
      <Services/>
      <ContactUs/>
    </div>
  );
}

export default Home;
