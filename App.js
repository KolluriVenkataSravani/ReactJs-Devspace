import React from "react";
import ReactDOM from "react-dom/client";
/*
    <div id="parent">
        <div id="child">
            <h1>"I am h1 tag"</h1>
            <h2>"i am h2 tag"</h2>
        </div>
        <div id="child2">
            <h1>"I am h1 tag"</h1>
            <h2>"i am h2 tag"</h2>
        </div>
    </div>

const parent=React.createElement(
    "div",
    {id:"parent"},[
        React.createElement(
            "div",
            {id:"child"},[
                React.createElement("h1",{},"Sravanii"),
                React.createElement("h2",{},"I am h2 tag")
            ]),
        React.createElement(
            "div",
            {id:"child2"},[
                React.createElement("h1",{},"I am h1 tag"),
                React.createElement("h2",{},"I am h2 tag")
            ])
    ]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
const heading=React.createElement("h1",{id: "heading", abc:"xyz"},"Hello World from React!");// this api takes 3 elements (tag,object-attributes to the tag,content inside h1 tag)
console.log(heading); //js object
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
creating an element is the job of react
when we are rendering something into root it is the job of ReactDOM

const jsxHeading = <h1 id="heading">Namaste React Using JSX</h1>
console.log(jsxHeading);
const Title= () =>(
    <h1 className="head" tabIndex="5">
        Namaste React Using JSX
    </h1>
); // Arrow Function

const Title= function(){
    return(
        <h1 className="head" tabIndex="5">
            Namaste React Using JSX
        </h1>
    );
}; // Normal Function

const number=10000;
const HeadingComponent= () =>(
    <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    {jsxHeading}
    {number}
    <h1>{100+200}</h1>
    <h2>{console.log("abc")}</h2>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
); //Rendering one func component in another func component
*/

const Header= () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://t3.ftcdn.net/jpg/04/03/74/22/360_F_403742248_8DDzcFF4jw05lWqftk2yxzKRpFvpZ01Y.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const StyleCard= {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard= (props) =>{
    const {resData} = props;
    return(
        <div className="res-card" style={StyleCard}>
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}></img>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}

const resObj={
    "info": {
      "id": "708880",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/8ba01310-e5b7-4a90-bef3-98a10bc91238_708880.JPG",
      "locality": "Sydenhams Road",
      "areaName": "Periyampet",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.2,
      "parentId": "547",
      "avgRatingString": "4.2",
      "totalRatingsString": "2.4K+",
      "sla": {
        "deliveryTime": 35,
        "serviceability": "SERVICEABLE",
        "slaString": "25-35 mins",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-01 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-1d5e74a1-d7f4-4095-a97c-45b3fb82dd46"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chennai/kfc-sydenhams-road-periyampet-rest708880",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  };

const Body= () =>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restro-container">
                <RestaurantCard resData={resObj} />
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}




const root= ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<AppLayout />);  //Rendering functional component onto the web page, babel understands this syntax

