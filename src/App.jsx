import './App.css';
import About from './Home/About/About';
import Banner from './Home/Banner/Banner';
import Footer from './Home/Footer/Footer';
import Nav from './Home/Nav';
import Project from './Home/Project/Project';
import Skill from './Home/Skill/Skill';

function App() {
  return (
    <>
      <div className="mx-auto max-w-[1280px]">
        <Nav />
        <Banner />
        <About />
        <Skill />
        <Project />
      </div>
      <Footer />
    </>
  );
}

export default App;
