import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'

function Fleet() {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    // Example data fetching logic
    // Replace this with your actual data fetching logic
    async function fetchData(){
      try {
        const response = await fetch('http://localhost:8080/AscentRentals/cars'); // Replace with your API endpoint
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
    <Navbar/>
    <main>
      <div className="pb-24 pt-12 bg-white dark:bg-black dark:text-white">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold audiowide-regular text-center ">Our Luxury Fleet</h1>
        <div>
          <div className="grid padding-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {mydata.map((item, index) => {
              return (
                <div
                  key={index} // Ensure each child has a unique key
                  className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                >
                  <div className="w-full h-[120px]">
                    <img
                      className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700s"
                      src={item.image_Url}
                      alt={item.name} // Provide an alt text
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
    </>
  );
};

export default Fleet;