import React from 'react'
import Navbar from './Navbar'


function Booking() {
  return (
    <>
    <Navbar/>
    <div className="w-screen">
      <div className="relative mx-auto mt-20 mb-20 max-w-screen-lg overflow-hidden rounded-t-xl bg-white py-32 text-center ">
        <h1 className="mt-2 px-8 text-3xl font-bold text-black md:text-5xl audiowide-regular">Reserve Your Vehicle</h1>
        <p className="mt-6 text-lg text-black audiowide-regular">Get ready to explore in luxury!</p>

      </div>

      <div className="mx-auto grid max-w-screen-lg px-6 pb-20">
        <div>
          <p className="font-serif text-xl font-bold audiowide-regular">Choose Your Vehicle</p>
          <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
            {['2024 Range Rover SV', '2024 Mercedes Benz S580', '2024 Porsche 991 GT3'].map((service, index) => (
              <div className="relative" key={index}>
                <input className="peer hidden" id={`radio_${index + 1}`} type="radio" name="radio" />
                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-violet-400"></span>
                <label 
                  className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-violet-600 peer-checked:text-white" 
                  htmlFor={`radio_${index + 1}`}
                >
                  <span className="mt-2 font-medium">{service}</span>
                  <span className="text-xs uppercase">1 Hour</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mt-8 font-serif text-xl font-bold audiowide-regular">Choose Your Start Date</p>
          <div className="relative mt-4 w-56">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg 
                aria-hidden="true" 
                className="h-5 w-5 text-gray-500" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fillRule="evenodd" 
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" 
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input 
              type="text" 
              className="datepicker-input block w-full rounded-lg border border-violet-300 bg-violet-50 p-2.5 pl-10  outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm" 
              placeholder="Select date" 
            />
          </div>
        </div>

        <div>
          <p className="mt-8 font-serif text-xl font-bold audiowide-regular">Select a time</p>
          <div className="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
            {['09:00', '12:00', '14:00', '15:00'].map((time, index) => (
              <button 
                key={index} 
                className={`rounded-lg px-4 py-2 font-medium ${time === '09:00' ? 'bg-emerald-700 text-white' : 'bg-emerald-100 text-emerald-900'} active:scale-95`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <button className="mt-8 w-56 rounded-full border-8 audiowide-regular px-10 py-4 text-lg font-bold transition hover:translate-y-1">
          Book Now
        </button>
      </div>
    </div>
    </>
  );
}

export default Booking;
