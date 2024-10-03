import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'

const Fleet = () => {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    // Example data fetching logic
    // Replace this with your actual data fetching logic
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/AscentRentals/cars'); // Replace with your API endpoint
        const data = await response.json();
        console.log(data);
        setMydata(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="pb-24 pt-12 bg-white dark:bg-black dark:text-white">
      <div className="container">
        <h1 className="text-3xl sm:text-4xl font-bold audiowide-regular">Our Luxury Fleet</h1>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {mydata.map((data) => {
              return (
                <div
                  key={data.id} // Ensure each child has a unique key
                  className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                >
                  <div className="w-full h-[120px]">
                    <img
                      className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700s"
                      src={data.image_Url}
                      alt={data.name} // Provide an alt text
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold audiowide-regular">{data.name}</h2>
                    <p className="text-lg audiowide-regular">{data.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Fleet;