import style from './footer.module.css';
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import instagram from '../../assets/icons/instagram.png';

const Footer = () => {
  const html = (
    <div className={style.footer}>
      <div className={style.company}>
        <h1 className={style.company_head}>
          Harchive
        </h1>
        <p className={style.paragraph}>
          Access your health record securely, anywhere, anytime
        </p>
        <div className={style.socials}>
          <img className={style.socials_icon} src={facebook} alt="coonnect with facebook" />
          <img className={style.socials_icon} src={twitter} alt="coonnect with twitter" />
          <img className={style.socials_icon} src={instagram} alt="coonnect with instagram" />
        </div>
      </div>
      <div className={style.quick_links}>
        <h2 className={style.footer_head}>Quick Links</h2>
        <a href="/">Home</a>
        <a href="/about">Get started</a>
      </div>
      <div className={style.company_links}>
        <h2 className={style.footer_head}>Our Company</h2>
        <a href="/product">Product</a>
        <a href="/about">About us</a>
        <a href="/contact">Contact us</a>
      </div>
      <div className={style.information}>
        <h2 className={style.footer_head}>Information</h2>
        <a href="/privacy">Privacy policy</a>
        <a href="/terms">Terms and Condition</a>
        <a href="/faq">FAQ</a>
      </div>
      <hr className={style.horizontal} />
    </div>
  );
  return html;
};

export default Footer;
