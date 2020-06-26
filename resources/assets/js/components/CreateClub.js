import axios from 'axios'
import React, {Component} from 'react'

class CreateClub extends Component {
  constructor(props){
    super(props);
    this.state = {clubName: ''};
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    let uri = 'http://localhost:8000/api/clubs';
    axios.post(uri, clubs)
      .then((response) => {
      if(response.status === 200 && this.handleValidation()) {
        alert('Club Created Successfully')
      }
      else if(!this.handleValidation()){
        alert('Club Failed to Create')
      }
    })
  }

    render() {
      return (
      <div>
        <h1>Create A Club</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Club Name:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} />
              </div>
            </div>
            </div>
            <br/>
            <div className="form-group">
              <button className="btn btn-primary">Confirm</button>
            </div>
        </form>
      </div>
      )
    }
}
export default CreateClub
