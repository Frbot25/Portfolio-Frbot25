import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import './App.css';
import Nav from './components/Nav'
import main from './pages/main'
import portfolio from './pages/portfolio'
import service from './pages/service'
import about from './pages/about'
import contact from './pages/contact'
function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Route path="/" exact component={main} />
      <Route path="/portfolio" exact component={portfolio} />
      <Route path="/Service" exact component={service} />
      <Route path="/about" exact component={about} />
      <Route path="/contact" exact component={contact} />
    </div>

    </Router>
    
  );
}

export default App;
