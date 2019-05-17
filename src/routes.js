import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
    </Switch>
)