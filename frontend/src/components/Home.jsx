import React from 'react';
import Navbar from './Navbar';
import BenzWhite from '../carphotos/BenzWhite.png'


// Ensure you have this import

function Home() {
  return (
    <>
        <Navbar />
        <main className='container mx-auto text-center audiowide-regular '>
          <h1 className="Home" style={{
            fontSize: '100px',
            textAlign: 'center',
            margin: '0', // Remove default margin
          }}>
            Ascent Rentals
          </h1>
          <p className='text-lg mx-auto audiowide-regular ' style={{
            whiteSpace: 'normal',
            wordWrap: 'break-word',
            maxWidth: '800px',
            margin: '20px auto', // Add some spacing around the paragraph
          }}>
                        Offering the best in class 
                        fleet for all of your travel needs. From a 
                        business trip, to a family vacation, or a night on the town,
                        ASCENT will amplify your experience.
          </p>
          <img src={BenzWhite} alt="" />
        </main>
    
     
    </>
  );
}

export default Home;