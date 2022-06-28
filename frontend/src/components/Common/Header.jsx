import React from 'react';
import Logo from '../../assets/img/A2Z-logo.svg';
import Search from '../../assets/img/Icon awesome-search.svg';
import UserPic from '../../assets/img/Mask Group 69.svg';
import cartimage from '../../assets/img/Icon zocial-cart.svg';
const Header = () => {
    return (
        <nav class="navbar">
            <img src={Logo} alt="" />
            <div class="inputfield">
                <p>
                    All categories
                    <select></select>
                </p>
                <input type="text" placeholder="search here" />
                <button id="search">
                    <img src={Search} alt="" />
                </button>
            </div>
            <div class="userinfo">
                <img src={UserPic} alt="" />
                <p>Name</p>
                <select></select>
            </div>
            <div class="cartinfo">
                <img src={cartimage} alt="" />
                <p>Item in Cart</p>
                <select></select>
            </div>
            <div class="hiddenicons">
                <img src="img/search.svg" alt="" />
                <img src="img/scart.svg" alt="" />
                <img src="img/menuicon.svg" alt="" onclick="open()" />
                <div class="menu" id="menuoption">
                    <p>Sign in</p>
                    <p>Login</p>
                    <button onClick="close()">close</button>
                </div>
                <h1 id="di"></h1>
            </div>
        </nav>
    );
};

export default Header;
