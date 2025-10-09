import { use, useContext, useEffect, useState } from "react";
import { restaurantList } from "../utils/config";
import RestaurantCard, { PromotedRestaurant } from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserInfoContext from "../utils/UserInfoContext";

//useContext example

//filter search funtion
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  const {setUserName} = useContext(UserInfoContext);

  //promoted restaurants (Higher order comp)
  const PromotedRestaurantCard = PromotedRestaurant(RestaurantCard);

  //API call to get all restaurants
  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  //API call to get all restaurants
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //setRestaurants()
  }

  //Conditional Rendering
  //if restraurant loads -> Restuarants
  //if restaurant not load -> Shimmer UI

  //not render component (Early Return)

  //Online Status Feature
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline! Please check your internet connection</h1>
    );

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="search-container m-2 ">
        <input
          type="text"
          className="search-input border border-solid border-black rounded-lg mr-4"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn pl-6 pr-3 border rounded-lg bg-blue-500 text-white"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //filterData();
            //update the data
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <label className="ml-5">Username: </label>
        <input
          type="text"
          className="search-input border border-solid border-black rounded-lg mr-4 px-3" onChange={(e)=>{
          setUserName(e.target.value)
          }}
        />
      </div>
      <div className="restaurant-card-list flex flex-wrap  ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              className="m-1 border w-[220px] bg-stone-200 rounded-sm "
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <PromotedRestaurantCard {...restaurant.info} />
              ) : (
                <RestaurantCard {...restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
