import { restaurantList } from "../Contants";
import Restaurantcart from "./Restaurantcart";

const Body = () => {
    return (
        <div className="body">
            {
                restaurantList.map((restaurant) => {
                    return <Restaurantcart {...restaurant.data} key={restaurant.data.id} />
                })
            }

        </div>
    )
}
export default Body;