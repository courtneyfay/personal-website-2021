import NavBar from './components/NavBar';
import Connect from './components/Connect';
import Skills from './components/Skills';
import Blog from './components/Blog';
import HeroImage from './components/HeroImage';

function App() {
  // using webpack file system to grab markdown files for blog posts
  const importAll = (r) => r.keys().map(r);
  const markdownFiles = importAll(require.context('./posts', false, /\.md$/))
    .sort()
    .reverse();

  return (
    <div>
      <header>
        <NavBar />
        <HeroImage />
      </header>
      <main>
        <Skills />
        <Blog markdownFiles={markdownFiles} />
      </main>
      <footer>
        <Connect />
      </footer>
    </div>
  );
}

export default App;
