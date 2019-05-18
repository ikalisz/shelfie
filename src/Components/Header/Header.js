import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import '../../App.css'

export default function Header () {
    return (
        <header className="shelfieHeader">
            <img className="shelfieIcon" src={require('../../assets/shelfie_icon.png')} alt=""/>
            {/* Above i just import the img src as the icon by moving the assests folder they gave us into my src folder NOTE THAT I ADDED ASSESTS TO THE .GITIGNORE */}
            <h1>SHELFIE</h1>
            {/* Below I wrap the two buttons in a nav tag to help with using semantic tags and also to make it easier in styling */}
            <nav className="shelfieHeaderButtons">
                <Link to='/' ><button className="dashboardButton button font">Dashboard</button></Link>
                {/* This button above links to home in case the user is adding or editing a product they can go back home at all times. */}
                <Link to='/add'><button className="addInventoryButton button font">Add Inventory</button></Link>
                {/* This button will link to adding a new product and display a new component on that route which will be a form to add a new product */}
            </nav>
        </header>
    )
}
// This is my Header/navbar component. This will display at the top of the page no matter what page the user is on. This will have the Shelfie logo, text, and the two buttons that will link to home and to add, I know that the add to inventory button will only link to adding a new product and nothing else so I can use the Link to='/add'