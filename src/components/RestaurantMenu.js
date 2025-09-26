import { useEffect } from "react";

const RestaurantMenu = () => {

    useEffect(()=> {
        FetchMenu();
    }, []);

    const FetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5399515&lng=77.25915789999999&restaurantId=1022629&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();

        console.log(json);
    }
    return(
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Soft Drinks</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;