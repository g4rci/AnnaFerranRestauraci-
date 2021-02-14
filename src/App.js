import { React } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar, Home, Gallery, SimpleMap, Anna } from './Components'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/gallery'>
            <Gallery />
          </Route>
          <Route exact path='/contact'>
            <SimpleMap />
          </Route>
          <Route exact path='/anna'>
            <Anna />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
