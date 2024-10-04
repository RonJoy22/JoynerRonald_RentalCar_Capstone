import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Sketch from '../carphotos/Sketch.jpg'


function Booking() {
  return (
    <>
     <div style={{ 
      backgroundImage: `url(${Sketch})`,
      backgroundSize:'cover',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%'
    }}>
    <Navbar/>
    <div className="w-screen">
      <div className="relative mx-auto mt-5 mb-5 max-w-screen-lg overflow-hidden rounded-t-xl bg-transparent py-32 text-center ">
        <h1 className="mt-2 px-8 text-3xl font-bold text-violet-800 md:text-5xl audiowide-regular">Reserve Your Vehicle</h1>
        <p className="mt-6 text-lg text-black audiowide-regular">Get ready to explore in luxury!</p>

      </div>

      <div class="z-10 w-full mx-auto max-w-md px-6 py-12  rounded-lg">
  <div class="p-10 border-transparent rounded-md">
    <form
    class='bg-white border-transparent'
      method="POST"
      action="https://public.herotofu.com/v1/b6f937b0-8208-11ef-ac58-175de27dd2d1"
      enctype="multipart/form-data"
    >
      <label class="block text-center mb-6">
        <span class="text-black">Name</span>
        <input
          name="name"
          type="text"
          required
          class="
            block
            text-center
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:outline-none
          "
          placeholder="Renter's Name"
        />
      </label>
      <label class="block text-center mb-6">
        <span class="text-black">Email </span>
        <input
          name="email"
          type="email"
          required
          class="
            block
            w-full
            mt-1
            text-center
            border-gray-300
            rounded-md
            shadow-sm
            focus:outline-none
          "
          placeholder="Renter@example.com"
        />
      </label>
      <label class="block text-center mb-6">
        <span class="text-black">Renter Driver's License</span>
        <input
          name="photo"
          type="file"
          required
          class="
            block
            w-full
            mt-1
            text-center
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
        />
      </label>
      <label class="block text-center mb-6">
        <span class="text-black">Pick-up Date</span>
        <input
          name="pickup"
          type="date"
          required
          class="
            block
            w-full
            text-center
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
        />
      </label>
      <label class="block text-center mb-6">
        <span class="text-black">Drop-off Date</span>
        <input
          name="dropoff"
          type="date"
          required
          class="
            block
            w-full
            text-center
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
        />
      </label>
      <label class="block text-center mb-6">
        <span class="text-black"
          >Choose Your Vehicle</span
        >
        <select
          name="present"
          required
          class="
            block
            w-full
            text-center
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
        >
          <option>2024 Range Rover SV</option>
          <option>2024 Mercedes-Benz S580</option>
          <option>2024 Bentley Bentayga</option>
          <option>2024 Lexus RC 350</option>
          <option>2024 Porsche 911 GT3</option>
          <option>2024 Lamborghini Urus</option>
          
        </select>
      </label>
      
      
      <div class="mb-6">
        <div class="mt-2">
          <div>
            <label class="inline-flex text-center">
              <input
                name="offers"
                value="yes"
                type="checkbox"
                required
                class="
                  text-indigo-600
                  border-gray-300
                  rounded
                  shadow-sm
                  text-center
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
              />
              <span class="ml-2 text-center">I agree to the terms and conditions.</span>
            </label>
          </div>
        </div>
      </div>
      <div class="mb-6 text-center">
        <button
          type="submit"
          required
          class="
            h-10
            px-10
            text-white
            bg-violet-700
            rounded-lg
            text-center
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-green-800
            audiowide-regular
          "
        >
          BOOK NOW
        </button>
      </div>
      <div>
        
      </div>
    </form>
  </div>
</div>

           
    </div>
    <Footer/>
    </div>
    </>
  );
}

export default Booking;
