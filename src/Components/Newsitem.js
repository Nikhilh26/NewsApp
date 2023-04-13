import React, { Component, createRef } from 'react'
import "./Newsitem.css"


export default class Newsitem extends Component {

  run = () => {
    console.log(this.Iserror.current.style.display = "none")
  }

  constructor() {
    super();
    this.Iserror = createRef();
  }
  render() {
    
    
    let compareTime="1:35:35 AM"
    let { title, description, imageUrl, newsUrl, author, published } = this.props;
    return title && description && imageUrl && newsUrl && (
      <>

        <div className="card mb-3" ref={this.Iserror}>
          {/*bg-dark-subtle*/}
          <div className="row g-0 ">

            <div className="col-md-4">
              <img src={imageUrl} className="img-fluid rounded-start adjust-dim" alt="Cant show image" onError={() => this.run()} />
            </div>
            
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title} </h5>
                {new Date(published).toLocaleTimeString()<=compareTime &&
                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  {/* <span class="visually-hidden">New alerts</span> */}
                </span>
                }
                <p className="card-text">{description}</p>
                <p className="card-text"><small class="text-muted">Last updated by {!author ? "Unknown" : author} on {new Date(published).toLocaleTimeString()}</small></p>
                <a className="card-text" href={newsUrl} target="_blan">Read more... </a>
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
}
