import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCard, {vegLabel} from "./MenuCard";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = () => {
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    const VegMenu=vegLabel(MenuCard);

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return(
            <h1>
                Looks like you're offline!!! Check your internet connection
            </h1>
        )
    }

    if (resInfo===null) return <Shimmer /> ;
    const {name, cuisines=[], costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    const path=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    if (path.cards[1]?.card?.card?.itemCards) {
        itemCards = path.cards[1]?.card?.card?.itemCards;
    }
    else if (path.cards[2]?.card?.card?.itemCards) {
        itemCards = path.cards[2]?.card?.card?.itemCards;
    } else if (path?.cards[2]?.card?.card?.categories) {
        itemCards = path.cards[2]?.card?.card?.categories.flatMap(category => category?.itemCards || []);
    }

  return (
    <div className="menu p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
        <p className="text-lg text-gray-600 mb-4">
            {cuisines.join(", ")}
            <span className="block text-green-600 font-medium mt-1">{costForTwoMessage}</span>
        </p>
        <div className="flex flex-wrap">
            {itemCards && itemCards.length > 0 ? (
                itemCards.map(item => 
                    item.card.info.itemAttribute?.vegClassifier === "VEG" 
                    ? <VegMenu key={item.card.info.id} itemData={item.card.info} /> 
                    : <MenuCard key={item.card.info.id} itemData={item.card.info} />
                )
            ) : (
                <p className="text-center text-gray-500 w-full">No items available</p>
            )}
        </div>
    </div>
  )
}

export default RestaurantMenu;