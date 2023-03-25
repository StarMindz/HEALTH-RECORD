import style from './Product.module.css';
import Desktop from './Services/Desktop';

const Services = () => {
  const html = (
    <div className={style.services}>
      <h1 className={style.service_head}>Our services</h1>
      <Desktop />
    </div>
  );
  return html;
};

export default Services;
