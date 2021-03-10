import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import AnnouncementPage from './pages/announcement';

function App() {
  const [playing, setPlaying] = useState(false);
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          render={() => <Home playing={playing} setPlaying={setPlaying} />}
          exact
        />
        <Route
          path="/announcement"
          render={() => (
            <AnnouncementPage playing={playing} setPlaying={setPlaying} />
          )}
          exact
        />
      </Switch>
    </Router>
  );
}

export default App;
