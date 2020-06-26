import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DisplayClub extends Component {
constructor (props) {
  super(props)
  this.state = {
    clubs: []
  }
}

componentDidMount () {
  axios.get('/api/clubs').then(response => {
    this.setState({
      clubs: response.data
    })
  })
}

render () {
  const { clubs } = this.state
  return (


          <div className='card'>
            <div className='card-header'><h1>Club List:</h1></div>
            <div className='card-body'>
              <ul>
                {clubs.map(club => (
                  <Link
                    to={`clubs/${club.id}`}
                    key={club.id}
                  >
                  |  {club.name}  |
                  </Link>
                ))}
              </ul>
            </div>
          </div>
  )
}
}

export default DisplayClub
