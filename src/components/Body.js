import { restaurantList } from "../Contants";
import Restaurantcart from "./Restaurantcart";
import Cuisines from "./Cuisines";

const Body = () => {
    return (
        <>
            < Cuisines />
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