import React from 'react';
import './skillset.css'

const Skillset=()=> {
    return(
    <div className='skillsetContainer pa6'>
      <div className='skillsetInfo'>
        <div className='skillsetCard div1 br4 shadow-3 pa2 ma3 f2'>
          <h4 className='blueText'>Front-End</h4>
          <ul className='list1 f3'>
            <li>HTML</li>
            <li>CSS + Grid/Flexbox </li>
            <li>Bootstrap</li>
            <li>React/Redux</li>
            <li>Angular</li>
            <li>Javascript</li>
            <li>JSX</li>
          </ul>
        </div>
        <div className='skillsetCard div2 br4 shadow-3 pa2 ma3 f2'>
          <h4 className='blueText'>Back-End</h4>
          <ul className='list1 f3'>
            <li>Node.js</li>
            <li>Nodemon</li>
            <li>Express.js</li>
            <li>RESTful APIs</li>
            <li>Mongoose</li>
            <li>Knex.js</li>
            <li>C# ASP.Net</li>
          </ul>
        </div>
        <div className='skillsetCard div3 br4 shadow-3 pa2 ma3 f2'>
          <h4 className='blueText'>Database</h4>
          <ul className='list1 f3'>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>PostgressSQL</li>
            <li>SQL Server Management Studio</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>

      <div className='badgeContainer'>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge1'><a href='https://www.mongodb.com/' target='blank'><img src={require('./images/MongoDB.jpg')} style={{width:"40px", height:"40px"}} alt=''/></a></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge2'><a href='https://expressjs.com/' target='blank'><img src={require('./images/Expressjs.jpg')} style={{width:"40px", height:"40px"}} alt='' /></a></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge3'><a href='https://angularjs.org/' target='blank'><img src={require('./images/Angular.jpg')} style={{width:"40px", height:"40px"}} alt=''/></a></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge4'><a href='https://reactjs.org/' target='blank'><img src={require('./images/React.jpg')} style={{width:"40px", height:"40px"}} alt=''/></a></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge5'><a href='https://redux.js.org/' target='blank'><img src={require('./images/Redux.png')} style={{width:"40px", height:"40px"}} alt=''/></a></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge6'><a href='https://nodejs.org/en/' target='blank'><img src={require('./images/Node.jpg')} style={{width:"40px", height:"40px"}} alt=''/></a></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge7'><img src={require('./images/html.jpg')} style={{width:"40px", height:"40px"}} alt=''/></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge8'><img src={require('./images/CSS.jpg')} style={{width:"40px", height:"40px"}} alt=''/></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge9'><a href='https://getbootstrap.com/' target='blank'><img src={require('./images/Bootstrap.jpg')} style={{width:"40px", height:"40px"}} alt=''/></a></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge10'><a href='https://www.javascript.com/' target='blank'><img src={require('./images/JS.png')} style={{width:"40px", height:"40px"}} alt=''/></a></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge11'><img src={require('./images/Csharp.jpg')} style={{width:"40px", height:"40px"}} alt=''/></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge12'><a href='https://www.postgresql.org/' target='blank'><img src={require('./images/Postgress.jpg')} style={{width:"40px", height:"40px"}} alt=''/></a></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge13'><a href='https://firebase.google.com/' target='blank'><img src={require('./images/Firebase.jpg')} style={{width:"40px", height:"40px"}} alt=''/></a></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge14'><a href='https://www.getpostman.com/' target='blank'><img src={require('./images/Postman.jpg')} style={{width:"40px", height:"40px"}} alt=''/></a></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge15'><a href='https://www.heroku.com/' target='blank'><img src={require('./images/Heroku.jpg')} style={{width:"40px", height:"40px"}} alt=''/></a></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge16'><a href='https://www.adobe.com/products/photoshop.html' target='blank'><img src={require('./images/Photoshop.png')} style={{width:"40px", height:"40px"}} alt=''/></a></div>
        <div className='br4 shadow-3 pa2 ma2 grow bounce-6 badge17'><a href='https://atom.io/' target='blank'><img src={require('./images/Atom.jpg')} style={{width:"40px", height:"40px"}} alt=''/></a></div>
      </div>
    </div>
  );
}

export default Skillset;
