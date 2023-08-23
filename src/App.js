import './App.css';
import Hero from './components/sections/Hero/Hero';
import HeroAboutSection from './components/sections/About/HeroAboutSection';

function App() {

  return (
    <div className="App">
      <div>
        <Hero/>
        <HeroAboutSection/>
      </div>
    </div>
  );
}

export default App;
