import { use, useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("Hello");
  return (
    <>
    <div className="search-container">
        <input type="text" className="search-input" value={searchText}
        onChange={(e) => {
            setSearchText(e.target.value);
        }} />
        <button className="search-btn" onClick={() => {
            // //need to filter the data
            // const data = filterData(searchText, restaurants);
            // //filterData();
            // //update the data
            // setRestaurants(data);
        }}>Search</button>
    </div>
      <div className="restaurant-card-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
