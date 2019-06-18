import React from 'react';
import './contact.css';

const Contact=()=>{
  return(
    <div id='footer' className='contactContainer'>
      <div className='contactImageContainer'>
        <a a href="mailto:james.f.kubitz@gmail.com"><div className='br4 shadow-2 pa2 ma2 grow bounce-6 badge1'><img src={require('./contactImages/Gmail.jpg')} style={{width:"40px", height:"40px"}} alt='GmailImage'/></div></a>
        <a href='https://github.com/NeosUnderground'  target='blank'><div className='br4 shadow-2 pa2 ma3 grow bounce-6 badge1'><img src={require('./contactImages/Github.png')} style={{width:"40px", height:"40px"}} alt='GithubImage'/></div></a>
        <a href='https://www.linkedin.com/in/jameskubitz/' target='blank'><div className='br4 shadow-2 pa2 ma1 grow bounce-6 badge1'><img src={require('./contactImages/Linkedin.jpg')} style={{width:"40px", height:"40px"}} alt='LinkedinImage'/></div></a>
        <a href='https://dev.to/neosunderground' target='blank'><div className='br4 shadow-2 pa2 ma3 grow bounce-6 badge1'><img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" style={{width:"40px", height:"40px"}} alt="NeosUnderground's DEV Profile"/></div></a>
      </div>
      <h4 className='grow'><a  className='linkToTop' href='#about'>To the top!</a></h4>
      <p className='white'> Copyright &#169; 2019 - James Kubitz </p>
    </div>
  );
}

export default Contact;
