import React from 'react';
import './App.css';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Skillset from './components/skillset/skillset';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import {projectList} from './components/projectCard/projectList';


function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Skillset/>
      <Projects projects={projectList}/>
      <Contact/>
    </div>
  );
}

export default App;
