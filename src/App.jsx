import Navbar from './components/navbar';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Technologies from './components/Technologies.jsx';
const App = () => {
  return (
    <div className="relative min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {/* Navbar */}
      <Navbar />
      
      {/* Content Container */}
      <div className="container mx-auto px-8">
        <Hero />
        <About />
        <Technologies/>
      </div>
    </div>
  );
};

export default App;
