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

const RestaurantCard= () =>{
    return(
        <div className="res-card" style={StyleCard}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/j88ngtan5pxib04das3y"></img>
            <h3>Ghuma Ghumalu</h3>
            <h4>Biryani, Andhra, Asian</h4>
            <h4>4.1 stars</h4>
            <h4>45-50 Mins</h4>
        </div>
    )
}

const Body= () =>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restro-container">
                <RestaurantCard />
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

