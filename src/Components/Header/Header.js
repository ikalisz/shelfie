import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import '../../App.css'

export default function Header () {
    return (
        <header className="shelfieHeader">
            <img className="shelfieIcon" src={require('../../assets/shelfie_icon.png')} alt=""/>
            <h1>SHELFIE</h1>
            <nav className="shelfieHeaderButtons">
                <Link to='/' ><button className="dashboardButton button font">Dashboard</button></Link>
                <Link to='/add'><button className="addInventoryButton button font">Add Inventory</button></Link>
            </nav>
        </header>
    )
}