import './App.css';
import Hero from './components/sections/Hero/Hero';
import AboutSection from './components/sections/About/AboutSection.jsx';
import ProjectsSection from './components/sections/Projects/Projects.jsx';

function App() {

  return (
    <div className="App" style={{ backgroundColor: 'rgb(254,233,61)' }}>
      <div>
        <Hero/>
        <AboutSection/>
        <ProjectsSection/>
      </div>
    </div>
  );
}

export default App;
