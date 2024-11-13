import { CDN_URL } from "../utils/constants";

const StyleCard= {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard= (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, sla: {deliveryTime}} = resData?.info;
    return(
        <div className="m-4 p-4 w-[250px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col justify-between shadow-lg">
            <img className="rounded-lg h-40 w-full object-cover" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <div className="mt-2">
                <h3 className="font-bold text-lg mb-1">{name}</h3>
                <p className="text-sm text-gray-500 mb-2">{cuisines.join(", ")}</p>
            </div>
            <div className="text-sm flex justify-between text-gray-700 mt-auto">
                <span>{avgRating} stars</span>
                <span>{deliveryTime} mins</span>
            </div>
        </div>
    )
}

export default RestaurantCard;