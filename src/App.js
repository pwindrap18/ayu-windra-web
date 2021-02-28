import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import CommentsPage from './pages/comments';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/comments" component={CommentsPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
