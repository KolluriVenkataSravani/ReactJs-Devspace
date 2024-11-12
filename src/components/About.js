import User from "./User";
import UserClass from "./UserClass";

const About=()=> {
    return(
        <div>
            <h1>About</h1>
            <h2>Welcome to Sravani's App</h2>
            {/* <User name={"Sravani(FC)"}/> */}
            <UserClass name={"Sravani"} location={"Hyderabad"}/>
        </div>
    )
}

export default About;