import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import CreateClub from './CreateClub'
import DisplayClub from './DisplayClub'
import CreateStudent from './CreateStudent'
import DisplayStudent from './DisplayStudent'
import EditClub from './EditClub'
import EditStudent from './EditStudent'

class Main extends Component {
     render () {
       return (
         <BrowserRouter>
           <div>
             <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/create-club' component={CreateClub} />
                <Route path='/display-club' component={DisplayClub} />
                <Route path='/create-student' component={CreateStudent} />
                <Route path='/display-student' component={DisplayStudent} />
                <Route path='/clubs/:id' component={EditClub} />
                <Route path='/students/:id' component={EditStudent} />
             </Switch>
           </div>
         </BrowserRouter>
       )
     }
   }

if (document.getElementById('main')) {
  ReactDOM.render(<Main />, document.getElementById('main'))
}
