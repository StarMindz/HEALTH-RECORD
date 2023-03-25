import Intro from './Intro';
import Access from './Access';
import Insurance from './Insurance';
import style from './Intro.module.css';
import Hospital from './hospital';
import Services from './Product';

const Home = () => {
  const html = (
    <div className={style.Home}>
      <Intro />
      <Access />
      <Insurance />
      <Hospital />
      <Services />
    </div>
  );
  return html;
};

export default Home;
