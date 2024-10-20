import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body= () =>{
    const [listOfRestaurants,setResList]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async () => {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        const cardData=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList(cardData);
    }

    if(listOfRestaurants.length==0){
        return <Shimmer />
    }

    return(
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4);
                        setResList(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restro-container">
                {listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))};
            </div>
        </div>
    )
}

export default Body;