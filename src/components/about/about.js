import React from 'react';
import './about.css';

const About=()=>{
  return(
    <div className='aboutContainer pa6'>
        <div className='aboutInfo'>
          <div className='aboutText1  br4 shadow-4 pa3 f4'>
            <h3 className='bounce-6 hello'>Hello!</h3>
            <p className='textAlignLeft'>
              My name is James Kubitz, I’m an ambitious web developer who is actively seeking to
              improve my skillset. I am determined to continuously learn about my
              field of study and stay up to date with the latest technologies. New concepts come quickly to me and I am able
              apply them accordingly; I often spend hours conducting independent research and teaching myself.
              Programming is a passion of mine as I enjoy the satisfaction of turning a concept into
              reality, taking pride in the finished product. My actions reflect someone who is mature and respectful towards others. My supervisors say I am a responsible
              and dependable person with a strong work ethic. I am an outgoing individual and a fun
              person to be around.
            </p>
          </div>
          <div className='aboutText2  br4 shadow-4 pa3 f4'>
            <h3>Experience</h3>
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
                <a a href='https://drive.google.com/open?id=1fUHcAPyeS3Ut5I2yEVvdTn606_DTOrSw' target='blank'><div className='br4 shadow-2 pa2 ma3 grow bounce-6 documentImage'><img src={require('./aboutImages/Document.jpg')} style={{width:"40px", height:"40px"}} alt='Resume'/></div></a>
                <p>Resume</p>
              </div>
              <div className='ma3'>
                <a a href='https://drive.google.com/open?id=130r71N3gp4xhCdWF5hUYFgbzpS-SCUxe' target='blank'><div className='br4 shadow-2 pa2 ma3 grow bounce-6 documentImage'><img src={require('./aboutImages/Document.jpg')} style={{width:"40px", height:"40px"}} alt='Cover Letter'/></div></a>
                <p>Cover Letter</p>
              </div>
            </div>

          </div>

        </div>
      </div>
  );
}

export default About;
