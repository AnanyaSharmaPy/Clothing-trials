import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Home() {
    return (
        <div>
            <h1>OOTD</h1>
            <img src={require('../images/back.jpg')} alt=""/>
            <h4>Welcome! Let us help pick the best outfit for you for everyday and every occasion. Why wait? Let's get started.</h4>
            <Link to="/dresses">Start</Link> 
        </div>
    )
}

export default Home;