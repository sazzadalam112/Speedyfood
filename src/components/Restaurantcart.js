import { CDN_IMAGE } from "../Contants";

const Restaurantcart = ({
    name,
    cloudinaryImageId,
    cuisines,
    area
}) => {

    return (

        <div className="w-72 p-4">
            <img className="w-72 h-44 rounded-lg" src={CDN_IMAGE + cloudinaryImageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{area}</h4>
        </div>

    );
};
export default Restaurantcart;