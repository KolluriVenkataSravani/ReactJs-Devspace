import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: ""
            },
        };
    }
    async componentDidMount(){
        // console.log("Child Component did mount");
        //API call
        const data=await fetch("https://api.github.com/users/kollurivenkatasravani");
        const json= await data.json();
        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render(){
        const {login,location, avatar_url}=this.state.userInfo;
        const {count} = this.state;
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name: {login}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: 9087654321</h4>
            </div>
          )
    }
}

export default UserClass;