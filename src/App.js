import NavBar from './components/NavBar';
import Connect from './components/Connect';
import Skills from './components/Skills';
import Blog from './components/Blog';
import HeroImage from './components/HeroImage';

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <HeroImage />
      </header>
      <main>
        <Skills />
        <Blog />
      </main>
      <footer>
        <Connect />
      </footer>
    </div>
  );
}

export default App;
