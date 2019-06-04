import React from 'react';
import {connect} from 'react-redux'
import {sendUser} from '../actions/user'
import Login from './Login'

class Auth extends React.Component {
  state={
    email: '',
    password: '',
    name:''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSend = () => {
    this.props.sendUser(this.state)
    this.setState({
      email: '',
      password: '',
      name: ''
    })
  }


  render () {
    return (
      <main>
        <h1>SIGN UP:</h1>
        <label>
               Name:
        <input type='text' onChange={this.onChange} name ='name' value={this.state.name}/>
        </label>
        <label>
               Email:
        <input type='text' onChange={this.onChange} name ='email' value={this.state.email}/>
        </label>
        <label>
               Password:
        <input type='text' onChange={this.onChange} name ='password' value={this.state.password}/>
        </label>
        <button onClick={this.onSend}>save</button>
        <Login />
      </main>
    )
  }
 
}



export default connect(null, {sendUser}) (Auth);