import React from 'react';
import './experience.css';

const Experience =()=>{
  return(
    <div className='experienceContainer pa6'>
      <div className='experienceInfo br4 shadow-4 pa4 f3'>
        <h3>Professional Experience</h3>
        <p className='textAlignLeft'> Programmer Analyst - University of Missouri, August 2018 - Current</p>
        <ul>
          <li>Maintain and update existing web applications using C# ASP.NET,TFS, and SQL.</li>
          <li>Use SQL Server Management Studio for databases and tables.</li>
          <li>Work closely with clients to design and develop applications.</li>
        </ul>
        <p className='textAlignLeft'> Bachelor of Science in Information Systems - Columbia College, December 2018</p>
        <p className='textAlignLeft'> Associate of Science in Programming - Moberly Area Community College, May 2016</p>

        <div className='documentImageContainer'>
          <div className='ma3'>
            <a a href='https://drive.google.com/file/d/1fUHcAPyeS3Ut5I2yEVvdTn606_DTOrSw/view?usp=sharing' target='blank'><div className='br4 shadow-2 pa2 ma3 grow bounce-6 documentImage'><img src={require('./experienceImages/Document.jpg')} style={{width:"40px", height:"40px"}} alt='Resume'/></div></a>
            <p>Resume</p>
          </div>
          <div className='ma3'>
            <a a href='https://drive.google.com/file/d/130r71N3gp4xhCdWF5hUYFgbzpS-SCUxe/view?usp=sharing' target='blank'><div className='br4 shadow-2 pa2 ma3 grow bounce-6 documentImage'><img src={require('./experienceImages/Document.jpg')} style={{width:"40px", height:"40px"}} alt='Cover Letter'/></div></a>
            <p>Cover Letter</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
