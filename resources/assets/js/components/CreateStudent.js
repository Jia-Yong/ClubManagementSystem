import axios from 'axios'
import React, {Component} from 'react'

class CreateStudent extends Component {

  constructor(props){
    super(props);
    this.state = {studentName: '', studentClub: ''};
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(e){
    this.setState({
      studentName: e.target.value
    })
  }

  handleChange2(e){
    this.setState({
      studentClub: e.target.value
    })
  }

  handleValidation(){
       let name = this.state.studentName;
       let val = true;
       if(name == ''){
          val = false;
       }
       return val;
     }

  handleSubmit(e){
    e.preventDefault();
    const students = {
      name: this.state.studentName,
      club_id: this.state.studentClub
    }
    let uri = 'http://localhost:8000/api/students';
    axios.post(uri, students)
    .then((response) => {
      if(response.status === 200 && this.handleValidation()) {
      alert('Student Added Successfully')
    }
    else if(!this.handleValidation()){
      alert('Student Failed to Add')
    }
  })
}

    render() {
      return (
      <div>
        <h1>Add A Student</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Student Name:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Club ID:</label>
                  <input type="text" className="form-control col-md-6" onChange={this.handleChange2} />
                </div>
              </div>
            </div><br/>
            <div className="form-group">
              <button className="btn btn-primary">Confirm</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateStudent
