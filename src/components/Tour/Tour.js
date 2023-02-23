import React, { useEffect, useState } from 'react';
import Tours from '../Tours/Tours';
import './Tour.css'

const Tour = () => {
  const [tours,setTour] = useState([])


  // create package delete option
  const Remove = (id)=>{
    const newTour = tours.filter((tour) => tour.id !== id)
    setTour(newTour);
  }

  // fetching data here

  useEffect(() => {
    fetch(`Tourdata.json`)
    .then(res => res.json())
    .then( data => setTour(data))
  },[])

  // data map here
  return (
    <div>
      <h1 className='pt-5 mb-5 pb-3 bg-primary text-light text-center'>Our Tour Package</h1>
      <div className='tour'>

      {
        tours.map(tour => <Tours Remove={Remove} tour={tour} key={tour.id}></Tours>)
      }
      </div>
    </div>
  );
};

export default Tour;