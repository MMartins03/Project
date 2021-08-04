import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar()
{
    return (
    <div>
        <header class="header">
            <h1 class="logo"><a href="#">La Biela Vida</a></h1>
            <ul class="main-nav">
            <li><a href="#"><Link to="/Home"> Home </Link></a></li>
            <li><a href="#"><Link to="/"> Current Menu </Link></a></li>
            </ul>
	    </header> 
    </div>
    )
}

export default Navbar