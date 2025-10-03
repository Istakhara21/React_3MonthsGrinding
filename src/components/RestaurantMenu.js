import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";
import { MENU_API_1, MENU_API_2 } from "../utils/config";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
  //creating a state variable for updating Res info.
  // const [resInfo, setResInfo] = useState();



  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return <ShimmerUI />;
  }

  const info = resInfo?.cards?.[2]?.card?.card?.info;
  if (!info) {
    return <ShimmerUI />;
  }

  const { name, areaName, avgRating, costForTwoMessage, locality } = info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  //   console.log(itemCards);
  return (
    <div className="menu">
      <div className="menu-title border m-4 rounded-lg">
        <h1 className="pl-4 font-bold">{name}</h1>
        <p className="pl-4">{areaName}</p>
        <p className="pl-4">{avgRating}</p>
        <p className="pl-4">{costForTwoMessage}</p>
        <p className="pl-4">{locality}</p>
      </div>
      <ul className="menu-title border m-4 rounded-lg font-sans">
        {itemCards.map((item) => (
          <li className="pl-4 font-mono" key={item?.card?.info?.id}>
            {item?.card?.info?.name} - ₹{item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
