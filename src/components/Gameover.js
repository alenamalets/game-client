import React from 'react'

class Gameover extends React.Component{
    render () {
        return (
            <h1>Game over. Winner: {this.props.winner}</h1>
        )
    }
  
}
export default Gameover