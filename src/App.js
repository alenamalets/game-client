import React, {Component} from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Auth from './components/Auth'
import GameList from './components/GameList'
import Game from './components/Game'
import JoinGame from './components/JoinGame';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App-header'>
        <div>
        {!this.props.authenticated &&
            <Switch>
                <Route path="/login" component={Auth}/>
                <Route path="" render={() => <Redirect to="/login" />} />
            </Switch>}

        {this.props.authenticated &&
            <Switch>
                <Route path="/" exact component={GameList} />
                <Route path="/game" component={Game} />
                <Route path="/joingame" component={JoinGame} />
                <Route path="" render={() => <Redirect to="/" />} />
            </Switch>}
    </div>
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
    authenticated: !!state.login
})

// export default Main;
export default withRouter(connect(mapStateToProps)(App))
