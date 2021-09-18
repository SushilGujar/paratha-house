import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo_wheat.png";
import './header.styles.scss';

export default function Header(props) {
    return(
        <div className='header'>
           <Link to='/' className='logo-container'><img src={Logo} className='logo' alt='icon'></img></Link>
           <div className='menu-container'>
               <Link to='/' className='option'>Home</Link>
               <Link to='/shop' className='option'>Shop</Link>
               <Link to='/signup' className='option'>Sign In</Link>
               <Link to='/cart' className='option'>Cart</Link>
           </div>
        </div>
    );
};