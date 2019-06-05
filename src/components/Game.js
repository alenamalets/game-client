import React from 'react'
import {connect} from 'react-redux'


class Game extends React.Component{

  render(){
    return(
    <div>
        Fight game
    </div>
    )
  }
}

const mapStateToProps = state => ({
  player1: state.login
})
export default connect(mapStateToProps, ) (Game)
