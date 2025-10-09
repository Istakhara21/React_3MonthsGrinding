import { IMG_CDN_URL } from "../utils/config";

const ItemList = ({ data }) => {
  // console.log(data);
  return (
    <div className="flex justify-between border-b-1">
      <div>
        <div className="p-4 text-left">
          <span>
            {data.name} - ₹
            {data.price ? data.price / 100 : data.defaultPrice / 100}
          </span>
        </div>
        <div>
          <p className="px-4 py-2 font-light text-left">{data.description}</p>
        </div>
      </div>
      <div className="">
        <img src={IMG_CDN_URL + data?.imageId} className="w-20 h-20 pt-3" />
        <button className="border rounded-md bg-white mt-1">Add+</button>
      </div>
    </div>
  );
};

export default ItemList;
