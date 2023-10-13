import React from 'react'
import image from '../assets/img/tech/image4.jpg'

function Comentarios() {
  return (
    <div className="clean-blog-post">
      <div className="row">
        <div className="col-lg-5"><img className="rounded img-fluid" src={image} /></div>
        <div className="col-lg-7">
          <h3>Lorem Ipsum dolor sit amet</h3>
          <div className="info"><span className="text-muted">Jan 16, 2018 by&nbsp;<a href="#">John Smith</a></span></div>
            <p>Lorem ipsum dolor sit amet</p>
            <button className="btn btn-outline-primary btn-sm" type="button">Read More</button>
          </div>
      </div>
    </div>
  )
}

export default Comentarios