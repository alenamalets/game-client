import React from 'react'
import '../styles/fightgame.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {connect} from 'react-redux'
import {updateGameAction} from '../actions/game'

class Game extends React.Component{
  
  playerTwoHealth=(health)=>{
    const game = this.props.games.find(element => 
      element.id == this.props.match.params.id)
    health = health-1
    if (health <= 0) {
      alert('Player1 win')
    }
    else {
      const info = {health2: health}
      this.props.updateGameAction(game.id, info)
    }   
  }

  playerOneHealth=(health)=>{
    const game = this.props.games.find(element => 
      element.id == this.props.match.params.id)
    health = health-1
    if (health <= 0) {
      alert('Player2 win')
    }
    else {
      const info = {health1: health}
      this.props.updateGameAction(game.id, info)
    } 
  }
  
  getName1 = () => {
    const game = this.props.games.find(element => 
      element.id == this.props.match.params.id)
    const user1 = this.props.users.find(element => 
      element.id == game.player1)
    return user1 && user1.name
  }
  getName2 = () => {
    const game = this.props.games.find(element => 
      element.id == this.props.match.params.id)
    const user2 = this.props.users.find(element => 
      element.id == game.player2)
    return user2 && user2.name
  }
  getHealth1 = () => {
    const game = this.props.games.find(element => 
      element.id == this.props.match.params.id)
    return game.health1
  }
  getHealth2 = () => {
    const game = this.props.games.find(element => 
      element.id == this.props.match.params.id)
    return game.health2
  }

  render(){
   const player1 =  this.getName1()
   const player2 = this.getName2()
   const health1 = this.getHealth1()
   const health2 = this.getHealth2()

    return(
    <div className="fight-game">
       <h1> Fight game</h1>
      
        <div className="player-1">

          <p>Name: {player1}</p>
          <p>Health: {health1}</p><br/>
          <div><ProgressBar className ="progress"  role="progressbar" now={health1} 
          label={`${health1}%`} srOnly /></div>
          <img src="http://www.stickpng.com/assets/images/5c6826733ce41c0ef9f4bd23.png"
           alt="player1"
           id="player1-click"
           onClick={() => this.playerOneHealth(health1)}/>
        </div>

          <div className="player-2">
        <div>
          <p>Name:  {player2}</p>
          <p>Health: {health2}</p><br/>
          <div><ProgressBar className ="progress"  role="progressbar" now={health2} 
          label={`${health2}%`} srOnly /></div>
          <img src="https://purepng.com/public/uploads/large/purepng.com-samuraisamuraimilitarymedievalfighterwarriorarmorjapanese-1421526964522deerm.png"
          alt="player1"
          id="player2-click"
          onClick={()=>this.playerTwoHealth(health2)}/>
        </div>
        </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  games: state.game,
  users: state.users
})
export default connect(mapStateToProps, {updateGameAction}) (Game)
