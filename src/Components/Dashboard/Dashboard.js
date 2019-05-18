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
    //Above I set initial state of inventory to be an empty array, that is what i will map over and return the Component Product with the props being different values based on the product being mapped.

    componentDidMount() {
        axios.get('/api/inventory')
        .then(inventory => {
            this.handleUpdateInventory(inventory.data)
        })
    }

    //When the page loads I want to grab the list of products and then display them which I do by setting state to the inventory

    handleUpdateInventory = (val) => {
        this.setState({inventory: val})
    }

    //I made the above function pretty late on when I realized I needed to pass a function down to Product so I could modify the inventory array on state of Dashboard so when I delete a product my inventory array would update.

    render() {
        const {inventory} = this.state
        let displayProducts = inventory.map(product => {
            return (
                <Product key={product.id} id={product.id} name={product.name} price={product.price} img={product.img} handleUpdateInventory={this.handleUpdateInventory} />
                // These are the values I want to pass down to Product to change the name, price, and img based on the prop values
            )
        })
        return (
            <div className="productDisplayDashboard">
                {displayProducts}
            </div>
        )
    }
}