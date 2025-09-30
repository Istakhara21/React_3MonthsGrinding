import { useEffect, useState } from "react";
import { MENU_API_1, MENU_API_2 } from "./config";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    //Fetchdata
    useEffect(() => {
        fetchData();

    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_API_1 + resId + MENU_API_2);
        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;