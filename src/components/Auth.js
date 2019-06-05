import React from 'react';
import {connect} from 'react-redux'
import {sendUser} from '../actions/user'
import Login from './Login'
import '../styles/signup.css'

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
      <main >
        <div className="signup">
        <h1>Sign up Now!</h1>

      
        <input type='text' onChange={this.onChange} 
        name ='name' value={this.state.name}
        placeholder='username'/><br/>

       
        <input type='text' onChange={this.onChange} 
        name ='email' value={this.state.email}
        placeholder='email id'/><br/>
       
       
        <input type='text' onChange={this.onChange}
         name ='password' value={this.state.password}
         placeholder='password'/><br/>
      
        <button onClick={this.onSend}>Sign up</button><br/>
        </div>
        <div className="login">
        <Login/>
        </div>
      
      </main>
    )
  }
 
}



export default connect(null, {sendUser}) (Auth);