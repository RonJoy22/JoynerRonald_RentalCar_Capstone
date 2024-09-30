import React from 'react'
import BMW from '../carphotos/BMW.png' 


const Contact = () => {
  return (
    <div className=" dark:bg-black
    dark:text-white duration-300 
    sm:min-h-[600px] sm:grid sm:place-content-center">
        <div className="container"> 
        <div className="grid grid-cols-1
         sm:grid-cols-2 place-items-center">
        <div
        data-aos="fade-right"
        >
        <img src={BMW} alt=""
        className="sm:scale-105 
        sm:translate-x-11 max-h-[210px] 
        drop-shadow [2px_10px_6px_rgba(0,0,0,0.50)]"/>
        </div>
        <div className="space-y-10 sm:p-16 pb-6">
            <h1 data-aos="fade-up"
            className="text-3xl sm:text-4xl 
            font-bold font-serif">Contact Us</h1>
            <p data-aos="fade-up">
                ASCENT Rentals is here to assist you with any questions or concerns you may have. 
                Please feel free to reach out to us by phone, email, or by visiting our office.
            </p>
            
            <p data-aos="fade-up"> Address: 395 9th Avenue, New York, NY 10001 </p>
                <p data-aos="fade-up">Phone: 1-800-ASCENTR (1-800-272-3687) </p>
                <p data-aos="fade-up">Email: info@ascentrentals.com </p>
            </div>
        </div>
        </div>
        </div>
  )}

export default Contact