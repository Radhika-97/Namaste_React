import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resObj);
   return (
      <div className="body">
         <div className="filter">
            <button className="filter-btn" onClick={() => { setListOfRestaurants(listOfRestaurants.filter((res) => res.data.rating > 4)) }}>
                Top Rated Restaurants
            </button>
         </div>
         <div className="res-container">
            {listOfRestaurants.map((restaurant) => {
               return <RestaurantCard key={restaurant.data.resName} resData={restaurant} />
            })}
         </div>
      </div>
   );
}
export default Body;