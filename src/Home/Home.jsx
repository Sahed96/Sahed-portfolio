import About from './About/About';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Nav from './Nav';
import Project from './Project/Project';
import Skill from './Skill/Skill';

const Home = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1280px]">
        <Nav />
        <Banner />
        <About />
        <Skill />
        <Project />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
