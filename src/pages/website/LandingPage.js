import {
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from '../../components/nav/NavBar';
import Footer from '../../components/footer/footer';
import Home from './Home';

const LandingPage = () => {
  const html = (
    <div className="Website">
      <NavBar />
      <Routes className="appContainer">
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );

  return html;
};
export default LandingPage;
