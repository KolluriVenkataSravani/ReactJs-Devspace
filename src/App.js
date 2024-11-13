import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //creates routing configuration for us 
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./components/UserContext";

const Grocery=lazy(()=>import("./components/Grocery"));

const AppLayout=()=>{
    const [userName, setUserName]=useState();
    useEffect(()=>{
        const data={
            name: "Sravani",
        };
        setUserName(data.name);
    },[]);
    return(
        <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children: [
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />,
            }
        ],
        errorElement: <Error />,
    },
]);

const root= ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<RouterProvider router={appRouter} />);  //Rendering functional component onto the web page, babel understands this syntax

