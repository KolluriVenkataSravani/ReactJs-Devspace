import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState,useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import User from "./User";

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

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return(
            <h1>
                Looks like you're offline!!! Check your internet connection
            </h1>
        )
    }
    const {loggedInUser, setUserName}=useContext(UserContext);

    return (listOfRestaurants.length==0) ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" data-testid="searchInput" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
                    onClick={()=>{
                        console.log(searchText);
                        const filteredRes=listOfRestaurants.filter((res)=>(res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                        setFilteredRestaurants(filteredRes);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 items-center">
                    <button 
                        className="px-4 py-1 bg-gray-100 m-4 rounded-lg" 
                        onClick={()=>{
                            const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.3);
                            setFilteredRestaurants(filteredList);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="search m-4 p-4 items-center">
                    <label>Username: </label>
                    <input type="text" className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteresRestaurants.map((restaurant) => <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>)}
            </div>
        </div>
    )
}

export default Body;