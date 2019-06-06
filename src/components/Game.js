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
      const info = {health2: health}
      this.props.updateGameAction(game.id, info)
      setTimeout(() => {
        alert('Player1 win');
      }, 500)
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
      const info = {health1: health}
      this.props.updateGameAction(game.id, info)
      setTimeout(() => {
        alert('Player2 win');
      }, 500)
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
  findPlayer1 = () => {
    const game = this.props.games.find(element => 
      element.id == this.props.match.params.id)
    if(game.player1 === this.props.userid) return true
    else return false
  }
  findPlayer2 = () => {
    const game = this.props.games.find(element => 
      element.id == this.props.match.params.id)
    if(game.player2 === this.props.userid) return true
    else return false
  }
  playerHere1 = () => {
    const game = this.props.games.find(element => 
      element.id == this.props.match.params.id)
    if(game.player1 === 0) return true
    else return false
  }
  playerHere2 = () => {
    const game = this.props.games.find(element => 
      element.id == this.props.match.params.id)
    if(game.player2 === 0) return true
    else return false
  }

  render(){
   const player1 =  this.getName1()
   const player2 = this.getName2()
   const health1 = this.getHealth1()
   const health2 = this.getHealth2()
   const one = this.findPlayer1()
   const two = this.findPlayer2()
   const here1 = this.playerHere1()
   const here2 = this.playerHere2()

    return(
    <div className="fight-game">
       <h1> Fight game</h1>
      
        <div className="player-1">

          <p>Name: {player1}</p>
          <p>Health: {health1}</p><br/>
          <ProgressBar className ="progress"  role="progressbar" now={health1} 
          label={`${health1}%`} srOnly />
           {two === true ?
          <div>
          <p>Your enemy</p>
           {here1 === true ? 
            <p>Waiting for enemy...</p> :
            <img src="http://www.stickpng.com/assets/images/5c6826733ce41c0ef9f4bd23.png"
           alt="player1"
           onClick={() => this.playerOneHealth(health1)}/>
          } 
          </div> :
          <div>
           <p>It's you</p>
          <img src="http://www.stickpng.com/assets/images/5c6826733ce41c0ef9f4bd23.png"
          alt="player1"/>
           </div>
          }
        </div>

        <div className="player-2">
          <p>Name:  {player2}</p>
          <p>Health: {health2}</p><br/>
          <ProgressBar className ="progress"  role="progressbar" now={health2} 
          label={`${health2}%`} srOnly />
          {one === true ?
          <div>
          <p>Your enemy</p>
          {here2 === true ? 
           <p>Waiting for enemy...</p> :
           <img src="https://purepng.com/public/uploads/large/purepng.com-samuraisamuraimilitarymedievalfighterwarriorarmorjapanese-1421526964522deerm.png"
           alt="player2"
           onClick={()=>this.playerTwoHealth(health2)}/>
          }
          </div> :
          <div>
           <p>It's you</p>
           <img src="https://purepng.com/public/uploads/large/purepng.com-samuraisamuraimilitarymedievalfighterwarriorarmorjapanese-1421526964522deerm.png"
           alt="player2"/>
            </div>
          }
        </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  games: state.game,
  users: state.users,
  userid: state.login
})
export default connect(mapStateToProps, {updateGameAction}) (Game)
