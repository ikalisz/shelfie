import React from 'react'
import {Link} from 'react-router-dom'
import './Product.css'
import axios from 'axios'

export default function Product (props) {
    function deleteProduct() {
        axios.delete(`/api/product/${props.id}`)
        .then(() => {
            props.handleGetInventory()
        })
    }
    return (
        <div className="productDiv">
            <img className="productImg" src={props.img} alt=""/>
            <main className="productInfoAndLinks">
                <div className="productText">
                    <p className="productName text">{props.name}</p>
                    <p className="productPrice text">${props.price}</p>
                </div>
                <footer className="productButtonsFooter">
                    <button onClick={deleteProduct} className="productButton delete">Delete</button>
                    <Link ><button className="productButton edit">Edit</button></Link>
                </footer>
            </main>
        </div>
    )
}