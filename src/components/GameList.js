import React from 'react'
// import {connect} from 'react-redux'
// import {sendGame} from '../actions/game'
import { Link } from 'react-router-dom'
import JoinGame from './JoinGame';


class GameList extends React.Component{
  // state={
  //  player1: this.props.player1,
  //  player2: 0
  // }
  // onSend = () => {
  //   this.props.sendGame(this.state)
  //   this.setState({
  //     email: '',
  //     password: '',
  //     name: ''
  //   })
  // }

  

  render(){
    return(<div>
    <button onClick={this.onSend}>
      <Link to={`/joingame`}>
        CREATE NEW GAME
      </Link>
    </button>

      {/* <div>
        <JoinGame/>
      </div> */}

    </div>)
  }
}

// const mapStateToProps = state => ({
//   player1: state.login
// })
// export default connect(mapStateToProps, {sendGame}) (GameList);
export default GameList