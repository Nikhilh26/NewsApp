import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
 
  constructor(){
    super();
    this.state={
      vals:"",
    }
  }
  
  updateState=(event)=>{
    this.setState({vals:event.target.value})
  }

  updateSearchvalue=()=>{
    //window.history.pushState(null, "", "/");
    this.props.s(this.state.vals)
  }

  //ERROR
 /* 
 sortBypop(){
    this.setState({sortby:"popularity"})
    //this.props.s(this.state.vals,this.state.sortby)
  }
  
  sortByrel(event){
    this.setState({sortby:"relevance"})
    this.props.s(this.state.vals,this.state.sortby)
  }

  sortBypubat(event){
    this.setState({sortby:"publishedat"})
    this.props.s(this.state.vals,this.state.sortby)
  }*/
  
  render() {
    return (    
        //bg-dark && text-white->dark mode
        //.bg-body-secondary->light mode
        
        
        <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand active" to="/" title='Home'>A-ZNews</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to='/business'>Buisness</Link>
              </li>
            </ul>
            
            <form className="d-flex" role="search">
              <input className="form-control me-2" typeof="search" placeholder="Search" aria-label="Search" onChange={this.updateState}/>
              <button className="btn btn-outline-success" type="button" onClick={this.updateSearchvalue}>Search</button>
            </form>
          
          </div>
        </div>
      </nav>
    )

    // function newFunction() {
    //   return <ul className="dropdown-menu">
    //     <li onClick={this.sortByrel}><div className="dropdown-item " href="/">relevancy</div></li>
    //     <li onClick={this.sortBypop}><div className="dropdown-item " href="/">popularity</div></li>
    //     <li onClick={this.sortBypubat}><div className="dropdown-item " href="/">publishedat</div></li>
    //   </ul>;
    // }
    // <li className="nav-item dropdown">
    //             <a className="nav-link dropdown-toggle " href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //               Sort By
    //             </a>
    //             {/* {newFunction()} */}
    //           </li>
  }
}
