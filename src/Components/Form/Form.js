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
            reset: true,
            submitted: false,
        }
        this.handleResetState = this.handleResetState.bind(this)
    }

    componentDidMount = () => {
        if (this.props.match.params.id) {
            axios.get(`/api/product/${this.props.match.params.id}`)
            .then(product => {
                this.setState({
                    name: product.data[0].name,
                    price: product.data[0].price,
                    img: product.data[0].img,
                    reset: false,
                })
            })
        }
        this.setState({submitted: false,})
    }

    handleResetState() {
        return this.setState({
            name: '',
            price: 0,
            img: 'https://via.placeholder.com/420x300',
        })  
    }

    componentDidUpdate = () => {
        if (!this.props.match.params.id && this.state.reset === false) {
            this.handleResetState()
            this.setState({reset: true})
        }
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
        .then(res => {
            console.log(res.data)
           return this.handleUpdateSubmit()
        })
    }

    handleUpdateProduct = () => {
        const {name, price, img} = this.state
        axios.put(`/api/product/${this.props.match.params.id}`, {name, price, img})
        .then(res => {
            console.log(res.data)
            return this.handleUpdateSubmit()
        })
    }
    
    handleUpdateSubmit = () => {
        this.setState({submitted: true})
        console.log('made it')
    }

    render() {
        console.log(this.state.submitted)
        return (<div>
        {!this.state.submitted ?
            <div className="parentFormDiv">
                <div className="formAddDiv">
                    <img className="formImg" src={this.state.img} alt="" />
                    <div className="imageUrlDiv inputDiv">
                        <p className="formDivText">Image URL:</p>
                        <input className="inputField" type="text" placeholder="Product Image Url here!" onChange={(e) => this.handleUpdateImg(e)} />
                    </div>
                    <div className="productNameDiv inputDiv">
                        <p className="formDivText">Product Name:</p>
                        <input value={this.state.name} className="inputField" type="text" placeholder="Product name here!" onChange={(e) => {this.handleUpdateName(e)}} />
                    </div>
                    <div className="productPriceDiv inputDiv">
                        <p className="formDivText">Price:</p>
                        <input className="inputField" type="number" value={this.state.price} onChange={(e) => this.handleUpdatePrice(e)} />
                    </div>
                    <div className="formButtonsDiv">
                        <Link to='/'><button className="formButton" onClick={this.handleResetState}>Cancel</button></Link>
                        {!this.props.match.params.id?
                        <button className="formButton" onClick={this.handleAddToInventory}>Add to Inventory</button>
                        :
                        <button className="formButton" onClick={this.handleUpdateProduct}>Save Changes</button>
                        }
                    </div>
                </div>
            </div>
            :
            <Redirect to='/' push={true} />
            }
            </div>
        )
    }
}

