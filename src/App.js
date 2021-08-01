import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Project1 from "./pages/Project1"
import Project2 from './pages/Project2';
import "./css/App.css"

function App() {
  return (
    <div>
      <div className="app">
            <Router>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/project1" component={Project1} />
                <Route path="/project2" component={Project2} />
                <Footer />
            </Router>  
        </div>
    </div>
  )
}

export default App
