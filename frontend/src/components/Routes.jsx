import React from 'react'
import { Route, Routes as R } from 'react-router-dom'
import {Fleet, Booking, Contact} from './index'


function Routes() {
  return (
   <>
   <R>

    <Route path="/fleet" element={<Fleet />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/contact" element={<Contact />} />
   </R>
   </>
  )
}

export default Routes