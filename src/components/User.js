import { useEffect, useState } from "react";

const User = (props) => {
    const [count,setCount]=useState(0);
  useEffect(()=> {
    const timer=setInterval(() =>{
      console.log("Hi Sravani");
    },1000);
    console.log("useEffect");
    return()=> {
      clearInterval(timer);
      console.log("useEffect Return"); //called when we move to another page
    }
  },[]);
  console.log("render");
  return (
    <div className="user-card">
        <h1>Count={count}</h1>
        <h2>Name: {props.name}</h2>
        <h3>Location: Hyderabad</h3>
        <h4>Contact: 9087654321</h4>
    </div>
  )
}

export default User;