import Intro from './Intro';
import Access from './Access';
import Insurance from './Insurance';
import style from './Intro.module.css';

const Home = () => {
  const html = (
    <div className={style.Home}>
      <Intro />
      <Access />
      <Insurance />
    </div>
  );
  return html;
};

export default Home;
