import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import DsaSolutions from "./pages/DSASolutions/Project"
import OnlineShop from './pages/OnlineShop/Project';
import MyCovid from './pages/MyCovid/Project';
import cores from './pages/Course-Registration/Project'

import "./App.css"

function App() {
  return (
    <div>
      <div className="app">
            <Router>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/dsasolutions" component={DsaSolutions} />
                <Route path="/onlineshop" component={OnlineShop} />
                <Route path="/mycovid" component={MyCovid} />
                <Route path="/cores" component={cores} />
                <Footer />
            </Router>  
        </div>
    </div>
  )
}

export default App
