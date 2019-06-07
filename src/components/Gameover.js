import React from 'react'
import '../styles/gameover.css'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {logout} from '../actions/user'


class Gameover extends React.Component{
    

    render () {
        return (<div className="game-over">
            <p>
                <span id="over">Game over.</span><br/>  
               <span id="winner"> Winner: {this.props.winner} </span>
            </p>
          
           <Link className="btn" to="/">Play again </Link>
           <button onClick = {()=> this.props.logout(this.props.usetid)}>Log out</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    userid: state.login
  })
export default connect(mapStateToProps, {logout}) (Gameover)
