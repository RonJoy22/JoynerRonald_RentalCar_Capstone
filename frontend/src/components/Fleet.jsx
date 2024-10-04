import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import Sketch from '../carphotos/Sketch.jpg'

function Fleet() {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    
    async function fetchData(){
      try {
        const response = await fetch('http://localhost:8080/AscentRentals/cars'); 
        const data = await response.json();
        setMydata(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  console.log(mydata);

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
    <main>
      <div className="pb-24 pt-12 bg-transparent">
      <div className="container mx-auto ">
        <h1 className="text-3xl sm:text-4xl font-bold audiowide-regular text-violet-800 text-center py-10 ">Our Luxury Fleet</h1>
        <div>
          <div className="grid padding-10 grid-cols-1 bg-white sm:grid-cols-2 md:grid-cols-3 gap-20">
            {mydata.map((item, index) => {
              return (
                <div
                  key={index} 
                  className="space-y-5 space-x-5  p-3 bg-transparent rounded-xl relative group"
                >
                  <div className="w-full h-[120px]">
                    <img
                      className="w-full h-[120px] bg-transparent object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700s"
                      src={item.image_Url}
                      alt={item.name} 
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold audiowide-regular">{item.name}</h2>
                    <p className="text-lg audiowide-regular">{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </main>
    <Footer/>
    </div>
    </>
  );
};

export default Fleet;