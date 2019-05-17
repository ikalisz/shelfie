import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import './Form.css'
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            img: 'https://via.placeholder.com/420x300',
            submitted: false,
        }
        this.handleResetState = this.handleResetState.bind(this)
    }

    componentDidMount = () => {
        this.handleResetState()
    }

    handleResetState() {
        this.setState({
            name: '',
            price: 0,
            img: 'https://via.placeholder.com/420x300',
        })
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
        .then(() => {
            this.setState({submitted: true})
        })
    }

    render() {
        if (this.state.submitted) {
            return <Redirect to='/' push={true} />
        }
        return (
            <div className="parentFormDiv">
                <div className="formAddDiv">
                    <img className="formImg" src={this.state.img} alt="" />
                    <div className="imageUrlDiv inputDiv">
                        <p className="formDivText">Image URL:</p>
                        <input className="inputField" type="text" placeholder="Product Image Url here!" onChange={(e) => this.handleUpdateImg(e)} />
                    </div>
                    <div className="productNameDiv inputDiv">
                        <p className="formDivText">Product Name:</p>
                        <input className="inputField" type="text" placeholder="Product name here!" />
                    </div>
                    <div className="productPriceDiv inputDiv">
                        <p className="formDivText">Price:</p>
                        <input className="inputField" type="number" value={this.state.price} onChange={(e) => this.handleUpdatePrice(e)} />
                    </div>
                    <div className="formButtonsDiv">
                        <Link to='/'><button className="formButton" onClick={this.handleResetState}>Cancel</button></Link>
                        <button className="formButton" onClick={this.handleAddToInventory}>Add to Inventory</button>
                    </div>
                </div>
            </div>
        )
    }
}

