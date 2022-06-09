
import './App.css';
import {BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import Home from './pages/Index';
import Login from './component/auth/Login';



function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          
          <Route  path="/404">
            <div>
              <p>Page not found!</p>
            </div>
          </Route>
          <Redirect to='/404'>
            <div>
              <p>Page not found!</p>
            </div>
          </Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
