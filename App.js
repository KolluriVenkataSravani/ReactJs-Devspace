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
*/
// const parent=React.createElement(
//     "div",
//     {id:"parent"},[
//         React.createElement(
//             "div",
//             {id:"child"},[
//                 React.createElement("h1",{},"Sravanii"),
//                 React.createElement("h2",{},"I am h2 tag")
//             ]),
//         React.createElement(
//             "div",
//             {id:"child2"},[
//                 React.createElement("h1",{},"I am h1 tag"),
//                 React.createElement("h2",{},"I am h2 tag")
//             ])
//     ]);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// const heading=React.createElement("h1",{id: "heading", abc:"xyz"},"Hello World from React!");// this api takes 3 elements (tag,object-attributes to the tag,content inside h1 tag)
// console.log(heading); //js object
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//creating an element is the job of react
//when we are rendering something into root it is the job of ReactDOM

const jsxHeading = <h1 id="heading">Namaste React Using JSX</h1>
console.log(jsxHeading);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);