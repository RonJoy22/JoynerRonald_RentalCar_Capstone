import React from 'react';



function Navbar() {
  
      return (
      <>
      <div>
  <div className=' flex flex-col items-center
   text-3xl sm:text-4xl font-bold audiowide-regular'>
    <ul className='flex items-center gap-8 hover:text-violet-600'>
      <li ><a href='/'>HOME</a></li>
      <li><a href='/Fleet'>FLEET</a></li>
      <li><a href='/Booking'>BOOKING</a></li>
      <li><a href='/Contact'>CONTACT US</a></li>
      <div className='flex flex-col items-center gap-3 right-0'>
      <li><a href='/Signup'>Sign Up</a></li>
      <li><a href='/Login'>Login</a></li>
        </div>
      </ul>
        </div>
        </div>
     </>
    );
  } 
 export default Navbar;
