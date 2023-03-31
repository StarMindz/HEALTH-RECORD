import Intro from './Intro';
import Access from './Access';
import Insurance from './Insurance';
import style from './Intro.module.css';
import Hospital from './hospital';
import Services from './Product';
import Contact from './Contact';

const Home = () => {
  const html = (
    <div className={style.Home} id="home">
      <Intro />
      <Access />
      <Insurance />
      <Hospital />
      <div id="service">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
  return html;
};

export default Home;
