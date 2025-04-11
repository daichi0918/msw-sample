import React from 'react';
import styles from './App.module.css';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import MainPage from './components/MainPage';

const App = () => {
  return (
    <div className={styles.app__root}>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/vehicle" component={MainPage} />
      </Switch>
    </div>
  );
};

export default App;
