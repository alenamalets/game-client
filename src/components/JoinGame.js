import React from 'react'
import {connect} from 'react-redux'
import {sendGame} from '../actions/game'
import { Link } from 'react-router-dom'

class JoinGame extends React.Component{
  // state={
  //   player1: this.props.player1,
  //   player2: 0
  //  }

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
     <p>Game Id <span>1</span></p>
     <button>
     <Link to={`/game`}>
        JOIN GAME
      </Link>
     </button>
   </div>)
 }

}
// const mapStateToProps = state => ({
//   player1: state.login
// })
// export default connect(mapStateToProps, {sendGame}) (JoinGame);
export default JoinGame

