import React from 'react'
import image from '../assets/img/comments.jpg'

function Comentarios({title, date, user, description}) {
  return (
    <div className="clean-blog-post">
      <div className="row">
        <div className="col-lg-5"><img className="rounded img-fluid" src={image} style={{height: '250px', width: '90%'}}/></div>
        <div className="col-lg-7">
          <h3>{title}</h3>
          <div className="info"><span className="text-muted">{date} por</span><b>{user}</b></div>
            <p>{description}</p>
          </div>
      </div>
    </div>
  )
}

export default Comentarios