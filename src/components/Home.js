import React, { useEffect, useState } from "react";
import "./Home.css"
import axios from 'axios';

function About(props)
{
    const [image, setImage] = useState("");

    const getImage = () =>
    {
        axios.get("https://foodish-api.herokuapp.com/api/").then
        (
            (response) =>
            {
                console.log(response.data.image);
                setImage(response.data.image);
            }
        );
    };
    return ( 
        <div>
            <h1> Our Special Menu </h1>
            <button id="btn-get" onClick={getImage}> Discover </button>
            <br></br>
            <img id="img-get" src={image}></img>
            <p> Discover more on our restaurant, try food like never before.</p>
            <p class="slogan"> La Biela Vida, </p>
        </div>
    );
}

export default About