import React from 'react'
import {connect} from 'react-redux'
import {sendGame, updateGameAction} from '../actions/game'
import { Link, Redirect } from 'react-router-dom'



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
      health1: 100,
      // redirect1: true
    }, () => {
      this.props.updateGameAction(id, this.state)
    })  
    console.log('state1222', this.props.player);
  }

  updateGame2 = (id) => {
    // this.props.updateGameAction(id, this.state)
    this.setState({
      ...this.state,
      player2 : this.props.player,
      status2 : 2,
      health2: 100,
      // redirect1: true
    }, () => {
      this.props.updateGameAction(id, this.state)
    })  
    console.log('state1222', this.props.player);
  }

  
  render(){
    console.log('state', this.state);
   
    const gameList = this.props.games
            .map((game, index) => {
                return (
                    <div key={index}>
                        <p>Game number {game.id} </p>
                        {game.status1 ===1 ?
                        <div>
                        <button onClick={()=>this.updateGame(game.id)}>Join player 1 </button> 
                        {this.state.player1 !== 0 && <Redirect to={`/game/${game.id}`}/>} 
                        </div>:
                        <p>PLAYER 1 IS HERE </p>   }

                        {game.status2===1 ?
                        <div>
                        <button onClick={()=>this.updateGame2(game.id)}>Join player 2 </button> 
                        {this.state.player2 !== 0 && <Redirect to={`/game/${game.id}`}/>} 
                        </div>:
                        <p>PLAYER 2 IS HERE. GAME FULL </p>   }
                    </div>
                )
            })
    return(
    <div>
      <button onClick={this.onSend}>
          CREATE NEW GAME
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
