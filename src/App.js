import './App.css';
import Hero from './components/sections/Hero/Hero';
import HeroAboutSection from './components/sections/About/HeroAboutSection';
import AboutSection from './components/sections/About/AboutSection';

function App() {

  return (
    <div className="App">
      <div>
        <Hero/>
        <HeroAboutSection/>
        <AboutSection/>
      </div>
    </div>
  );
}

export default App;
