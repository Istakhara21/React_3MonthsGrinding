import { useContext } from "react";
import { IMG_CDN_URL } from "../utils/config";


const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="card p-3  ">
      <img
        className="rounded-lg w-[100%] h-[200px] object-cover"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h2 className="font-bold py-2">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

//Higher order component
//To check promoted restaurants
export const PromotedRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="font-bold">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
