import React from 'react';
import {connect} from 'react-redux'
import {login} from '../actions/user'

class Login extends React.Component {
  state={
    email: '',
    password: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value
    })
  }

  onSend = () => {
    this.props.login(this.state.email, this.state.password)
    this.setState({
      email: '',
      password: ''
    })
  }


  render () {    
    return (
      <main>
        <h1>LOGIN:</h1>
        <label>
               Email:
        <input type='text' onChange={this.onChange} name ='email' value={this.state.email}/>
        </label>
        <label>
               Password:
        <input type='text' onChange={this.onChange} name ='password' value={this.state.password}/>
        </label>
        <button onClick={this.onSend}>confirm</button>
      </main>
    )
  }
 
}



export default connect(null, {login}) (Login);