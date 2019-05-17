import React from 'react'
import {Link} from 'react-router-dom'
import './Product.css'

export default function Product (props) {
    return (
        <div className="productDiv">
            <img src={props.img} alt=""/>
            <main>
                <div>
                    <p>{props.name}</p>
                    <p>${props.price}</p>
                </div>
                <footer>
                    <button>Delete</button>
                    <Link ><button>Edit</button></Link>
                </footer>
            </main>
        </div>
    )
}