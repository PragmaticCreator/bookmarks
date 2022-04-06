import { Footer, Navbar } from 'components';
import Home from 'pages/Home';
import React from 'react';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 text-blue-dark md:text-lg'>
      <Navbar />
      <main className='flex-grow'>
        <Home/>
      </main>
      <Footer />
    </div>
  );
};

export default App;
