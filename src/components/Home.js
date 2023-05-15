import React from 'react';
import './layout/Home.css';
import Cakes from './Cakes';

const Home = () => {
  return (
    <div className='home'>
        <div className='home_container'>
          <div className='home_text'>
            <h1>Sweet Cakes Kenya</h1>
          </div>
          <Cakes />
        </div>
    </div>
  );
};

export default Home;