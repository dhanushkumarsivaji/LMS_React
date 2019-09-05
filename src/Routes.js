import React from 'react'
import {Route} from 'react-router-dom'
import Signin from './core/signin'
import signin2 from './core/signin2'
import Home from './core/home'
import Admin from './core/AdminDashboard'
import User from './core/userDashboard'
import AdminRoute from './auth/AdminRoute'
import PrivateRoute from './auth/PrivateRoute'    
const Routes = () => {
    return(
  
        <div>
        <main>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/user" component={User}/>
          <AdminRoute exact path="/admin" component={Admin}/>
        </main>
      </div>

    )
}

export default Routes;


