import axios from 'axios'
import React, {Component} from 'react'

class EditStudent extends Component {

  constructor(props){
    super(props);
    this.state = {studentName: '', studentClub: ''};
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    axios.get(`/api/students/${this.props.match.params.id}`)
    .then(response => {
      this.setState({ studentName: response.data.name, studentClub: response.data.club_id});
    })
    .catch(function (error) {
      console.log(error);
    })
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
    axios.put(`/api/students/${this.props.match.params.id}`,students)
    .then((response) => {
      if(response.status === 200 && this.handleValidation()) {
        alert('Student Updated Successfully')
      }
      else if(!this.handleValidation()){
        alert('Student Failed to Update')
      }
      })
  }

  handleDelete(e){
    e.preventDefault();
    const students = {
      name: this.state.studentName,
      club_id: this.state.studentClub
    }
    axios.delete(`/api/students/${this.props.match.params.id}`,students)
    .then((response) => {
      if(response.status === 200) {
        alert('Student Removed')
      }
      else throw Error([response.status, response.statusText].join(' '))
      })
  }

    render() {
      return (
      <div>
        <h1>Edit Student</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Student Name:</label>
                <input type="text" className="form-control" value={this.state.studentName} onChange={this.handleChange1} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Club ID:</label>
                  <input type="text" className="form-control col-md-6" value={this.state.studentClub} onChange={this.handleChange2} />
                </div>
              </div>
            </div><br/>
            <div className="form-group">
              <button className="btn btn-primary">Update</button>
            </div>
        </form>
        <button className='btn btn-primary btn-sm' onClick={this.handleDelete}>Delete</button>
      </div>
      )
    }
}
export default EditStudent
