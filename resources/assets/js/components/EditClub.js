import axios from 'axios'
import React, {Component} from 'react'

class EditClub extends Component {
  constructor(props){
    super(props);
    this.state = {clubName: ''};
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    axios.get(`/api/clubs/${this.props.match.params.id}`)
    .then(response => {
      this.setState({ clubName: response.data.name});
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleChange1(e){
    this.setState({
      clubName: e.target.value
    })
  }

  handleValidation(){
       let name = this.state.clubName;
       let val = true;
       if(name == ''){
          val = false;
       }
       return val;
     }

  handleSubmit(e){
    e.preventDefault();
    const clubs = {
      name: this.state.clubName
    }
    axios.put(`/api/clubs/${this.props.match.params.id}`,clubs)
    .then((response) => {
      if(response.status === 200 && this.handleValidation()) {
        alert('Club Updated Successfully')
      }
      else if(!this.handleValidation()){
        alert('Club Failed to Update')
      }
      })
  }

  handleDelete(e){
    e.preventDefault();
    const clubs = {
      name: this.state.clubName
    }
    axios.delete(`/api/clubs/${this.props.match.params.id}`,clubs)
    .then((response) => {
      if(response.status === 200) {
        alert('Club Deleted')
      }
      else throw Error([response.status, response.statusText].join(' '))
      })
  }

    render() {
      return (
      <div>
        <h1>Edit Club</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Club Name:</label>
                <input type="text" className="form-control" value={this.state.clubName} onChange={this.handleChange1} />
              </div>
            </div>
            </div>
            <br/>
            <div className="form-group">
              <button className="btn btn-primary">Update</button>
            </div>
        </form>
        <button className='btn btn-primary btn-sm' onClick={this.handleDelete}>Delete</button>
      </div>
      )
    }
}
export default EditClub
