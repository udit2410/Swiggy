import React from 'react';
import { URL } from '../utility';


const RestaurantCard = (props) => {
    console.log(props);
    const {resList}=props;
  return (
    <div className='Card border-2 border-black w-64 h-auto m-4 bg-slate-200 rounded hover:border-gray-200 hover:cursor-pointer hover:scale-105'>
        <img className='w-60 m-auto mt-1 h-64 rounded' src={URL+resList.info.cloudinaryImageId} alt="" />
        <div className="info m-4">
             <h1>{resList.info.name}</h1>
             <h1>Avg. Rating:{resList.info.avgRating}</h1>
             <h1>{resList.info.costForTwo}</h1>
             <h1></h1>
        </div>
       
    </div>
  )
}

export default RestaurantCard;