import React from 'react'

function Course({ image, title, description }) {
    

    return ( 
<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img
        src={image}
        alt="Placeholder image"
      />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">

      <div className="media-content">
        <p className="title is-4">{title}</p>
      </div>
    </div>

    <div className="content">
      {description}
    </div>
  </div>
</div>

        // <div>
        //     <img src={image} height='100px' width='100px'></img>
        //     <div>{title}</div> 
        //     <div>{description}</div> 
        // </div>
    
);
}

export default Course;