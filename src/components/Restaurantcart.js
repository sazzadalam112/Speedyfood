import { CDN_IMAGE } from "../Contants";

const Restaurantcart = ({
    name,
    cloudinaryImageId,
    cuisines,
    area
}) => {

    return (
        <div className="cart">
            <img src={CDN_IMAGE + cloudinaryImageId} />
            <h2>{name}</h2>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{area}</h4>
        </div>
    );
};
export default Restaurantcart;