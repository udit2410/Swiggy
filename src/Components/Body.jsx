import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import restaurantList from '../utility';

const Body = () => {
  const [restaurants,setrestaurants]=useState(restaurantList);
  const [filteredrestaurants,setfilteredrestaurants]=useState(restaurantList);

  return (
    <div>
       <div className="body">
           <div className="filter-btn flex  justify-end px-16">
               <button className='mt-4 border-2 border-black p-2 rounded-md bg-slate-300 hover:bg-black hover:text-white'
                 onClick={()=>{
                     const filteredlist= restaurantList.filter((restaurant)=>{
                      return restaurant.info.avgRating>4.0;
                     })
                     setrestaurants(filteredlist);
                 }}
               >Top rated Restaurant</button>
           </div>
           
           <div className="search m-4">
                <input className="border-2 border-black" type="text" />
               <button className='m-2 border-2 border-black px-3 py-2 rounded-md'>
                Search
               </button>
           </div>

           <div className="resCard flex flex-wrap justify-center">
              
                      {
                        restaurants.map((restaurant)=>{
                            return(
                                <RestaurantCard key={restaurant.info.id} resList={restaurant}></RestaurantCard>
                            )
                        })
                      }
                   
                 
               
                

           </div>

       </div>

    </div>
  )
}

export default Body;