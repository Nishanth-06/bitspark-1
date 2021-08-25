
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Calculator from './Components/Calculator';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Form/>
            </Route>

            <Route exact path="/calculator">
              <Calculator/>
            </Route>
          </Switch>
        </div>
        
    </div>
    </Router>
    
  );
}

export default App;
