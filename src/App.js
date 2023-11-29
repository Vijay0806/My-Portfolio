// import logo from './logo.svg';
import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Project from './Project';
import Service from './Service';
import Skill from './Skill';
// import Experience from './Experience';
import ExperienceContainer from './ExperienceContainer';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Skill/>
     <Project/>
     <ExperienceContainer />
     <Contact/>
     <Footer />
    </div>
  );
}

export default App;
