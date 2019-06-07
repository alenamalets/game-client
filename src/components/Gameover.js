import React from 'react'
import '../styles/gameover.css'
import { Link } from "react-router-dom";

class Gameover extends React.Component{
   
    render () {
        return (<div className="game-over">
            <p>
                <span id="over">Game over.</span><br/>  
               <span id="winner"> Winner: {this.props.winner} </span>
            </p>
          
           <Link className="btn" to="/">Play again </Link>
            </div>
        )
    }
  
}
export default Gameover