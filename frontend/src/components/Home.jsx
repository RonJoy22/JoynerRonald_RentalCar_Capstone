import React from 'react';
import Navbar from './Navbar';
import BenzWhite from '../carphotos/BenzWhite.png'
import Footer from './Footer';
import Sketch from '../carphotos/Sketch.jpg'



function Home() {
  return (
    <>
     <div style={{ 
      backgroundImage: `url(${Sketch})`,
      backgroundSize:'cover',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%'
    }}>
        <Navbar />
        <main className='container mx-auto text-center audiowide-regular '>
          <h1 className="Home" style={{
            fontSize: '100px',
            textAlign: 'center',
            margin: '0',
            color: '#8A2BE2',  
          }}>
            Ascent Rentals
          </h1>
          <p className='text-lg mx-auto audiowide-regular ' style={{
            whiteSpace: 'normal',
            wordWrap: 'break-word',
            maxWidth: '800px',
            margin: '20px auto', 
          }}>
                        Offering the best-in-class 
                        fleet in the tristate area for all of your travel needs. Whether it's a 
                        business trip, a family vacation, or a special night on the town,
                        ASCENT will amplify your experience.
          </p>
          <img src={BenzWhite} alt="" />
        </main>
    
     
     <Footer/>
     </div>
    </>
  );
}

export default Home;