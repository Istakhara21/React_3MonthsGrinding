import { useEffect } from "react";

const useRestaurantMenu = (resId) => {

    //Fetchdata
    useEffect(() => {
        fetchData();

    }, [])

    const fetchData = async () => {
        const data = await fetch()
    }

    return resInfo;
}

export default useRestaurantMenu;