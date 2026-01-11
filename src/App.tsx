import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import Comparison from './components/sections/Comparison';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-neon-blue/30">
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Comparison />
      </main>
      <Footer />
    </div>
  );
}

export default App;
