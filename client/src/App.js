import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route, 
         NavLink, 
         Routes 
        } from 'react-router-dom';
import './App.css';
import Sample from './components/Sample'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <NavLink to="/sample">Sample</NavLink>
            <NavLink to="/">Home</NavLink>
            <Routes>
              <Route path='/sample' element={<Sample/>} />
            </Routes>
          </Router>
        </div>
      </div>
    )
  } 
}

export default App;