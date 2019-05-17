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
        axios.get('/api/inventory')
        .then(inventory => {
            this.handleUpdateInventory(inventory.data)
        })
    }

    handleUpdateInventory = (val) => {
        this.setState({inventory: val})
    }

    render() {
        const {inventory} = this.state
        let displayProducts = inventory.map(product => {
            return (
                <Product key={product.id} id={product.id} name={product.name} price={product.price} img={product.img} handleUpdateInventory={this.handleUpdateInventory} />
            )
        })
        return (
            <div className="productDisplayDashboard">
                {displayProducts}
            </div>
        )
    }
}