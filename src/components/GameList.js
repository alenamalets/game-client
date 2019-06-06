import React from 'react'
import {connect} from 'react-redux'
import {sendGame, updateGameAction} from '../actions/game'
import '../styles/gamelist.css'
import { Redirect } from 'react-router-dom'


class GameList extends React.Component{

  state={
   player1: 0,
   player2: 0,
   health1: 0,
   health2: 0,
   status1: 1,
   status2: 1
  }
  onSend = () => {
    // this.props.sendGame(this.state)
    this.setState({
      player1: 0,
      player2: 0,
      health1: 0,
      health2: 0,
      status1: 1,
      status2: 1
    }, () => {
      this.props.sendGame(this.state)
    }) 
    
  }
  updateGame = (id) => {
    // this.props.updateGameAction(id, this.state)
    this.setState({
      ...this.state,
      player1 : this.props.player,
      status1 : 2,
      health1: 20,
      // redirect1: true
    }, () => {
      const info = {player1: this.state.player1, status1:this.state.status1,  health1:this.state.health1}
      this.props.updateGameAction(id, info)
    })  
  }

  updateGame2 = (id) => {
    // this.props.updateGameAction(id, this.state)
    this.setState({
      ...this.state,
      player2 : this.props.player,
      status2 : 2,
      health2: 20,
      // redirect1: true
    }, () => {
      const info = {player2: this.state.player2, status2:this.state.status2,  health2:this.state.health2}
      this.props.updateGameAction(id, info)
    })  
  }

  
  render(){
    const gameList = this.props.games
            .map((game, index) => {
                return (
                    <div className="game-list" 
                    key={index}>
                        <p>Game number {game.id} </p>
                        {game.status1 ===1 ?
                        <div className="game-players">
                        <button onClick={()=>this.updateGame(game.id)}>Join player 1 </button> 
                        {this.state.player1 !== 0 && <Redirect to={`/game/${game.id}`}/>} 
                        </div>:
                        <p className="players">PLAYER 1 IS HERE </p>   }

                        {game.status2===1 ?
                        <div>
                        <button onClick={()=>this.updateGame2(game.id)}>Join player 2 </button> 
                        {this.state.player2 !== 0 && <Redirect to={`/game/${game.id}`}/>} 
                        </div>:
                        <p className="players">PLAYER 2 IS HERE. GAME FULL </p>   }
                    </div>
                )
            })
    return(
    <div>
      <button className="game-list" 
      onClick={this.onSend}>
          Create New Game
      </button>
      {gameList}
    </div>
    )
  }
}

const mapStateToProps = state => ({
  player: state.login,
  games: state.game
})
export default connect(mapStateToProps, {sendGame, updateGameAction}) (GameList);
