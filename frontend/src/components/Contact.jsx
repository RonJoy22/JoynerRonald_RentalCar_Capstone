import React from 'react'
import BMW from '../carphotos/BMW.png' 
import Navbar from './Navbar'
import Footer from './Footer'
import Sketch from '../carphotos/Sketch.jpg'


const Contact = () => {
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
    <main className=" dark:bg-black
    dark:text-white duration-300 
    sm:min-h-[600px] sm:grid sm:place-content-center">
        <div className="container"> 
        <div className="grid grid-cols-1
         sm:grid-cols-2 place-items-center">
        <div>
        <img src={BMW} alt=""
        className="sm:scale-105 
        sm:translate-x-11 max-h-[210px] 
        drop-shadow [2px_10px_6px_rgba(0,0,0,0.50)]"/>
        </div>
        <div className="space-y-10 bg-white sm:p-16 pb-6">
            <h1
            className="text-3xl sm:text-4xl 
            font-bold text-violet-800 audiowide-regular ">Contact Us</h1>
            <p className="audiowide-regular">
                ASCENT Rentals is here to assist you with any questions or concerns you may have. 
                Please feel free to reach out to us by phone, by email below, or by visiting our showroom.
            </p>
            
            <p className="audiowide-regular"> Address: 395 9th Avenue, New York, NY 10001 </p>
                <p className="audiowide-regular" >Phone: 1-800-ASCENTR (1-800-272-3687) </p>
                <p className="audiowide-regular" >Email: <a href="mailto:r.brownjoyner@gmail.com" className="hover:underline hover:text-violet-500">info@ascentrentals.com</a> </p>
            </div>
        </div>
        </div>
        </main>
        <Footer/>
        </div>
        </>
  )}

export default Contact