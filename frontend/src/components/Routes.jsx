import React from 'react'
import { Route, Routes as R } from 'react-router-dom'
import {Home, Fleet, Booking, Contact, Login, Signup} from './index.js'


function Routes() {
  return (
   <>
   <R>

    <Route path="/fleet" element={<Fleet />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/" element={<Home/>} /> 
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />

   </R>
   </>
  )
}

export default Routes