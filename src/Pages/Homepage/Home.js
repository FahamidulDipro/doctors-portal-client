import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;