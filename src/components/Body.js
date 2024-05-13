import { restaurantList } from "../Contants";
import Restaurantcart from "./Restaurantcart";
import Cuisines from "./Cuisines";
import { useState } from "react";



function filterData(searchText, restaurants) {
    const filter = restaurants.filter((restaurant) =>
        restaurant.data.name.includes(searchText));
    return filter;

}


const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurant] = useState(restaurantList);

    return (
        <>
            < Cuisines />
            <div className="px-72">
                <input
                    type="input"
                    className="bg-red-500 p-2 font-bold "
                    placeholder=""
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />

                <button
                    onClick={() => {
                        // filter data 
                        const data = filterData(searchText, restaurants);

                        setRestaurant(data);
                    }}
                    className="mx-20 bg-slate-500 p-2 px-5 rounded-xl">Submit</button>

            </div>

            <div className="flex flex-wrap px-0 mx-60">
                {
                    restaurants.map((restaurant) => {
                        return <Restaurantcart {...restaurant.data} key={restaurant.data.id} />
                    })
                }

            </div>
        </>
    )
}
export default Body;