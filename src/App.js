import React, {Component} from 'react';
import store from './store'
import './App.css'
import {Provider} from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Auth from './components/Auth'
import GameList from './components/GameList'
import Game from './components/Game'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
        <div>
        {!this.props.authenticated &&
            <Switch>
                <Route path="/login" component={Auth}/>
                <Route path="/" render={() => <Redirect to="/login" />} />
            </Switch>}

        {this.props.authenticated &&
            <Switch>
                <Route path="/" exact component={GameList}/>
                <Route path="/game/:id" component={Game} />
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
