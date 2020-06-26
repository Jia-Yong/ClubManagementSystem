import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DisplayStudent extends Component {
constructor (props) {
  super(props)
  this.state = {
    students: []
  }
}

componentDidMount () {
  axios.get('/api/students').then(response => {
    this.setState({
      students: response.data
    })
  })
}

render () {
  const { students } = this.state
  return (
          <div className='card'>
            <div className='card-header'><h1>Student List:</h1></div>
            <div className='card-body'>
              <ul>
                {students.map(student => (
                  <Link style={{display: 'inline'}}
                    to={`students/${student.id}`}
                    key={student.id}
                  >
                  |  {student.name} (Club ID:
                    {student.club_id})  |
                  </Link>
                ))}
              </ul>
            </div>
          </div>
  )
}
}

export default DisplayStudent
