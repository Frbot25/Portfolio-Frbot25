import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch 
} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import main from './pages/main';
import portfolio from './pages/portfolio';
import service from './pages/service';
import about from './pages/about';
import contact from './pages/contact';
import NotFound from './pages/NotFound';
import Footer from './pages/footer';
function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
      <Route exact path="/"  component={main} />
      <Route exact path="/portfolio" exact component={portfolio} />
      <Route exact path="/Service" exact component={service} />
      <Route exact path="/about" exact component={about} />
      <Route exact path="/contact" exact component={contact} />
      <Route component={NotFound} />
      </Switch>
      
    </div>
    <Footer />
    </Router>
    
  );
}

export default App;
