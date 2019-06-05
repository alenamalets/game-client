import React from 'react'
import '../styles/fightgame.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {connect} from 'react-redux'



class Game extends React.Component{
  state=
  { 
    health1:100 , 
    health2:100,
    show:false
  }

  
  playerOneAttack=()=>{ 
    this.setState({
      ...this.state,
      health2 : this.state.health2 - 1,
   
    })
  
  }

  playerTwoAttack=()=>{
    //return console.log(`player-1 clicked: Let's fight`)
    this.setState({
      health1 : this.state.health1 - 1
    })
   
  }


  render(){
    return(
    <div className="fight-game">
       <h1> Fight game</h1>
      
        <div className="player-1">
          <p>Name: Samurai</p><br/>
         
          <ProgressBar className ="progress"  role="progressbar" now={this.state.health1} 
          label={`${this.state.health1}%`} srOnly />
        
          
          <img src="https://www.pinclipart.com/picdir/middle/239-2395494_samurai-transparent-nordic-clipart.png"
           alt="player1"
           onClick={this.playerTwoAttack}/>
        </div>
        
        <div className="player-2">
          <p>Name:  Samurai Japan</p><br/>
          <ProgressBar className ="progress"  role="progressbar" now={this.state.health2} 
          label={`${this.state.health2}%`} srOnly />
      
          <img src="https://www.pngfind.com/pngs/m/86-869880_samurai-png-picture-silver-samurai-fan-art-transparent.png" 
          alt="player1"
          onClick={this.playerOneAttack}/>
        </div>
     
    </div>
    )
  }
}

const mapStateToProps = state => ({
  player1: state.login
})
export default connect(mapStateToProps, ) (Game)
