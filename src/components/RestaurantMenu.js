import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCard, {vegLabel} from "./MenuCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    // const VegMenu=vegLabel(MenuCard);

    const [showIndex, setShowIndex]=useState(null);


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
    const categories=path?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return (
    <div className="menu p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
        <p className="text-lg text-gray-600 mb-4">
            {cuisines.join(", ")}
            <span className="block text-green-600 font-medium mt-1">{costForTwoMessage}</span>
        </p>
        {categories.map((category,index)=><RestaurantCategory key={index} data={category?.card?.card} showItems={index===showIndex && true} setShowIndex={()=>setShowIndex(index)} />)}
    </div>
  )
}

export default RestaurantMenu;