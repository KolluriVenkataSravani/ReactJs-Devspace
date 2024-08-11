/*
    <div id="parent">
        <div id="child">
            <h1></h1>
        </div>
    </div>
*/
const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I am h1 tag")));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// const heading=React.createElement("h1",{id: "heading", abc:"xyz"},"Hello World from React!");// this api takes 3 elements (tag,object-attributes to the tag,content inside h1 tag)
// console.log(heading); //js object
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//creating an element is the job of react
//when we are rendering something into root it is the job of ReactDOM