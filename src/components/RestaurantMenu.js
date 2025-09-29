import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  //creating a state variable for updating Res info.
  const [resInfo, setResInfo] = useState();

  const params = useParams();
  console.log(params);

  useEffect(() => {
    FetchMenu();
  }, []);

  const FetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5399515&lng=77.25915789999999&restaurantId=655878&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    // console.log(json);
    setResInfo(json.data);
  };

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
      <h1>{name}</h1>
      <p>{areaName}</p>
      <p>{avgRating}</p>
      <p>{costForTwoMessage}</p>
      <p>{locality}</p>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - ₹{item?.card?.info?.price/100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
