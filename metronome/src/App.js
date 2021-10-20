import './App.css'
import Main from './pages/main/main.page'
import About from './pages/about/about.page'
import Contact from './pages/Contact/contact.jsx'
import Nav from './components/Nav/Nav.component'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
