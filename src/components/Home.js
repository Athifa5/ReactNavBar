import React from "react";
import Navbar from "./Nav";
import "./home.css";
import bg from "./image.png";
function Home(){
    return(
        <div>
            <Navbar></Navbar>
            <div className="container">
                <img src={bg} className="bg"></img>
                <div className="centered"><h1>Welcome to Athifa's Portfolio</h1></div>
            </div>
        </div>
        
    );
}
export default Home;