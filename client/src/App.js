/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-20 14:13:35
 * @modify date 2021-02-20 14:13:35
 * @desc [description]
 */
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'/chat'} component={Chat} />
          <Route path={'/'} component={Join} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
