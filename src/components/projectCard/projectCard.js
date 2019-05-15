import React from 'react';
import './projectCard.css';


const ProjectCard =({image, name, description, technolgy, url})=>{

  return(
    <div className='pa3 dib br4 ma4 bw2 shadow-5 grow tc f4 projectCard fadeIn'>
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{technolgy}</p>
          <a href={url} target='blank'><p>View</p></a>
        </div>
    </div>
  );
}

export default ProjectCard;
