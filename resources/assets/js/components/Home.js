import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
constructor (props) {
  super(props)
}

render () {
  return (
          <div className='card'>
            <div className='card-header'><h1>Clubs Management</h1></div>
            <div className='card-body'><h2>
              <Link className='btn btn-primary btn-sm mb-3' to='/create-club'>
                Create A Club
              </Link>
            </h2></div>
            <div className='card-body'><h2>
              <Link className='btn btn-primary btn-sm mb-3' to='/display-club'>
                Display Clubs
              </Link>
            </h2></div>
            <div className='card-body'><h2>
            <Link className='btn btn-primary btn-sm mb-3' to='/create-student'>
              Add A Student
            </Link>
            </h2></div>
            <div className='card-body'><h2>
            <Link className='btn btn-primary btn-sm mb-3' to='/display-student'>
              Display Students
            </Link>
            </h2></div>
          </div>
  )
}
}

export default Home
