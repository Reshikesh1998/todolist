import Todolist from './Pages/Mainpage/index'
import Display from './Pages/displaypage/activitylist'

import './App.css';

import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/" component={Todolist}>
          
            </Route>

            <Route exact path="/display" component={Display} >

            </Route>

          </Switch>
        </div>
      </div>
    </Router>


  );
}

 export default App;
