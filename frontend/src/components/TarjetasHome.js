import React from 'react';

const TarjetasHome = ({ imageSrc, title, description, link }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card" style={{ boxShadow: '0px 2px 6px' }}>
        <img className="card-img-top w-100 d-block" src={imageSrc} alt={title} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
        <div>
        <a href={link} className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
            Click aquí 
        </a>             
        </div>
      </div>
    </div>
  );
};

export default TarjetasHome;
