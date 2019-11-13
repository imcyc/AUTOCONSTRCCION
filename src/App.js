import React from 'react';
import { HashRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <HashRouter basename='/'>
        <div>
          <Header />
          <Router basename={process.env.PUBLIC_URL}>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Router>
          <Footer />
        </div>
    </HashRouter>
  );
}

export default App;
