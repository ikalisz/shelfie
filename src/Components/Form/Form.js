import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Form.css'
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            img: '',
            changed: false,
        }
        this.handleResetState = this.handleResetState.bind(this)
    }

    handleResetState() {
        this.setState({
            name: '',
            price: 0,
            img: '',
            changed: false,
        })
    }

    componentDidUpdate = () => {
       this.setState({changed: true})
    }

    handleUpdateImg = (e) => {
        this.setState({img: e.target.value})
    }

    handleUpdateName = (e) => {
        this.setState({name: e.target.value})
    }

    handleUpdatePrice = (e) => {
        this.setState({price: e.target.value})
    }

    handleAddToInventory = () => {
        const {name, price, img} = this.state
        axios.post('/api/addproduct', {name, price, img})
    }

    render() {
        return (
            <div className="parentFormDiv">
                <div className="formAddDiv">
                    <img />
                    <div className="imageUrlDiv">
                        <p>Image URL:</p>
                        <input type="text" placeholder="Product Image Url here!" onChange={(e) => this.handleUpdateImg(e)} />
                    </div>
                    <div className="productNameDiv">
                        <p>Product Name:</p>
                        <input type="text" placeholder="Product name here!" />
                    </div>
                    <div className="productPriceDiv">
                        <p>Price:</p>
                    </div>
                    <div className="formButtonsDiv">
                        <Link to='/'><button onClick={this.handleResetState}>Cancel</button></Link>
                        <Link to='/'><button>Add to Inventory</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

