import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/punkLogo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={punkLogo} alt="punk Logo" className='punkLogo' />
            </div>
            <div className="searchBar">
                <div className="searchIcon">
                    <img src = {searchIcon}></img>
                </div>
                <input type="text" className="searchInput" placeholder='Collection,item or user ...' />
            </div>
            <div className="headerItems">
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className="headerActions">
                <div className="themeSwitchContainer">
                    <img src = {themeSwitchIcon}></img>
                </div>
                <div className="loginButton">
                    GET IN
                </div>
            </div>
        </div>
    )
}

export default Header