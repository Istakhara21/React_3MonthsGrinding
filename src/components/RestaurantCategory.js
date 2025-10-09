import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  //state for hiding and open itemList
//   const [showItem, setShowItem] = useState(false);
  // console.log(data);
  const itemListData = data.itemCards;
  // console.log(itemListData);

  const handleClick = () => {
    // console.log("Clicked");
    // setShowItem(!showItem)
    setShowIndex();
  };
  return (
    <div className="border mb-2  py-2 px-5 shadow-md rounded-md font-medium bg-stone-100 w-6/12 m-auto">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        {/* Header */}
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItem ? "⬆️" : "⬇️"}</span>
        {/* Accordian */}
      </div>
      {showItem &&
        itemListData.map((items) => (
          <ItemList key={items?.card?.info?.id} data={items?.card?.info} />
        ))}
    </div>
  );
};

export default RestaurantCategory;
