import { useContext, useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";
import { MENU_API_1, MENU_API_2 } from "../utils/config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  //creating a state variable for updating Res info.
  // const [resInfo, setResInfo] = useState();

  // console.log(useCon);
  const [showIndex, setShowIndex] = useState();

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
      // console.log(  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);
  return (
    <div>
      <div className="menu-title border my-3 rounded-lg p-4 text-center w-6/12 m-auto">
        <h1 className="pb-3 font-bold">{name}</h1>
        <p>
          {areaName}, {costForTwoMessage}
        </p>
      </div>
      <div className="text-center">
        {categories.map((category, index) => (
          <RestaurantCategory key={category?.card?.card?.categoryId} data={category?.card?.card} showItem ={index === showIndex && true} setShowIndex={()=>setShowIndex(index)}/>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
