import React from 'react';
import './about.css';

const About=()=>{
  return(
    <div id='about' className='aboutContainer pa6'>
          <div className='aboutText1 br4 shadow-4 pa4 f3'>
            <h3>Hello!</h3>
            <p className='textAlignLeft info p1 f3'>
              My name is James Kubitz. I’m an ambitious web developer who is actively seeking to
              improve my skillset. I am eager to continuously learn about my
              field of study and stay up to date with the latest technologies,
              often spending hours conducting independent research and teaching myself.
              Programming is a passion of mine as I enjoy the satisfaction of turning a concept into
              reality, taking pride in the finished product.
            </p>
            <h3 className='grow contactInfoLink'><a className='contactLink' href='#footer'>Contact and Social</a></h3>
          </div>
      </div>
  );
}

export default About;
