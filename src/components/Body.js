import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body= () =>{
    const [listOfRestaurants,setResList]=useState([]);
    const [filteresRestaurants,setFilteredRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async () => {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        const cardData=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants; //Optional Chaining
        setResList(cardData);
        setFilteredRestaurants(cardData);
    }

    // Conditional Rendering
    // if(listOfRestaurants.length==0){
    //     return <Shimmer />;
    // }

    return (listOfRestaurants.length==0) ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                    <button onClick={()=>{
                        console.log(searchText);
                        const filteredRes=listOfRestaurants.filter((res)=>(res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                        setFilteredRestaurants(filteredRes);
                    }}>Search</button>
                </div>
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
                {filteresRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))};
            </div>
        </div>
    )
}

export default Body;