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
       

        <h2>Sign In</h2>
       
        <input type='text' onChange={this.onChange} 
        name ='email' value={this.state.email}
        placeholder="email id"/><br/>
       
       
        <input type='text' onChange={this.onChange} 
        name ='password' value={this.state.password}
        placeholder="password"/><br/>
      
        <button onClick={this.onSend}>Sign In</button>
      </main>
    )
  }
 
}



export default connect(null, {login}) (Login);