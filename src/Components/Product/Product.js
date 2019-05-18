import React from 'react'
import {Link} from 'react-router-dom'
import './Product.css'
import axios from 'axios'

export default function Product (props) {
    function deleteProduct() {
        axios.delete(`/api/product/${props.id}`)
        .then(inventory => {
            return props.handleUpdateInventory(inventory.data)
        })
    }
    //This is the function that sends off a delete request and once it comes back successful then it updates the inventory array sitting on the state of Dashboard.js
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
                    <Link to={`/edit/${props.id}`} ><button className="productButton edit">Edit</button></Link>
                    {/* Here I set all my values equal to the vales i passed down as props in Dashboard.js and then I do styling and display all the data. */}
                </footer>
            </main>
        </div>
    )
}