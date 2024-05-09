import { restaurantList } from "../Contants";
import Restaurantcart from "./Restaurantcart";
import Cuisines from "./Cuisines";
import { useState } from "react";

const Body = () => {

    const [searchtext, setSearchtext] = useState("KFC");
    return (
        <>
            < Cuisines />
            <div className="px-80">
                <input
                    type="text"
                    className="bg-black text-red-500 p-3 rounded-2xl"
                    value={searchtext}
                    placeholder="search"
                    onChange={(e) => {
                        setSearchtext(e.target.value);
                    }}
                />

                <button className="mx-10 bg-gray-700 p-3 rounded-2xl px-5">Submit</button>

            </div>

            <div className="flex flex-wrap px-0 mx-60">
                {
                    restaurantList.map((restaurant) => {
                        return <Restaurantcart {...restaurant.data} key={restaurant.data.id} />
                    })
                }

            </div>
        </>
    )
}
export default Body;