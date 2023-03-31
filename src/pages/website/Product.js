import style from './Product.module.css';
import Desktop from './Services/Desktop';
import Mobile from './Services/Mobile';
import WebApp from './Services/WebApp';

const Services = () => {
  const html = (
    <div className={style.services}>
      <h1 className={style.service_head}>Our services</h1>
      <Desktop />
      <Mobile />
      <WebApp />
    </div>
  );
  return html;
};

export default Services;
