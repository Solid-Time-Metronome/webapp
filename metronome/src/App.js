import './App.css'
import React from 'react'
import Main from './pages/main/main.page'
import About from './pages/about/about.page'
import Nav from './components/Nav/Nav.component'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
      <Router>
         <div className='App'>
            <Nav />
            <Switch>
               <Route path='/' exact component={Main} />
               <About path='/about' component={About} />
            </Switch>
         </div>
      </Router>
  )
}

export default App
