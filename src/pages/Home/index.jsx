import { Newsletter } from 'components';
import { Features, Hero, Extentions, FAQ } from 'containers';
import React from 'react';

const Home = () => {
  return (
    <div className='leading-7'>
      <section className='mt-24'>
        <Hero />
      </section>

      <section className='section'>
        <Features />
      </section>

      <section className='section'>
        <Extentions />
      </section>

      <section className='section'>
        <FAQ />
      </section>

      <section className='section'>
        <Newsletter />
      </section>
    </div>
  );
};

export default Home;
