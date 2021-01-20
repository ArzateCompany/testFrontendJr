import React, { Component } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import AppSidebar from './components/AppSidebar';
import Header from './components/controls/Header';
// pages
import Exercise01 from './pages/quiz/Exercise01';
import Exercise02 from './pages/quiz/Exercise02';
import Exercise03 from './pages/quiz/Exercise03';
import Exercise04 from './pages/quiz/Exercise04';
import Exercise05 from './pages/quiz/Exercise05';
import Exercise06 from './pages/quiz/Exercise06';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className='wrapper'>
          <div style={{ height: '100%' }}>
            <Header title={<span><b>Spring</b>Labs</span>} />
            <AppSidebar />
            <Switch>
              <Redirect exact from='/' to='/exercise/e01' />
              <Route exact path='/exercise/e01' component={Exercise01} />
              <Route exact path='/exercise/e02' component={Exercise02} />
              <Route exact path='/exercise/e03' component={Exercise03} />
              <Route exact path='/exercise/e04' component={Exercise04} />
              <Route exact path='/exercise/e05' component={Exercise05} />
              <Route exact path='/exercise/e06' component={Exercise06} />
              <Route exact path='/exercise/e06' component={Exercise06} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}