import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import '../../App.css'

export default function Header () {
    return (
        <header className="shelfieHeader">
            <Link to='/' ><button className="dashboardButton font">Dashboard</button></Link>
        </header>
    )
}