import React from 'react'
import BenzWhite from '../carphotos/BenzWhite.png'
import Navbar from './Navbar';

 
const Hero = ({theme, setTheme}) => {
  return (
    <>
    <Navbar theme={theme} setTheme={setTheme} /> 
    <div className=" dark:bg-black 
        dark:text-white duration-300 relative -z-20">   
        
        <div  className="container min-h-[620px] flex">
            <div className="grid place-items-center grid-cols-1">
                <div 
                className="order-1 sm:order-2">
                    <img src={theme === "dark" ? BenzWhite :
                    BenzWhite} alt=""
                     className="relative -z-10 max-h-[500px] sm:scale-125 
                     drop-shadow-[2px_20px_6px_rgba(0_0_0_0.50)]"
                     />
                </div>
                <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
                    <p 
                    data-aos="fade-up"
                    className="text-primary text-2xl font-serif">
                        Explore In Granduer</p>
                    <p>
                        ASCENT Rentals offers the best in class 
                        fleet for all of your travel needs. From a 
                        business trip, to a family vacation, or a night on the town,
                        ASCENT will amplify your experience.
                    </p>
                    <button 

                    data-aos="fade-up"
                    className="btn bg-primary text-black 
                    px-6 py-2 rounded-lg hover:bg-primary/80">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
  );
};

export default Hero