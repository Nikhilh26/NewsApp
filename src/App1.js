import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import App from './App2'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App1 extends Component {
  constructor(){
    super();
    this.state={
      loading:false,
      query:""
    }
  }
  
  run=(q,sortBy)=>{
    console.log(q)
    this.setState({query:q})
  }

  render() {
    return (
      
      <div>
        <Router>
            <Navbar s={this.run}/>
              
              <Routes>
                  <Route key="/"        path="/"          element={ <App q={this.state.query}                     /> } />
                  <Route key="science"  path='/science'   element={ <App q={this.state.query} category="science"  /> } />
                  <Route key="sports"   path='/sports'    element={ <App q={this.state.query} category="sports"   /> } />
                  <Route key="buisness" path='/business'  element={ <App q={this.state.query} category="business" /> } />
              </Routes>

         </Router>
          </div>
    )
  }
}
