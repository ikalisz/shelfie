import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import './Form.css'
import axios from 'axios'

//This component was the hardest for me to set up, because it will display different things based on if it editing or adding components

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            img: 'https://via.placeholder.com/420x300',
            reset: true,
            submitted: false,
            //Here I set up normal state with 2 important properties, submitted and reset. I will explain how I use them later on.
        }
        this.handleResetState = this.handleResetState.bind(this)
        //this is a normal bind so I could get credit for the competancy.
    }

    componentDidMount = () => {
        if (this.props.match.params.id) {
            //Right here I write an if statement that checks my url, I'm checking if the url has any params, the only reason it would have params is if I pass in the id of the post I want to edit.
            axios.get(`/api/product/${this.props.match.params.id}`)
            //If the if statement is true, i do an axios.get that gets a single post and then sets the state on the form of the values i recieve, this in turn fills my input boxes with the data I recieved, making it able to edit easily.
            .then(product => {
                this.setState({
                    name: product.data[0].name,
                    price: product.data[0].price,
                    img: product.data[0].img,
                    reset: false,
                    //I also set reset to false here. it is normally true so that when I start typing in '/add' it does not reset. I will explain more on why I set it to false here later on in componentDidUpdate.
                })
            })
        }
        this.setState({submitted: false,})
        //here I set the state of submitted to false no matter what, after all I haven't submitted anything yet when i open up this component.

    }

    handleResetState() {
        return this.setState({
            name: '',
            price: 0,
            img: 'https://via.placeholder.com/420x300',
        })  
        //this is a function that I will use when I want to reset my state back to where it is normally.
    }

    componentDidUpdate = () => {
        if (!this.props.match.params.id && this.state.reset === false) {
            //this was the single hardest part of this for me. componentDidUpdate runs everytime something changes in state on the component. You cant set state in here without an if statement because if you set state, that causes an update, so the function will fire over and over. in my if statement what it is doing is checking if I'm going from the edit url to the add url. I'm checking if the url has any params called id on it, if not AND reset on state is false, it will use the function resetting state and then sets reset to true. after resetting to true it will no longer run, that is why ONLY when the component mounts and there are no params on the url it will set reset to true so it does not fire.
    
            this.handleResetState()
            this.setState({reset: true})
        }
    }

    handleUpdateImg = (e) => {
        this.setState({img: e.target.value})
        //the next 3 functions just update state when my inputs change
    }

    handleUpdateName = (e) => {
        this.setState({name: e.target.value})
    }

    handleUpdatePrice = (e) => {
        this.setState({price: e.target.value})
    }

    handleAddToInventory = () => {
        //this function just sends a post requrest and adds a product to my table and then once i get the response back it runs the function handleUpdateSubmit, scroll down further to find out more about what that function does.
        const {name, price, img} = this.state
        axios.post('/api/addproduct', {name, price, img})
        .then(res => {
            res.data
           return this.handleUpdateSubmit()
        })
    }

    handleUpdateProduct = () => {
        //this function sends a put request which will update the product based on the values i give it and the id i give it, when i get a successful request I run handleUpdateSubmit
        const {name, price, img} = this.state
        axios.put(`/api/product/${this.props.match.params.id}`, {name, price, img})
        .then(res => {
            res.data
            return this.handleUpdateSubmit()
        })
    }
    
    handleUpdateSubmit = () => {
        this.setState({submitted: true})
        //this sets the state of submitted to true, down below in my JSX I will explain what submitteds job is
        console.log('made it')
    }

    render() {
        return (<div>
        {!this.state.submitted 
        //What this ternary does is it checks is if submitted is true or false, if it is false it will display the JSX if it is true however, it runs a component called Redirect that is from react-router-dom, Redirect requires one prop, which is the url you want to send the user to, I sent them to the dashboard, and another optional prop called push, which is either true or false, if true it pushes the page you are sending them FROM onto the browser history, if false it does not. Redirect only happens when it is rendered withen the component. This is why I used a ternary which will only render it when submitted is true.
        ?
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

