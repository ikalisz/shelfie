import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'
import './Dashboard.css'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            inventory: []
        }
    }

    componentDidMount() {
        this.handleGetInventory()
    }
    
    handleGetInventory = () => {
        axios.get('/api/inventory')
        .then(inventory => {
            console.log(inventory.data)
            this.setState({inventory: inventory.data})
        })
    }

    render() {
        const {inventory} = this.state
        let displayProducts = inventory.map(product => {
            return (
                <Product key={product.id} id={product.id} name={product.name} price={product.price} img={product.img} handleGetInventory={this.handleGetInventory} />
            )
        })
        return (
            <div className="productDisplayDashboard">
                {displayProducts}
            </div>
        )
    }
}