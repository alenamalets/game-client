import React from 'react'
import '../styles/fightgame.css'

import ProgressBar from 'react-bootstrap/ProgressBar'


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
        
          
          <img src="http://shogunvseurope.weebly.com/uploads/3/1/2/8/31289321/1432175589.png"
           alt="player1"
           onClick={this.playerTwoAttack}/>
        </div>
        <div className="player-2">
          <p>Name:  Samurai Japan</p><br/>
          <ProgressBar className ="progress"  role="progressbar" now={this.state.health2} 
          label={`${this.state.health2}%`} srOnly />
      
          <img src="https://www.bushidokarate.ie/samurai.png" 
          alt="player1"
          onClick={this.playerOneAttack}/>
        </div>
     
    </div>
    )
  }
}

export default Game