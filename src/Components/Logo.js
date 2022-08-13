import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'
const Logo = () =>
{
    return (
        <Link className="navbar-brand" to="#">
        <img src={require("./images/image 1.png")} alt="" />
        </Link>
    )
}

export default Logo;
