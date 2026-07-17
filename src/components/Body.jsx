import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredRestaurants, setFilteredRestaurants] = useState([]);

   const [searchText, setSearchText] = useState("");
   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      const restaurantCard = json.data.cards.find(
         (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setListOfRestaurants(
         restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
      setFilteredRestaurants(
         restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
   };


   return listOfRestaurants.length === 0 ? <Shimmer /> : (
      <div className="body">
         <div className="search">
            <input type="text" className="search-box" placeholder="Search for restaurants and food" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button className="search-btn" onClick={() => { 
               const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
               setFilteredRestaurants(filteredRestaurants);
               }}>
               Search
            </button>
         </div>
         <div className="filter">
            <button className="filter-btn" onClick={() => {
               const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
               );
               setFilteredRestaurants(filteredList);
            }}>   
               Top Rated Restaurants
            </button>
         </div>
         <div className="res-container">
            {filteredRestaurants.map((restaurant) => {
               return <RestaurantCard
                  key={restaurant.info.id}
                  resData={restaurant}
               />
            })}
         </div>
      </div>
   );
}
export default Body;