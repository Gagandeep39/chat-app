/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-20 14:13:35
 * @modify date 2021-02-20 14:13:35
 * @desc [description]
 */
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Join from './components/Join';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
      </Router>
    </div>
  );
}

export default App;
