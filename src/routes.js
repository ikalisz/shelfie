import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'

export default (
    //Routes just has the routes which help guide the page base on what I click on. I only need 3 routes here because based on the final project website, all I need is my dash board, my form which will change based on if it is being edited or adding a new product. Here I notice the Header is constant so that does not need to be a route and I will display it at the top of the page at all times, so I will put it on App.js
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/add' component={Form} />
        <Route path='/edit/:id' component={Form} />
    </Switch>
)