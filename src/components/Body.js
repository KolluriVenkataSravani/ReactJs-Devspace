import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState } from "react";

const Body= () =>{
    const [resList,setResList]=useState([
        {
            "info": {
                "id": "573360",
                "name": "Chinese Wok",
                "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
                ],
                "avgRating": 4.4,
                "sla": {
                "deliveryTime": 55,
                },
            },
        },
        {
            "info": {
                "id": "573361",
                "name": "KFC",
                "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
                ],
                "avgRating": 3.5,
                "sla": {
                "deliveryTime": 55,
                },
            },
        },
        {
            "info": {
                "id": "573362",
                "name": "Dominos",
                "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
                ],
                "avgRating": 4.2,
                "sla": {
                "deliveryTime": 55,
                },
            },
        },
    ]);
    return(
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        const filteredList=resList.filter((res)=>res.info.avgRating>4);
                        setResList(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restro-container">
                {resList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))};
            </div>
        </div>
    )
}

export default Body;